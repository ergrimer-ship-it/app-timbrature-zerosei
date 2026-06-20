import { onDocumentWritten, onDocumentCreated, onDocumentUpdated } from 'firebase-functions/v2/firestore';
import { onSchedule } from 'firebase-functions/v2/scheduler';
import { onRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import { CloudTasksClient } from '@google-cloud/tasks';

admin.initializeApp();
const db = admin.firestore();
const messaging = admin.messaging();
const tasksClient = new CloudTasksClient();

const LOCATION = 'us-central1';
const QUEUE = 'shift-reminders';
const MAX_SCHEDULE_HOURS = 29 * 24;

interface AssignedShift {
    id: string;
    date: string;
    userId: string;
    startTime: string;
    endTime?: string;
}

function todayItaly(now: Date): string {
    return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Rome' }).format(now);
}

function romeLocalToUtc(dateStr: string, timeStr: string): Date {
    const guessUtc = new Date(`${dateStr}T${timeStr}:00Z`);
    const romeStr = new Intl.DateTimeFormat('sv-SE', {
        timeZone: 'Europe/Rome',
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false,
    }).format(guessUtc);
    const romeAsUtc = new Date(romeStr.replace(' ', 'T') + 'Z');
    return new Date(2 * guessUtc.getTime() - romeAsUtc.getTime());
}

/** Invia push a un utente specifico (token singolo) */
async function sendPush(userId: string, title: string, body: string): Promise<void> {
    const userSnap = await db.doc(`users/${userId}`).get();
    if (!userSnap.exists) return;
    const token: string | undefined = userSnap.data()?.fcmToken;
    if (!token) return;
    try {
        await messaging.send({ token, notification: { title, body } });
    } catch (err: any) {
        console.warn(`FCM send failed for user ${userId}:`, err.message);
    }
}

/** Invia push a tutti gli admin (token singolo per utente) */
async function sendPushToAllAdmins(title: string, body: string): Promise<void> {
    const snapshot = await db.collection('users').where('isAdmin', '==', true).get();
    const sends = snapshot.docs
        .map(d => d.data()?.fcmToken as string | undefined)
        .filter((token): token is string => !!token)
        .map(token =>
            messaging.send({ token, notification: { title, body } })
                .catch((err: any) => console.warn('FCM admin push failed:', err.message))
        );
    await Promise.all(sends);
}

async function deleteTask(project: string, taskId: string): Promise<void> {
    const parent = tasksClient.queuePath(project, LOCATION, QUEUE);
    try {
        await tasksClient.deleteTask({ name: `${parent}/tasks/${taskId}` });
    } catch {
        // task non esiste o già eliminato, ignora
    }
}

async function createTask(
    project: string,
    taskId: string,
    scheduleTime: Date,
    payload: object
): Promise<void> {
    const parent = tasksClient.queuePath(project, LOCATION, QUEUE);
    const functionUrl = `https://${LOCATION}-${project}.cloudfunctions.net/handleShiftReminder`;
    try {
        await tasksClient.createTask({
            parent,
            task: {
                name: `${parent}/tasks/${taskId}`,
                httpRequest: {
                    httpMethod: 'POST',
                    url: functionUrl,
                    headers: { 'Content-Type': 'application/json' },
                    body: Buffer.from(JSON.stringify(payload)).toString('base64'),
                },
                scheduleTime: { seconds: Math.floor(scheduleTime.getTime() / 1000) },
            },
        });
    } catch (err: any) {
        if (err.code !== 6) throw err; // ignora ALREADY_EXISTS
    }
}

/** Pianifica i promemoria per un singolo turno */
async function scheduleShiftTasks(project: string, shift: AssignedShift, now: Date): Promise<void> {
    const maxFuture = new Date(now.getTime() + MAX_SCHEDULE_HOURS * 60 * 60 * 1000);
    const safeId = shift.id.replace(/[^a-zA-Z0-9_-]/g, '-');

    // ── Promemoria ENTRATA: 10 min prima dell'inizio ──
    const startReminderTime = new Date(
        romeLocalToUtc(shift.date, shift.startTime).getTime() - 10 * 60 * 1000
    );
    if (startReminderTime > now && startReminderTime <= maxFuture) {
        const startMin = Math.floor(startReminderTime.getTime() / 60000);
        const startTaskId = `${safeId}-start-${startMin}`;
        await deleteTask(project, `${safeId}-start`);
        await createTask(project, startTaskId, startReminderTime, {
            userId: shift.userId,
            type: 'start',
            startTime: shift.startTime,
        });
    }

    // ── Promemoria USCITA: 10 min DOPO la fine ──
    if (shift.endTime) {
        const endReminderTime = new Date(
            romeLocalToUtc(shift.date, shift.endTime).getTime() + 10 * 60 * 1000
        );
        if (endReminderTime > now && endReminderTime <= maxFuture) {
            const endMin = Math.floor(endReminderTime.getTime() / 60000);
            const endTaskId = `${safeId}-end-${endMin}`;
            await deleteTask(project, `${safeId}-end`);
            await createTask(project, endTaskId, endReminderTime, {
                userId: shift.userId,
                type: 'end',
                endTime: shift.endTime,
            });
        }
    }
}

// Trigger: quando l'admin salva i turni, pianifica i task
export const onAssignedShiftsUpdated = onDocumentWritten(
    { document: 'assignedShifts/all', region: LOCATION },
    async (event) => {
        const project = process.env.GCLOUD_PROJECT!;
        const now = new Date();
        const todayStr = todayItaly(now);
        const shifts: AssignedShift[] = event.data?.after?.data()?.shifts ?? [];
        for (const shift of shifts) {
            if (shift.date < todayStr) continue;
            await scheduleShiftTasks(project, shift, now);
        }
    }
);

// Ogni notte a mezzanotte: pianifica i turni che entrano nella finestra
export const scheduleDailyShiftTasks = onSchedule(
    { schedule: '0 0 * * *', timeZone: 'Europe/Rome', region: LOCATION },
    async () => {
        const project = process.env.GCLOUD_PROJECT!;
        const now = new Date();
        const todayStr = todayItaly(now);
        const snap = await db.doc('assignedShifts/all').get();
        if (!snap.exists) return;
        const shifts: AssignedShift[] = snap.data()?.shifts ?? [];
        for (const shift of shifts) {
            if (shift.date < todayStr) continue;
            await scheduleShiftTasks(project, shift, now);
        }
    }
);

// Handler chiamato da Cloud Tasks al momento giusto
export const handleShiftReminder = onRequest(
    { region: LOCATION, invoker: 'public' },
    async (req, res) => {
        const { userId, type, startTime, endTime } = req.body as {
            userId: string;
            type: 'start' | 'end';
            startTime?: string;
            endTime?: string;
        };

        const alreadyClockedIn = (await db.doc(`activeShifts/${userId}`).get()).exists;

        if (type === 'start' && !alreadyClockedIn) {
            await sendPush(
                userId,
                '⏰ Promemoria Entrata',
                `Tra 10 minuti inizia il tuo turno (${startTime}). Ricordati di timbrare l'entrata!`
            );
        } else if (type === 'end' && alreadyClockedIn) {
            await sendPush(
                userId,
                '⏰ Promemoria Uscita',
                `Sono le ${endTime} e hai ancora il turno attivo. Ricordati di timbrare l'uscita!`
            );
        }

        res.sendStatus(200);
    }
);

// Notifica push agli admin quando un dipendente timbra entrata o uscita
export const onNewNotification = onDocumentCreated(
    { document: 'notifications/{notifId}', region: LOCATION },
    async (event) => {
        const data = event.data?.data() as { type: string; message: string } | undefined;
        if (!data) return;
        const { type, message } = data;
        if (type !== 'clock_in' && type !== 'clock_out') return;
        const title = type === 'clock_in' ? '🟢 Timbratura Entrata' : '🔴 Timbratura Uscita';
        await sendPushToAllAdmins(title, message);
    }
);

// Notifica admin quando un dipendente invia una richiesta permesso
export const onLeaveRequestCreated = onDocumentCreated(
    { document: 'leaveRequests/{requestId}', region: LOCATION },
    async (event) => {
        const data = event.data?.data() as { userName?: string } | undefined;
        if (!data) return;
        await sendPushToAllAdmins(
            '🏖️ Nuova Richiesta Permesso',
            `${data.userName ?? 'Un dipendente'} ha inviato una richiesta di permesso`
        );
    }
);

// Notifica dipendente quando admin approva o rifiuta la richiesta
export const onLeaveRequestUpdated = onDocumentUpdated(
    { document: 'leaveRequests/{requestId}', region: LOCATION },
    async (event) => {
        const before = event.data?.before?.data() as { status?: string; userId?: string } | undefined;
        const after  = event.data?.after?.data()  as { status?: string; userId?: string } | undefined;
        if (!before || !after) return;
        if (before.status === after.status) return;
        if (!after.userId) return;
        if (after.status === 'approved') {
            await sendPush(after.userId, '✅ Permesso Approvato', 'La tua richiesta di permesso è stata approvata!');
        } else if (after.status === 'rejected') {
            await sendPush(after.userId, '❌ Permesso Rifiutato', 'La tua richiesta di permesso è stata rifiutata.');
        }
    }
);

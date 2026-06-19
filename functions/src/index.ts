import { onDocumentWritten, onDocumentCreated } from 'firebase-functions/v2/firestore';
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
const MAX_SCHEDULE_HOURS = 29 * 24; // Cloud Tasks max è 30 giorni, usiamo 29

interface AssignedShift {
    id: string;
    date: string;      // YYYY-MM-DD
    userId: string;
    startTime: string; // HH:mm
    endTime?: string;  // HH:mm
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
        // ALREADY_EXISTS = task con stesso nome esiste ancora (deduplication 1h), ignora
        if (err.code !== 6) throw err;
    }
}

// Pianifica task per un singolo turno (se entro 29 giorni)
async function scheduleShiftTasks(project: string, shift: AssignedShift, now: Date): Promise<void> {
    const [h] = shift.startTime.split(':').map(Number);
    if (h < 16) return;

    const maxFuture = new Date(now.getTime() + MAX_SCHEDULE_HOURS * 60 * 60 * 1000);
    const safeId = shift.id.replace(/[^a-zA-Z0-9_-]/g, '-');

    // Task promemoria inizio (startTime - 10 min)
    const startReminderTime = new Date(
        romeLocalToUtc(shift.date, shift.startTime).getTime() - 10 * 60 * 1000
    );
    if (startReminderTime > now && startReminderTime <= maxFuture) {
        // Nome include i minuti di schedule → unico per orario, evita conflitti su cambio orario
        const startMin = Math.floor(startReminderTime.getTime() / 60000);
        const startTaskId = `${safeId}-start-${startMin}`;
        await deleteTask(project, `${safeId}-start`); // pulizia vecchio formato
        await createTask(project, startTaskId, startReminderTime, {
            userId: shift.userId,
            type: 'start',
            startTime: shift.startTime,
        });
    }

    // Task promemoria fine turno
    if (shift.endTime) {
        const endUtc = romeLocalToUtc(shift.date, shift.endTime);
        if (endUtc > now && endUtc <= maxFuture) {
            const endMin = Math.floor(endUtc.getTime() / 60000);
            const endTaskId = `${safeId}-end-${endMin}`;
            await deleteTask(project, `${safeId}-end`); // pulizia vecchio formato
            await createTask(project, endTaskId, endUtc, {
                userId: shift.userId,
                type: 'end',
                endTime: shift.endTime,
            });
        }
    }
}

// Trigger: quando l'admin salva i turni, pianifica i task entro 29 giorni
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

// Ogni notte a mezzanotte: pianifica i turni che entrano nella finestra dei 29 giorni
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

// Fallback: ogni 15 min dalle 21:45 per chi non ha timbrato l'uscita
export const checkLateClockout = onSchedule(
    { schedule: '45,0,15,30 21-23 * * *', timeZone: 'Europe/Rome', region: LOCATION },
    async () => {
        const activeSnap = await db.collection('activeShifts').get();
        const project = process.env.GCLOUD_PROJECT!;
        void project;
        for (const doc of activeSnap.docs) {
            await sendPush(
                doc.id,
                'Uscita non timbrata',
                "Non hai ancora timbrato l'uscita. Ricordati di farlo!"
            );
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
                'Promemoria Timbratura',
                `Tra 10 minuti inizia il tuo turno (${startTime}). Ricordati di timbrare!`
            );
        } else if (type === 'end' && alreadyClockedIn) {
            await sendPush(
                userId,
                'Uscita non timbrata',
                `Sono le ${endTime}, ricordati di timbrare l'uscita!`
            );
        }

        res.sendStatus(200);
    }
);

// Notifica push agli admin quando un dipendente timbra entrata o uscita
export const onNewNotification = onDocumentCreated(
    { document: 'notifications/{notifId}', region: LOCATION },
    async (event) => {
        const data = event.data?.data();
        if (!data) return;
        const { type, message } = data as { type: string; message: string };
        if (type !== 'clock_in' && type !== 'clock_out') return;
        const title = type === 'clock_in' ? 'Timbratura Entrata' : 'Timbratura Uscita';
        await sendPushToAllAdmins(title, message);
    }
);

import { onDocumentWritten } from 'firebase-functions/v2/firestore';
import { onRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import { CloudTasksClient } from '@google-cloud/tasks';

admin.initializeApp();
const db = admin.firestore();
const messaging = admin.messaging();
const tasksClient = new CloudTasksClient();

const LOCATION = 'us-central1';
const QUEUE = 'shift-reminders';

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

// Converte data+ora locale Rome in UTC, gestisce CET/CEST automaticamente
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
        // task non esiste, ignora
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

            const [h] = shift.startTime.split(':').map(Number);
            if (h < 16) continue;

            const safeId = shift.id.replace(/[^a-zA-Z0-9_-]/g, '-');

            // --- Task promemoria inizio turno ---
            const startReminderTime = new Date(
                romeLocalToUtc(shift.date, shift.startTime).getTime() - 10 * 60 * 1000
            );
            const startTaskId = `${safeId}-start`;
            await deleteTask(project, startTaskId);
            if (startReminderTime > now) {
                await createTask(project, startTaskId, startReminderTime, {
                    userId: shift.userId,
                    type: 'start',
                    startTime: shift.startTime,
                });
            }

            // --- Task promemoria fine turno ---
            if (shift.endTime) {
                const endUtc = romeLocalToUtc(shift.date, shift.endTime);
                const endTaskId = `${safeId}-end`;
                await deleteTask(project, endTaskId);
                if (endUtc > now) {
                    await createTask(project, endTaskId, endUtc, {
                        userId: shift.userId,
                        type: 'end',
                        endTime: shift.endTime,
                    });
                }
            }
        }
    }
);

// Handler chiamato da Cloud Tasks al momento giusto
export const handleShiftReminder = onRequest(
    { region: LOCATION },
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

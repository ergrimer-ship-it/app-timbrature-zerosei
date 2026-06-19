"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onNewNotification = exports.handleShiftReminder = exports.checkLateClockout = exports.scheduleDailyShiftTasks = exports.onAssignedShiftsUpdated = void 0;
const firestore_1 = require("firebase-functions/v2/firestore");
const scheduler_1 = require("firebase-functions/v2/scheduler");
const https_1 = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const tasks_1 = require("@google-cloud/tasks");
admin.initializeApp();
const db = admin.firestore();
const messaging = admin.messaging();
const tasksClient = new tasks_1.CloudTasksClient();
const LOCATION = 'us-central1';
const QUEUE = 'shift-reminders';
const MAX_SCHEDULE_HOURS = 29 * 24; // Cloud Tasks max è 30 giorni, usiamo 29
function todayItaly(now) {
    return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Rome' }).format(now);
}
function romeLocalToUtc(dateStr, timeStr) {
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
async function sendPushToAllAdmins(title, body) {
    const snapshot = await db.collection('users').where('isAdmin', '==', true).get();
    const sends = snapshot.docs
        .map(d => { var _a; return (_a = d.data()) === null || _a === void 0 ? void 0 : _a.fcmToken; })
        .filter((token) => !!token)
        .map(token => messaging.send({ token, notification: { title, body } })
        .catch((err) => console.warn('FCM admin push failed:', err.message)));
    await Promise.all(sends);
}
async function sendPush(userId, title, body) {
    var _a;
    const userSnap = await db.doc(`users/${userId}`).get();
    if (!userSnap.exists)
        return;
    const token = (_a = userSnap.data()) === null || _a === void 0 ? void 0 : _a.fcmToken;
    if (!token)
        return;
    try {
        await messaging.send({ token, notification: { title, body } });
    }
    catch (err) {
        console.warn(`FCM send failed for user ${userId}:`, err.message);
    }
}
async function deleteTask(project, taskId) {
    const parent = tasksClient.queuePath(project, LOCATION, QUEUE);
    try {
        await tasksClient.deleteTask({ name: `${parent}/tasks/${taskId}` });
    }
    catch (_a) {
        // task non esiste o già eliminato, ignora
    }
}
async function createTask(project, taskId, scheduleTime, payload) {
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
    }
    catch (err) {
        // ALREADY_EXISTS = task con stesso nome esiste ancora (deduplication 1h), ignora
        if (err.code !== 6)
            throw err;
    }
}
// Pianifica task per un singolo turno (se entro 29 giorni)
async function scheduleShiftTasks(project, shift, now) {
    const [h] = shift.startTime.split(':').map(Number);
    if (h < 16)
        return;
    const maxFuture = new Date(now.getTime() + MAX_SCHEDULE_HOURS * 60 * 60 * 1000);
    const safeId = shift.id.replace(/[^a-zA-Z0-9_-]/g, '-');
    // Task promemoria inizio (startTime - 10 min)
    const startReminderTime = new Date(romeLocalToUtc(shift.date, shift.startTime).getTime() - 10 * 60 * 1000);
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
exports.onAssignedShiftsUpdated = (0, firestore_1.onDocumentWritten)({ document: 'assignedShifts/all', region: LOCATION }, async (event) => {
    var _a, _b, _c, _d;
    const project = process.env.GCLOUD_PROJECT;
    const now = new Date();
    const todayStr = todayItaly(now);
    const shifts = (_d = (_c = (_b = (_a = event.data) === null || _a === void 0 ? void 0 : _a.after) === null || _b === void 0 ? void 0 : _b.data()) === null || _c === void 0 ? void 0 : _c.shifts) !== null && _d !== void 0 ? _d : [];
    for (const shift of shifts) {
        if (shift.date < todayStr)
            continue;
        await scheduleShiftTasks(project, shift, now);
    }
});
// Ogni notte a mezzanotte: pianifica i turni che entrano nella finestra dei 29 giorni
exports.scheduleDailyShiftTasks = (0, scheduler_1.onSchedule)({ schedule: '0 0 * * *', timeZone: 'Europe/Rome', region: LOCATION }, async () => {
    var _a, _b;
    const project = process.env.GCLOUD_PROJECT;
    const now = new Date();
    const todayStr = todayItaly(now);
    const snap = await db.doc('assignedShifts/all').get();
    if (!snap.exists)
        return;
    const shifts = (_b = (_a = snap.data()) === null || _a === void 0 ? void 0 : _a.shifts) !== null && _b !== void 0 ? _b : [];
    for (const shift of shifts) {
        if (shift.date < todayStr)
            continue;
        await scheduleShiftTasks(project, shift, now);
    }
});
// Fallback: ogni 15 min dalle 21:45 per chi non ha timbrato l'uscita
exports.checkLateClockout = (0, scheduler_1.onSchedule)({ schedule: '45,0,15,30 21-23 * * *', timeZone: 'Europe/Rome', region: LOCATION }, async () => {
    const activeSnap = await db.collection('activeShifts').get();
    const project = process.env.GCLOUD_PROJECT;
    void project;
    for (const doc of activeSnap.docs) {
        await sendPush(doc.id, 'Uscita non timbrata', "Non hai ancora timbrato l'uscita. Ricordati di farlo!");
    }
});
// Handler chiamato da Cloud Tasks al momento giusto
exports.handleShiftReminder = (0, https_1.onRequest)({ region: LOCATION, invoker: 'public' }, async (req, res) => {
    const { userId, type, startTime, endTime } = req.body;
    const alreadyClockedIn = (await db.doc(`activeShifts/${userId}`).get()).exists;
    if (type === 'start' && !alreadyClockedIn) {
        await sendPush(userId, 'Promemoria Timbratura', `Tra 10 minuti inizia il tuo turno (${startTime}). Ricordati di timbrare!`);
    }
    else if (type === 'end' && alreadyClockedIn) {
        await sendPush(userId, 'Uscita non timbrata', `Sono le ${endTime}, ricordati di timbrare l'uscita!`);
    }
    res.sendStatus(200);
});
// Notifica push agli admin quando un dipendente timbra entrata o uscita
exports.onNewNotification = (0, firestore_1.onDocumentCreated)({ document: 'notifications/{notifId}', region: LOCATION }, async (event) => {
    var _a;
    const data = (_a = event.data) === null || _a === void 0 ? void 0 : _a.data();
    if (!data)
        return;
    const { type, message } = data;
    if (type !== 'clock_in' && type !== 'clock_out')
        return;
    const title = type === 'clock_in' ? 'Timbratura Entrata' : 'Timbratura Uscita';
    await sendPushToAllAdmins(title, message);
});
//# sourceMappingURL=index.js.map
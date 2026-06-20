"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onLeaveRequestUpdated = exports.onLeaveRequestCreated = exports.onNewNotification = exports.handleShiftReminder = exports.scheduleDailyShiftTasks = exports.onAssignedShiftsUpdated = void 0;
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
const MAX_SCHEDULE_HOURS = 29 * 24;
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
/** Invia push a un utente specifico (token singolo) */
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
/** Invia push a tutti gli admin (token singolo per utente) */
async function sendPushToAllAdmins(title, body) {
    const snapshot = await db.collection('users').where('isAdmin', '==', true).get();
    const sends = snapshot.docs
        .map(d => { var _a; return (_a = d.data()) === null || _a === void 0 ? void 0 : _a.fcmToken; })
        .filter((token) => !!token)
        .map(token => messaging.send({ token, notification: { title, body } })
        .catch((err) => console.warn('FCM admin push failed:', err.message)));
    await Promise.all(sends);
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
        if (err.code !== 6)
            throw err; // ignora ALREADY_EXISTS
    }
}
/** Pianifica i promemoria per un singolo turno */
async function scheduleShiftTasks(project, shift, now) {
    const maxFuture = new Date(now.getTime() + MAX_SCHEDULE_HOURS * 60 * 60 * 1000);
    const safeId = shift.id.replace(/[^a-zA-Z0-9_-]/g, '-');
    // ── Promemoria ENTRATA: 10 min prima dell'inizio ──
    const startReminderTime = new Date(romeLocalToUtc(shift.date, shift.startTime).getTime() - 10 * 60 * 1000);
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
        const endReminderTime = new Date(romeLocalToUtc(shift.date, shift.endTime).getTime() + 10 * 60 * 1000);
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
// Ogni notte a mezzanotte: pianifica i turni che entrano nella finestra
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
// Handler chiamato da Cloud Tasks al momento giusto
exports.handleShiftReminder = (0, https_1.onRequest)({ region: LOCATION, invoker: 'public' }, async (req, res) => {
    const { userId, type, startTime, endTime } = req.body;
    const alreadyClockedIn = (await db.doc(`activeShifts/${userId}`).get()).exists;
    if (type === 'start' && !alreadyClockedIn) {
        await sendPush(userId, '⏰ Promemoria Entrata', `Tra 10 minuti inizia il tuo turno (${startTime}). Ricordati di timbrare l'entrata!`);
    }
    else if (type === 'end' && alreadyClockedIn) {
        await sendPush(userId, '⏰ Promemoria Uscita', `Sono le ${endTime} e hai ancora il turno attivo. Ricordati di timbrare l'uscita!`);
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
    const title = type === 'clock_in' ? '🟢 Timbratura Entrata' : '🔴 Timbratura Uscita';
    await sendPushToAllAdmins(title, message);
});
// Notifica admin quando un dipendente invia una richiesta permesso
exports.onLeaveRequestCreated = (0, firestore_1.onDocumentCreated)({ document: 'leaveRequests/{requestId}', region: LOCATION }, async (event) => {
    var _a, _b;
    const data = (_a = event.data) === null || _a === void 0 ? void 0 : _a.data();
    if (!data)
        return;
    await sendPushToAllAdmins('🏖️ Nuova Richiesta Permesso', `${(_b = data.userName) !== null && _b !== void 0 ? _b : 'Un dipendente'} ha inviato una richiesta di permesso`);
});
// Notifica dipendente quando admin approva o rifiuta la richiesta
exports.onLeaveRequestUpdated = (0, firestore_1.onDocumentUpdated)({ document: 'leaveRequests/{requestId}', region: LOCATION }, async (event) => {
    var _a, _b, _c, _d;
    const before = (_b = (_a = event.data) === null || _a === void 0 ? void 0 : _a.before) === null || _b === void 0 ? void 0 : _b.data();
    const after = (_d = (_c = event.data) === null || _c === void 0 ? void 0 : _c.after) === null || _d === void 0 ? void 0 : _d.data();
    if (!before || !after)
        return;
    if (before.status === after.status)
        return;
    if (!after.userId)
        return;
    if (after.status === 'approved') {
        await sendPush(after.userId, '✅ Permesso Approvato', 'La tua richiesta di permesso è stata approvata!');
    }
    else if (after.status === 'rejected') {
        await sendPush(after.userId, '❌ Permesso Rifiutato', 'La tua richiesta di permesso è stata rifiutata.');
    }
});
//# sourceMappingURL=index.js.map
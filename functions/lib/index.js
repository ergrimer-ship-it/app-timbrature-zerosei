"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onShiftSwapRequestUpdated = exports.onShiftSwapRequestCreated = exports.onLeaveRequestUpdated = exports.onLeaveRequestCreated = exports.onNewNotification = exports.handleShiftReminder = exports.scheduleDailyShiftTasks = exports.onAssignedShiftsUpdated = void 0;
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
    if (type === 'start') {
        await sendPush(userId, '⏰ Promemoria Entrata', `Tra 10 minuti inizia il tuo turno (${startTime}). Ricordati di timbrare l'entrata!`);
        res.sendStatus(200);
        return;
    }
    const alreadyClockedIn = (await db.doc(`activeShifts/${userId}`).get()).exists;
    if (type === 'end' && alreadyClockedIn) {
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
// Notifica il collega bersaglio quando un dipendente propone un cambio turno (deve accettare/rifiutare lui).
// Controlla anche qui (con privilegi admin) che nessuno dei due turni sia già coinvolto in un'altra
// richiesta pending/approved: un dipendente normale non può leggere le richieste altrui per farlo lato client.
exports.onShiftSwapRequestCreated = (0, firestore_1.onDocumentCreated)({ document: 'shiftSwapRequests/{requestId}', region: LOCATION }, async (event) => {
    var _a;
    const snap = event.data;
    const data = snap === null || snap === void 0 ? void 0 : snap.data();
    if (!(data === null || data === void 0 ? void 0 : data.targetUserId) || !snap)
        return;
    if (data.requesterShiftId && data.targetShiftId) {
        const requestId = event.params.requestId;
        const [asRequester, asTarget] = await Promise.all([
            db.collection('shiftSwapRequests')
                .where('requesterShiftId', 'in', [data.requesterShiftId, data.targetShiftId]).get(),
            db.collection('shiftSwapRequests')
                .where('targetShiftId', 'in', [data.requesterShiftId, data.targetShiftId]).get(),
        ]);
        const conflict = [...asRequester.docs, ...asTarget.docs].some(d => {
            var _a;
            if (d.id === requestId)
                return false;
            const status = (_a = d.data()) === null || _a === void 0 ? void 0 : _a.status;
            return status === 'pending' || status === 'approved';
        });
        if (conflict) {
            await snap.ref.set({ status: 'rejected', reviewedAt: new Date().toISOString() }, { merge: true });
            return;
        }
    }
    await sendPush(data.targetUserId, '🔄 Proposta di Cambio Turno', `${(_a = data.requesterName) !== null && _a !== void 0 ? _a : 'Un collega'} ti propone di scambiare un turno`);
});
// Quando la richiesta viene accettata o rifiutata (dal collega bersaglio o dall'admin):
// esegue davvero lo scambio sul roster (assignedShifts) e notifica gli interessati.
exports.onShiftSwapRequestUpdated = (0, firestore_1.onDocumentUpdated)({ document: 'shiftSwapRequests/{requestId}', region: LOCATION }, async (event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const before = (_b = (_a = event.data) === null || _a === void 0 ? void 0 : _a.before) === null || _b === void 0 ? void 0 : _b.data();
    const after = (_d = (_c = event.data) === null || _c === void 0 ? void 0 : _c.after) === null || _d === void 0 ? void 0 : _d.data();
    const requestId = event.params.requestId;
    if (!before || !after)
        return;
    if (before.status === after.status)
        return;
    if (!after.requesterId || !after.targetUserId)
        return;
    if (after.status !== 'approved' && after.status !== 'rejected')
        return;
    if (after.status === 'approved') {
        if (after.requesterShiftId && after.targetShiftId) {
            const requesterId = after.requesterId;
            const targetUserId = after.targetUserId;
            const requesterShiftId = after.requesterShiftId;
            const targetShiftId = after.targetShiftId;
            // Transazione: se due richieste gemelle sugli stessi turni vengono accettate quasi in
            // contemporanea, solo una delle due deve davvero applicare lo scambio.
            const applied = await db.runTransaction(async (tx) => {
                var _a, _b;
                const rosterRef = db.doc('assignedShifts/all');
                const rosterSnap = await tx.get(rosterRef);
                const shifts = (_b = (_a = rosterSnap.data()) === null || _a === void 0 ? void 0 : _a.shifts) !== null && _b !== void 0 ? _b : [];
                const requesterIdx = shifts.findIndex(s => s.id === requesterShiftId);
                const targetIdx = shifts.findIndex(s => s.id === targetShiftId);
                if (requesterIdx === -1 || targetIdx === -1)
                    return false;
                // Già scambiato da un'altra richiesta gemella nel frattempo: non rifare lo scambio
                // (altrimenti si tornerebbe indietro invece di applicarlo).
                if (shifts[requesterIdx].userId === targetUserId)
                    return false;
                shifts[requesterIdx] = Object.assign(Object.assign({}, shifts[requesterIdx]), { userId: targetUserId });
                shifts[targetIdx] = Object.assign(Object.assign({}, shifts[targetIdx]), { userId: requesterId });
                tx.set(rosterRef, { shifts });
                return true;
            });
            if (applied) {
                // Auto-rifiuta eventuali altre richieste pending che puntano a uno dei due turni appena scambiati
                const [asRequester, asTarget] = await Promise.all([
                    db.collection('shiftSwapRequests')
                        .where('requesterShiftId', 'in', [after.requesterShiftId, after.targetShiftId])
                        .where('status', '==', 'pending').get(),
                    db.collection('shiftSwapRequests')
                        .where('targetShiftId', 'in', [after.requesterShiftId, after.targetShiftId])
                        .where('status', '==', 'pending').get(),
                ]);
                const stale = new Map();
                [...asRequester.docs, ...asTarget.docs].forEach(d => { if (d.id !== requestId)
                    stale.set(d.id, d); });
                await Promise.all([...stale.values()].map(d => d.ref.set(Object.assign(Object.assign({}, d.data()), { status: 'rejected', reviewedAt: new Date().toISOString() }))));
            }
        }
        await Promise.all([
            sendPush(after.requesterId, '✅ Cambio Turno Accettato', `${(_e = after.targetUserName) !== null && _e !== void 0 ? _e : 'Il collega'} ha accettato lo scambio!`),
            sendPushToAllAdmins('🔄 Cambio Turno Effettuato', `${(_f = after.requesterName) !== null && _f !== void 0 ? _f : 'Un dipendente'} e ${(_g = after.targetUserName) !== null && _g !== void 0 ? _g : 'un collega'} hanno scambiato un turno`),
        ]);
    }
    else {
        await sendPush(after.requesterId, '❌ Cambio Turno Rifiutato', `${(_h = after.targetUserName) !== null && _h !== void 0 ? _h : 'Il collega'} ha rifiutato lo scambio.`);
    }
});
//# sourceMappingURL=index.js.map
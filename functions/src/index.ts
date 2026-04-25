import { onSchedule } from 'firebase-functions/v2/scheduler';
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();
const messaging = admin.messaging();

interface AssignedShift {
    id: string;
    date: string;       // YYYY-MM-DD
    userId: string;
    startTime: string;  // HH:mm
}

// Orario italiano corrente come { hours, minutes }
function italianTime(now: Date): { hours: number; minutes: number } {
    const parts = new Intl.DateTimeFormat('it-IT', {
        timeZone: 'Europe/Rome',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    }).formatToParts(now);
    return {
        hours: parseInt(parts.find(p => p.type === 'hour')!.value),
        minutes: parseInt(parts.find(p => p.type === 'minute')!.value),
    };
}

// Data odierna in formato YYYY-MM-DD secondo fuso orario italiano
function todayItaly(now: Date): string {
    return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Rome' }).format(now);
}

async function sendPush(userId: string, title: string, body: string): Promise<void> {
    const userSnap = await db.doc(`users/${userId}`).get();
    if (!userSnap.exists) return;
    const token: string | undefined = userSnap.data()?.fcmToken;
    if (!token) return;
    try {
        await messaging.send({ token, notification: { title, body } });
    } catch (err: any) {
        // Token scaduto o non valido — lo ignoriamo
        console.warn(`FCM send failed for user ${userId}:`, err.message);
    }
}

// Ogni minuto: notifica 10 min prima del turno assegnato
export const checkShiftReminders = onSchedule(
    { schedule: 'every 1 minutes', timeZone: 'Europe/Rome' },
    async () => {
        const now = new Date();
        const today = todayItaly(now);

        const snap = await db.doc('assignedShifts/all').get();
        if (!snap.exists) return;

        const shifts: AssignedShift[] = snap.data()?.shifts ?? [];
        const todayShifts = shifts.filter(s => s.date === today);

        for (const shift of todayShifts) {
            // Costruiamo l'orario del turno nel timezone italiano
            const todayStr = todayItaly(now);
            const shiftStartUtc = new Date(`${todayStr}T${shift.startTime}:00+02:00`);

            const minutesUntil = (shiftStartUtc.getTime() - now.getTime()) / 60000;

            // Finestra: tra 9.5 e 10.5 minuti (evita invii doppi)
            if (minutesUntil >= 9.5 && minutesUntil < 10.5) {
                await sendPush(
                    shift.userId,
                    'Promemoria Timbratura',
                    `Tra 10 minuti inizia il tuo turno (${shift.startTime}). Ricordati di timbrare!`
                );
            }
        }
    }
);

// Ogni 15 minuti dalle 21:45: notifica se non hai timbrato l'uscita
export const checkLateClockout = onSchedule(
    { schedule: 'every 15 minutes', timeZone: 'Europe/Rome' },
    async () => {
        const now = new Date();
        const { hours, minutes } = italianTime(now);

        // Solo dopo le 21:45
        if (hours < 21 || (hours === 21 && minutes < 45)) return;

        const activeSnap = await db.collection('activeShifts').get();
        for (const doc of activeSnap.docs) {
            await sendPush(
                doc.id,
                'Uscita non timbrata',
                "Non hai ancora timbrato l'uscita. Ricordati di farlo!"
            );
        }
    }
);

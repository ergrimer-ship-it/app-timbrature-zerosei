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

export const checkShiftReminders = onSchedule(
    { schedule: 'every 1 minutes', timeZone: 'Europe/Rome' },
    async () => {
        const now = new Date();
        const today = todayItaly(now);

        const snap = await db.doc('assignedShifts/all').get();
        if (!snap.exists) return;

        const shifts: AssignedShift[] = snap.data()?.shifts ?? [];

        for (const shift of shifts.filter(s => s.date === today)) {
            const [h] = shift.startTime.split(':').map(Number);
            if (h < 16) continue;

            const shiftStartUtc = romeLocalToUtc(shift.date, shift.startTime);
            const minutesUntil = (shiftStartUtc.getTime() - now.getTime()) / 60000;

            if (minutesUntil >= 9.5 && minutesUntil < 10.5) {
                const alreadyClockedIn = (await db.doc(`activeShifts/${shift.userId}`).get()).exists;
                if (alreadyClockedIn) continue;

                await sendPush(
                    shift.userId,
                    'Promemoria Timbratura',
                    `Tra 10 minuti inizia il tuo turno (${shift.startTime}). Ricordati di timbrare!`
                );
            }
        }
    }
);

export const checkLateClockout = onSchedule(
    { schedule: 'every 15 minutes', timeZone: 'Europe/Rome' },
    async () => {
        const now = new Date();
        const { hours, minutes } = italianTime(now);

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

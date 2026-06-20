import type { AssignedShift } from '../types';

let scheduledTimers: ReturnType<typeof setTimeout>[] = [];

const fireNotification = (title: string, body: string) => {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(reg => {
            reg.showNotification(title, { body, icon: '/icon-192.png', badge: '/icon-192.png' });
        });
    } else {
        new Notification(title, { body, icon: '/icon-192.png', badge: '/icon-192.png' });
    }
};

export const clearAllReminders = () => {
    scheduledTimers.forEach(id => clearTimeout(id));
    scheduledTimers = [];
};

export const scheduleShiftReminders = (
    assignedShifts: AssignedShift[],
    getHasActiveShift: () => boolean
) => {
    clearAllReminders();

    const now = new Date();
    const today = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Rome' }).format(now);

    for (const shift of assignedShifts) {
        if (shift.date !== today) continue;

        const [sh, sm] = shift.startTime.split(':').map(Number);

        // ── Promemoria ENTRATA: 10 min prima dell'inizio ──
        const shiftStart = new Date(now);
        shiftStart.setHours(sh, sm, 0, 0);
        const delayStart = shiftStart.getTime() - 10 * 60 * 1000 - now.getTime();

        if (delayStart > 0) {
            const id = setTimeout(() => {
                if (getHasActiveShift()) return; // già timbrato
                fireNotification(
                    '⏰ Promemoria Entrata',
                    `Tra 10 minuti inizia il tuo turno (${shift.startTime}). Ricordati di timbrare l'entrata!`
                );
            }, delayStart);
            scheduledTimers.push(id);
        }

        // ── Promemoria USCITA: 10 min DOPO la fine ──
        if (shift.endTime) {
            const [eh, em] = shift.endTime.split(':').map(Number);
            const shiftEnd = new Date(now);
            shiftEnd.setHours(eh, em, 0, 0);
            const delayEnd = shiftEnd.getTime() + 10 * 60 * 1000 - now.getTime();

            if (delayEnd > 0) {
                const id = setTimeout(() => {
                    if (!getHasActiveShift()) return; // già timbrato l'uscita
                    fireNotification(
                        '⏰ Promemoria Uscita',
                        `Sono le ${shift.endTime} e hai ancora il turno attivo. Ricordati di timbrare l'uscita!`
                    );
                }, delayEnd);
                scheduledTimers.push(id);
            }
        }
    }
};

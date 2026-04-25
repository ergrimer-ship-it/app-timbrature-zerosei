import type { AssignedShift } from '../types';

let scheduledTimers: ReturnType<typeof setTimeout>[] = [];
let lateCheckInterval: ReturnType<typeof setInterval> | null = null;
let lateCheckStartTimer: ReturnType<typeof setTimeout> | null = null;

const fireNotification = (title: string, body: string) => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'SHOW_NOTIFICATION', title, body });
    } else if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, { body, icon: '/icon-192.png', badge: '/icon-192.png' });
    }
};

export const clearAllReminders = () => {
    scheduledTimers.forEach(id => clearTimeout(id));
    scheduledTimers = [];
    if (lateCheckInterval !== null) { clearInterval(lateCheckInterval); lateCheckInterval = null; }
    if (lateCheckStartTimer !== null) { clearTimeout(lateCheckStartTimer); lateCheckStartTimer = null; }
};

export const scheduleShiftReminders = (
    assignedShifts: AssignedShift[],
    getHasActiveShift: () => boolean
) => {
    clearAllReminders();

    const now = new Date();
    const today = now.toISOString().split('T')[0];

    // Notifica 10 min prima di ogni turno assegnato oggi
    for (const shift of assignedShifts) {
        if (shift.date !== today) continue;

        const [h, m] = shift.startTime.split(':').map(Number);
        const shiftStart = new Date(now);
        shiftStart.setHours(h, m, 0, 0);

        const delay = shiftStart.getTime() - 10 * 60 * 1000 - now.getTime();
        if (delay <= 0) continue;

        const id = setTimeout(() => {
            fireNotification(
                'Promemoria Timbratura',
                `Tra 10 minuti inizia il tuo turno (${shift.startTime}). Ricordati di timbrare l'entrata!`
            );
        }, delay);
        scheduledTimers.push(id);
    }

    // Dalle 21:45, ogni 15 min se non timbrata uscita
    const target = new Date(now);
    target.setHours(21, 45, 0, 0);
    const delayTo2145 = target.getTime() - now.getTime();

    const startLateCheck = () => {
        const check = () => {
            if (!getHasActiveShift()) {
                if (lateCheckInterval !== null) { clearInterval(lateCheckInterval); lateCheckInterval = null; }
                return;
            }
            fireNotification(
                'Uscita non timbrata',
                "Non hai ancora timbrato l'uscita. Ricordati di farlo!"
            );
        };
        check();
        lateCheckInterval = setInterval(check, 15 * 60 * 1000);
    };

    if (delayTo2145 > 0) {
        lateCheckStartTimer = setTimeout(startLateCheck, delayTo2145);
    } else {
        startLateCheck();
    }
};

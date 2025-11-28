// services/localNotificationService.ts
import { doc, setDoc, collection, query, where, onSnapshot, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';

export interface NotificationData {
    id: string;
    type: 'clock_in' | 'clock_out' | 'document_upload';
    userId: string;
    userName: string;
    message: string;
    timestamp: string;
    read: boolean;
}

/**
 * Create a notification in Firestore
 */
export const createNotification = async (
    type: 'clock_in' | 'clock_out' | 'document_upload',
    userId: string,
    userName: string,
    message: string
): Promise<void> => {
    try {
        const notification: NotificationData = {
            id: `notif_${Date.now()}`,
            type,
            userId,
            userName,
            message,
            timestamp: new Date().toISOString(),
            read: false
        };

        const notifRef = doc(db, 'notifications', notification.id);
        await setDoc(notifRef, notification);

        console.log('Notification created:', notification);
    } catch (error) {
        console.error('Error creating notification:', error);
    }
};

/**
 * Listen to new notifications for admins
 */
export const listenToAdminNotifications = (
    callback: (notification: NotificationData) => void
): (() => void) => {
    try {
        // Listen to notifications created in the last 5 minutes
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

        const q = query(
            collection(db, 'notifications'),
            where('timestamp', '>=', fiveMinutesAgo.toISOString()),
            orderBy('timestamp', 'desc'),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const notification = change.doc.data() as NotificationData;
                    callback(notification);
                }
            });
        });

        return unsubscribe;
    } catch (error) {
        console.error('Error listening to notifications:', error);
        return () => { };
    }
};

/**
 * Show browser notification
 */
export const showBrowserNotification = (title: string, body: string): void => {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, {
            body,
            icon: '/icon-192.png',
            badge: '/icon-192.png'
        });
    }
};

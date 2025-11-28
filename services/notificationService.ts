// services/notificationService.ts
import { getToken, onMessage } from 'firebase/messaging';
import { messaging, VAPID_KEY } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Request notification permission and get FCM token
 */
export const requestNotificationPermission = async (userId: string): Promise<string | null> => {
    try {
        // Check if notifications are supported
        if (!('Notification' in window)) {
            console.warn('This browser does not support notifications');
            return null;
        }

        // Request permission
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
            console.log('Notification permission granted');

            // Get FCM token
            const token = await getToken(messaging, { vapidKey: VAPID_KEY });

            if (token) {
                console.log('FCM Token:', token);

                // Save token to Firestore
                await saveFCMToken(userId, token);

                return token;
            } else {
                console.warn('No registration token available');
                return null;
            }
        } else {
            console.warn('Notification permission denied');
            return null;
        }
    } catch (error) {
        console.error('Error getting notification permission:', error);
        return null;
    }
};

/**
 * Save FCM token to Firestore
 */
const saveFCMToken = async (userId: string, token: string): Promise<void> => {
    try {
        const userRef = doc(db, 'users', userId);
        await setDoc(userRef, { fcmToken: token }, { merge: true });
        console.log('FCM token saved to Firestore');
    } catch (error) {
        console.error('Error saving FCM token:', error);
    }
};

/**
 * Get FCM token for a user
 */
export const getUserFCMToken = async (userId: string): Promise<string | null> => {
    try {
        const userRef = doc(db, 'users', userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const userData = userSnap.data();
            return userData.fcmToken || null;
        }

        return null;
    } catch (error) {
        console.error('Error getting user FCM token:', error);
        return null;
    }
};

/**
 * Get all admin FCM tokens
 */
export const getAllAdminFCMTokens = async (): Promise<string[]> => {
    try {
        const { getAllUsers } = await import('./dbService');
        const users = await getAllUsers();
        const admins = users.filter(u => u.isAdmin);

        const tokens: string[] = [];
        for (const admin of admins) {
            const token = await getUserFCMToken(admin.id);
            if (token) {
                tokens.push(token);
            }
        }

        return tokens;
    } catch (error) {
        console.error('Error getting admin FCM tokens:', error);
        return [];
    }
};

/**
 * Setup foreground message listener
 */
export const setupForegroundMessageListener = () => {
    onMessage(messaging, (payload) => {
        console.log('Foreground message received:', payload);

        // Show notification
        if (payload.notification) {
            const { title, body } = payload.notification;

            if (Notification.permission === 'granted') {
                new Notification(title || 'Notifica', {
                    body: body || '',
                    icon: '/icon-192.png',
                    badge: '/icon-192.png'
                });
            }
        }
    });
};

/**
 * Send notification to specific users (client-side trigger)
 * Note: This creates a notification request that will be sent via Cloud Functions
 */
export const sendNotificationToUsers = async (
    userIds: string[],
    title: string,
    body: string,
    data?: Record<string, string>
): Promise<void> => {
    try {
        // Get FCM tokens for all users
        const tokens: string[] = [];
        for (const userId of userIds) {
            const token = await getUserFCMToken(userId);
            if (token) {
                tokens.push(token);
            }
        }

        if (tokens.length === 0) {
            console.warn('No FCM tokens found for users');
            return;
        }

        // Create notification request in Firestore
        // This will be picked up by a Cloud Function (if available)
        // For now, we'll use the Web Push API directly
        console.log('Sending notifications to tokens:', tokens);
        console.log('Title:', title);
        console.log('Body:', body);
        console.log('Data:', data);

        // Note: Direct sending from client requires Cloud Functions
        // For now, we'll just log the notification
        // In production, you'd need to implement a Cloud Function to send notifications

    } catch (error) {
        console.error('Error sending notification:', error);
    }
};

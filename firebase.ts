import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyAPQcb4IX_KhjsteedOIbS4Szh1_nGP3t8",
    authDomain: "app-timbrature-zerosei.firebaseapp.com",
    projectId: "app-timbrature-zerosei",
    storageBucket: "app-timbrature-zerosei.firebasestorage.app",
    messagingSenderId: "190325273812",
    appId: "1:190325273812:web:177a253b25d8c64f963741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Firebase Messaging
export const messaging = getMessaging(app);
export const VAPID_KEY = 'BOzcllpaQdmjSEfaF69mLtGi2ylgZDcnaYkdWq4UJ1A8TEzKf__t2kZppdt91zdteQquvFkYJkW78cmhBikm7xs';

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
        console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
        console.warn('The current browser does not support persistence.');
    }
});

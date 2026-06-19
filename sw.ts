/// <reference lib="webworker" />
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';
import { initializeApp } from 'firebase/app';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';

declare const self: ServiceWorkerGlobalScope;

self.skipWaiting();
clientsClaim();
cleanupOutdatedCaches();

// Workbox precache — manifest iniettato da vite-plugin-pwa
precacheAndRoute(self.__WB_MANIFEST);

// Firebase Messaging — messaggi background (app chiusa/in background)
const firebaseApp = initializeApp({
    apiKey: 'AIzaSyAPQcb4IX_KhjsteedOIbS4Szh1_nGP3t8',
    authDomain: 'app-timbrature-zerosei.firebaseapp.com',
    projectId: 'app-timbrature-zerosei',
    storageBucket: 'app-timbrature-zerosei.firebasestorage.app',
    messagingSenderId: '190325273812',
    appId: '1:190325273812:web:177a253b25d8c64f963741',
});

const messaging = getMessaging(firebaseApp);

onBackgroundMessage(messaging, (payload) => {
    const title = payload.notification?.title ?? 'Notifica';
    const body = payload.notification?.body ?? '';
    self.registration.showNotification(title, {
        body,
        icon: '/app-timbrature-zerosei/icons/icon-192.svg',
        badge: '/app-timbrature-zerosei/icons/icon-192.svg',
    });
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        self.clients.openWindow('/app-timbrature-zerosei/')
    );
});

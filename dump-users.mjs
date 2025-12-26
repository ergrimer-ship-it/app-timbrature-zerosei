import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPQcb4IX_KhjsteedOIbS4Szh1_nGP3t8",
    authDomain: "app-timbrature-zerosei.firebaseapp.com",
    projectId: "app-timbrature-zerosei",
    storageBucket: "app-timbrature-zerosei.firebasestorage.app",
    messagingSenderId: "190325273812",
    appId: "1:190325273812:web:177a253b25d8c64f963741"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function checkAdmins() {
    try {
        const email = 'andrea.grimaldi@example.com';
        const password = '230388';
        await signInWithEmailAndPassword(auth, email, password);

        const snap = await getDocs(collection(db, "users"));
        console.log('--- ADMINS ---');
        snap.forEach(doc => {
            const d = doc.data();
            if (d.isAdmin) {
                console.log(`ADMIN: ${d.email} (${d.name} ${d.surname})`);
            }
            if (d.email && d.email.includes('grimaldi')) {
                console.log(`FOUND_GRIMALDI: ${d.email} [Admin: ${d.isAdmin}]`);
            }
        });
        console.log('--- END ---');

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

checkAdmins();

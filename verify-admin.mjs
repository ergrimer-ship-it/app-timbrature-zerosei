import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';

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

async function verifyList() {
    try {
        const email = 'andrea.grimaldi@example.com';
        const password = '230388';
        const cred = await signInWithEmailAndPassword(auth, email, password);
        const uid = cred.user.uid;

        console.log(`LOGGED_IN_AS: ${uid}`);

        // Check Admin Flag
        const userDoc = await getDoc(doc(db, "users", uid));
        const isAdminIdx = userDoc.data().isAdmin;
        console.log(`IS_ADMIN_FLAG: ${isAdminIdx}`);

        // List Users
        console.log('START_LIST_USERS');
        const snap = await getDocs(collection(db, "users"));
        console.log(`LIST_RESULT_COUNT: ${snap.size}`);

        // MIGRATION LOGIC
        console.log('STARTING_MIGRATION');
        const updates = snap.docs.map(async (userDoc) => {
            const userData = userDoc.data();
            const publicUser = {
                id: userData.id,
                name: userData.name,
                surname: userData.surname
            };
            // Using setDoc directly
            // Wait, I need to import setDoc at the top level or use dynamic import properly
            await setDoc(doc(db, 'publicUsers', userData.id), publicUser);
            console.log(`MIGRATED: ${userData.name}`);
        });

        // Dynamic import workaround for setDoc since I can't easily change top imports with replace_file_content reliably sometimes
        // Actually I will just use replace to add setDoc to top import
        await Promise.all(updates);
        console.log('MIGRATION_DONE');

        process.exit(0);
    } catch (error) {
        console.error('FATAL_ERROR:', error.message);
        process.exit(1);
    }
}

verifyList();

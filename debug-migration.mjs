import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';

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

async function debug() {
    console.log('Starting debug...');

    try {
        const email = 'andrea.grimaldi@example.com';
        const password = '230388';
        console.log(`Logging in as ${email}...`);

        const cred = await signInWithEmailAndPassword(auth, email, password);
        const uid = cred.user.uid;
        console.log(`Logged in as ${uid}`);

        // 1. Verify Admin Status
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
            console.log(`Is Admin: ${userDoc.data().isAdmin}`);
        } else {
            console.error('User doc not found!');
        }

        // 2. Try List Users
        console.log('Listing users...');
        const usersSnap = await getDocs(collection(db, "users"));
        console.log(`Found ${usersSnap.size} users.`);

        // 3. Try Write Public User
        console.log('Attempting write to publicUsers...');
        const testData = { id: uid, name: 'Debug', surname: 'User' };
        await setDoc(doc(db, 'publicUsers', uid), testData);
        console.log('Write successful!');

        process.exit(0);
    } catch (error) {
        console.error('DEBUG FAILED:', error);
        process.exit(1);
    }
}

debug();

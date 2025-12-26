import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

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

async function checkSingleUser() {
    try {
        console.log('Attempting to login as admin...');
        const email = 'andrea.grimaldi@example.com';
        const password = '230388';

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const uid = userCredential.user.uid;
        console.log('✅ Login successful! User:', uid);

        console.log(`Reading user profile for ${uid}...`);
        const userDoc = await getDoc(doc(db, "users", uid));

        if (userDoc.exists()) {
            console.log('✅ User profile read successfully:', userDoc.data());
        } else {
            console.log('❌ User profile not found!');
        }
        process.exit(0);
    } catch (error) {
        console.error('❌ Error reading profile:', error.code, error.message);
        process.exit(1);
    }
}

checkSingleUser();

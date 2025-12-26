// scripts/migrate-public-users.mjs
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore';

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

async function migrate() {
    console.log('Starting migration to publicUsers...');

    try {
        // Login as admin first
        const email = 'andrea.grimaldi@example.com';
        const password = '230388';
        console.log(`Logging in as ${email}...`);
        const result = await signInWithEmailAndPassword(auth, email, password);
        const uid = result.user.uid;
        console.log(`Login successful. User ID: ${uid}`);

        // Double check if this user is actually an admin in the database
        const adminDoc = await import('firebase/firestore').then(mod => mod.getDoc(mod.doc(db, 'users', uid)));
        if (adminDoc.exists()) {
            console.log('Admin Status:', adminDoc.data().isAdmin);
        } else {
            console.log('WARNING: User document not found for logged in user!');
        }

        const usersSnap = await getDocs(collection(db, 'users'));
        console.log(`Found ${usersSnap.size} users to migrate.`);

        const updates = usersSnap.docs.map(async (userDoc) => {
            const userData = userDoc.data();
            const publicUser = {
                id: userData.id,
                name: userData.name,
                surname: userData.surname
            };

            await setDoc(doc(db, 'publicUsers', userData.id), publicUser);
            console.log(`Migrated: ${userData.name} ${userData.surname}`);
        });

        await Promise.all(updates);
        console.log('Migration completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}

migrate();

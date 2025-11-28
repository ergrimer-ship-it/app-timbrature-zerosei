// Script to create admin user
// Run with: node create-admin.js

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

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

async function createAdmin() {
    try {
        const name = 'Andrea';
        const surname = 'Grimaldi';
        const password = '230388';
        const email = `${name}.${surname}@example.com`.toLowerCase();

        console.log('Creating admin user with email:', email);

        const cred = await createUserWithEmailAndPassword(auth, email, password);
        const firebaseUser = cred.user;

        const userProfile = {
            id: firebaseUser.uid,
            name,
            surname,
            email,
            password,
            isAdmin: true,
        };

        await setDoc(doc(db, 'users', firebaseUser.uid), userProfile);

        console.log('✅ Admin user created successfully!');
        console.log('Login with:');
        console.log('  Nome: Andrea');
        console.log('  Cognome: Grimaldi');
        console.log('  Password: 230388');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error creating admin:', error.message);
        process.exit(1);
    }
}

createAdmin();

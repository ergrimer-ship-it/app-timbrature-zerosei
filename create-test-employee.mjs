// Script to create test employee user
// Run with: node create-test-employee.mjs

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

async function createTestEmployee() {
    try {
        const name = 'Test';
        const surname = 'Employee';
        const password = 'test123';
        const email = `${name}.${surname}@example.com`.toLowerCase();

        console.log('Creating test employee user with email:', email);

        const cred = await createUserWithEmailAndPassword(auth, email, password);
        const firebaseUser = cred.user;

        const userProfile = {
            id: firebaseUser.uid,
            name,
            surname,
            email,
            password,
            isAdmin: false, // Not an admin - this is a regular employee
        };

        await setDoc(doc(db, 'users', firebaseUser.uid), userProfile);

        console.log('✅ Test employee created successfully!');
        console.log('Login with:');
        console.log('  Nome: Test');
        console.log('  Cognome: Employee');
        console.log('  Password: test123');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error creating test employee:', error.message);
        process.exit(1);
    }
}

createTestEmployee();

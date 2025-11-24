
import { auth, db } from './firebase';
import { updatePassword as firebaseUpdatePassword, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import type { User } from './types';

/** Register a new user. Uses a fake email based on name and surname. */
export const register = async (
    name: string,
    surname: string,
    password: string,
    isAdmin = false
): Promise<User> => {
    const email = `${name}.${surname}@example.com`.toLowerCase();
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = cred.user;

    const userProfile: User = {
        id: firebaseUser.uid,
        name,
        surname,
        email,
        password, // NOTE: plain text for demo only
        isAdmin,
    };

    // Save user profile with email
    await setDoc(doc(db, 'users', firebaseUser.uid), userProfile);
    return userProfile;
};

/** Update password for the currently authenticated user */
export const updatePassword = async (email: string, newPassword: string): Promise<void> => {
    // Ensure the user is logged in and matches the email
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error('No authenticated user');
    if (currentUser.email !== email) {
        // Reauthenticate with credential if needed (simplified for demo)
        // In real app, you would ask for old password and reauthenticate.
    }
    // Firebase provides updatePassword directly on the user object
    await firebaseUpdatePassword(currentUser, newPassword);
};


/** Login with name/surname/password (email is derived). */
export const login = async (
    name: string,
    surname: string,
    password: string
): Promise<User> => {
    const email = `${name}.${surname}@example.com`.toLowerCase();
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const snap = await getDoc(doc(db, 'users', cred.user.uid));
    if (!snap.exists()) throw new Error('User profile not found');
    return snap.data() as User;
};

export const logout = async () => {
    await signOut(auth);
};

/** Subscribe to auth state changes and provide the full user profile. */
export const subscribeAuth = (cb: (user: User | null) => void) => {
    return onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
            const snap = await getDoc(doc(db, 'users', firebaseUser.uid));
            cb(snap.exists() ? (snap.data() as User) : null);
        } else {
            cb(null);
        }
    });
};

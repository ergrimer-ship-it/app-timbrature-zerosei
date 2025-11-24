// src/services/dbService.ts
import { db } from '../firebase';
import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    deleteDoc,
    onSnapshot,
    query,
    where,
} from 'firebase/firestore';
import type { User, Shift } from '../types';

/** Get all users */
export const getAllUsers = async (): Promise<User[]> => {
    const snap = await getDocs(collection(db, 'users'));
    return snap.docs.map(d => d.data() as User);
};

/** Get shifts for a specific user */
export const getShifts = async (userId: string): Promise<Shift[]> => {
    const snap = await getDocs(collection(db, 'users', userId, 'shifts'));
    return snap.docs.map(d => d.data() as Shift);
};

/** Add a shift for a user */
export const addShift = async (userId: string, shift: Shift) => {
    // Use shift.id as the document ID to ensure consistency
    const shiftRef = doc(db, 'users', userId, 'shifts', shift.id);
    await setDoc(shiftRef, shift);
};

/** Delete a shift for a user */
export const deleteShift = async (userId: string, shiftId: string) => {
    // 1. Try to delete by document ID (for new shifts)
    const directRef = doc(db, 'users', userId, 'shifts', shiftId);
    await deleteDoc(directRef);

    // 2. Also search by field 'id' to catch legacy shifts (where doc ID != shift.id)
    const shiftsRef = collection(db, 'users', userId, 'shifts');
    const q = query(shiftsRef, where('id', '==', shiftId));
    const snapshot = await getDocs(q);

    // Delete any matching documents found
    const deletePromises = snapshot.docs.map(d => deleteDoc(d.ref));
    await Promise.all(deletePromises);
};

/** Set the active shift for a user (single document per user) */
export const setActiveShift = async (userId: string, shift: Shift) => {
    const ref = doc(db, 'activeShifts', userId);
    await setDoc(ref, shift);
};

/** Clear the active shift for a user */
export const clearActiveShift = async (userId: string) => {
    const ref = doc(db, 'activeShifts', userId);
    await deleteDoc(ref);
};

/** Listen to real‑time active shifts (used by LiveWorkersPanel) */
export const onActiveShifts = (
    cb: (workers: { user: User; shift: Shift }[]) => void
) => {
    const col = collection(db, 'activeShifts');
    return onSnapshot(col, async snapshot => {
        const workers: { user: User; shift: Shift }[] = [];
        for (const docSnap of snapshot.docs) {
            const shift = docSnap.data() as Shift;
            const userSnap = await getDoc(doc(db, 'users', docSnap.id));
            if (userSnap.exists()) {
                workers.push({ user: userSnap.data() as User, shift });
            }
        }
        cb(workers);
    });
};

/** DANGER: Delete ALL shifts for ALL users */
export const deleteAllShiftsForAllUsers = async () => {
    const users = await getAllUsers();
    for (const user of users) {
        const shifts = await getShifts(user.id);
        // Delete each shift one by one (using our robust deleteShift)
        for (const shift of shifts) {
            await deleteShift(user.id, shift.id);
        }
    }
};

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

/** Delete a user and all their data */
export const deleteUser = async (userId: string): Promise<void> => {
    // Delete user's shifts
    const shiftsSnap = await getDocs(collection(db, 'users', userId, 'shifts'));
    const deleteShiftsPromises = shiftsSnap.docs.map(d => deleteDoc(d.ref));
    await Promise.all(deleteShiftsPromises);

    // Delete user's documents
    const docsSnap = await getDocs(collection(db, 'users', userId, 'documents'));
    const deleteDocsPromises = docsSnap.docs.map(d => deleteDoc(d.ref));
    await Promise.all(deleteDocsPromises);

    // Delete active shift if exists
    try {
        await deleteDoc(doc(db, 'activeShifts', userId));
    } catch (e) {
        // Active shift might not exist, that's ok
    }

    // Delete user document
    await deleteDoc(doc(db, 'users', userId));
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

/** Get the active shift for a user */
export const getActiveShift = async (userId: string): Promise<Shift | null> => {
    console.log('getActiveShift called for userId:', userId);
    const ref = doc(db, 'activeShifts', userId);
    const snap = await getDoc(ref);
    console.log('getActiveShift - snap.exists():', snap.exists());
    if (snap.exists()) {
        console.log('getActiveShift - data:', snap.data());
    }
    return snap.exists() ? (snap.data() as Shift) : null;
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

// Assigned Shifts Service (for shift planning)

import type { AssignedShift } from '../types';

/** Save all assigned shifts to Firebase */
export const saveAssignedShifts = async (shifts: AssignedShift[]): Promise<void> => {
    const shiftsRef = doc(db, 'assignedShifts', 'all');
    await setDoc(shiftsRef, { shifts });
};

/** Load all assigned shifts from Firebase */
export const getAssignedShifts = async (): Promise<AssignedShift[]> => {
    const shiftsRef = doc(db, 'assignedShifts', 'all');
    const snap = await getDoc(shiftsRef);
    if (snap.exists()) {
        const data = snap.data();
        return data.shifts || [];
    }
    return [];
};

// Documents Service (Link-based, no Storage)

import type { Document } from '../types';

export const addUserDocumentLink = async (userId: string, fileName: string, fileUrl: string, adminId: string): Promise<Document> => {
    const newDoc: Document = {
        id: `doc_${Date.now()}`,
        userId,
        fileName,
        fileUrl,
        uploadDate: new Date().toISOString(),
        uploadedBy: adminId
    };

    // Save to Firestore
    await setDoc(doc(db, 'users', userId, 'documents', newDoc.id), newDoc);
    return newDoc;
};

export const getUserDocuments = async (userId: string): Promise<Document[]> => {
    const q = query(collection(db, 'users', userId, 'documents'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data() as Document).sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
};

export const deleteUserDocument = async (userId: string, docId: string): Promise<void> => {
    // Delete from Firestore only (no Storage)
    await deleteDoc(doc(db, 'users', userId, 'documents', docId));
};

// Salary Advances Service

import type { SalaryAdvance, FutureLeave } from '../types';

export const addSalaryAdvance = async (userId: string, advance: SalaryAdvance): Promise<void> => {
    const advanceRef = doc(db, 'users', userId, 'salaryAdvances', advance.id);
    await setDoc(advanceRef, advance);
};

export const getSalaryAdvances = async (userId: string): Promise<SalaryAdvance[]> => {
    const q = query(collection(db, 'users', userId, 'salaryAdvances'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data() as SalaryAdvance).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const deleteSalaryAdvance = async (userId: string, advanceId: string): Promise<void> => {
    await deleteDoc(doc(db, 'users', userId, 'salaryAdvances', advanceId));
};

// Future Leaves Service

export const addFutureLeave = async (userId: string, leave: FutureLeave): Promise<void> => {
    const leaveRef = doc(db, 'users', userId, 'futureLeaves', leave.id);
    await setDoc(leaveRef, leave);
};

export const getFutureLeaves = async (userId: string): Promise<FutureLeave[]> => {
    const q = query(collection(db, 'users', userId, 'futureLeaves'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data() as FutureLeave).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
};

export const deleteFutureLeave = async (userId: string, leaveId: string): Promise<void> => {
    await deleteDoc(doc(db, 'users', userId, 'futureLeaves', leaveId));
};

// Backup Export Service

export interface BackupData {
    exportDate: string;
    users: User[];
    shifts: { userId: string; shifts: Shift[] }[];
    salaryAdvances: { userId: string; advances: SalaryAdvance[] }[];
    futureLeaves: { userId: string; leaves: FutureLeave[] }[];
    assignedShifts: AssignedShift[];
    documents: { userId: string; documents: Document[] }[];
}

export const exportAllData = async (): Promise<BackupData> => {
    const users = await getAllUsers();

    const shiftsData: { userId: string; shifts: Shift[] }[] = [];
    const advancesData: { userId: string; advances: SalaryAdvance[] }[] = [];
    const leavesData: { userId: string; leaves: FutureLeave[] }[] = [];
    const documentsData: { userId: string; documents: Document[] }[] = [];

    // Collect data for each user
    for (const user of users) {
        const userShifts = await getShifts(user.id);
        const userAdvances = await getSalaryAdvances(user.id);
        const userLeaves = await getFutureLeaves(user.id);
        const userDocuments = await getUserDocuments(user.id);

        shiftsData.push({ userId: user.id, shifts: userShifts });
        advancesData.push({ userId: user.id, advances: userAdvances });
        leavesData.push({ userId: user.id, leaves: userLeaves });
        documentsData.push({ userId: user.id, documents: userDocuments });
    }

    const assignedShifts = await getAssignedShifts();

    return {
        exportDate: new Date().toISOString(),
        users,
        shifts: shiftsData,
        salaryAdvances: advancesData,
        futureLeaves: leavesData,
        assignedShifts,
        documents: documentsData
    };
};

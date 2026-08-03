// src/services/dbService.ts
import { db } from '../firebase';
import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    deleteDoc,
    deleteField,
    onSnapshot,
    query,
    where,
} from 'firebase/firestore';
import type { User, Shift, PublicUser, AssignedShift, Document, SalaryAdvance, FutureLeave, LeaveRequest, ShiftSwapRequest } from '../types';

/** Get password for a user (admin only) — reads from adminPasswords collection */
export const getUserPassword = async (userId: string): Promise<string | null> => {
    const snap = await getDoc(doc(db, 'adminPasswords', userId));
    if (snap.exists()) return snap.data().password ?? null;
    // Fallback: legacy users may have password in users doc
    const userSnap = await getDoc(doc(db, 'users', userId));
    if (userSnap.exists()) return userSnap.data().password ?? null;
    return null;
};

/** Update role for a user (admin only) — tiene allineato anche il profilo pubblico */
export const updateUserRole = async (userId: string, role: string | null): Promise<void> => {
    const userRef = doc(db, 'users', userId);
    const publicUserRef = doc(db, 'publicUsers', userId);
    if (role) {
        await Promise.all([
            setDoc(userRef, { role }, { merge: true }),
            setDoc(publicUserRef, { role }, { merge: true }),
        ]);
    } else {
        await Promise.all([
            setDoc(userRef, { role: deleteField() }, { merge: true }),
            setDoc(publicUserRef, { role: deleteField() }, { merge: true }),
        ]);
    }
};

/** Get all users */
export const getAllUsers = async (): Promise<User[]> => {
    const snap = await getDocs(collection(db, 'users'));
    return snap.docs.map(d => d.data() as User);
};

/** Get all public users (safe for non-admins) */
export const getPublicUsers = async (): Promise<PublicUser[]> => {
    const snap = await getDocs(collection(db, 'publicUsers'));
    return snap.docs.map(d => d.data() as PublicUser);
};

/** Sync a user's public profile */
export const syncPublicUser = async (user: User): Promise<void> => {
    const publicUser: PublicUser = {
        id: user.id,
        name: user.name,
        surname: user.surname,
        ...(user.role ? { role: user.role } : {}),
    };
    await setDoc(doc(db, 'publicUsers', user.id), publicUser);
};

/** Self-heal: allinea il ruolo in publicUsers a quello in users, per chi è già disallineato (admin only) */
export const syncPublicUserRoles = async (): Promise<void> => {
    const [allUsers, allPublic] = await Promise.all([getAllUsers(), getPublicUsers()]);
    const publicById = new Map(allPublic.map(p => [p.id, p]));
    const mismatched = allUsers.filter(u => publicById.get(u.id)?.role !== u.role);
    await Promise.all(
        mismatched.map(u =>
            setDoc(doc(db, 'publicUsers', u.id), { role: u.role ?? deleteField() }, { merge: true })
        )
    );
};

/** Delete a user and all their data */
export const deleteUser = async (userId: string): Promise<void> => {
    // Delete public profile
    await deleteDoc(doc(db, 'publicUsers', userId));

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

/** Listen to real-time changes of active shift for a specific user */
export const onActiveShiftChange = (
    userId: string,
    cb: (shift: Shift | null) => void
) => {
    const ref = doc(db, 'activeShifts', userId);
    return onSnapshot(ref, (snapshot) => {
        if (snapshot.exists()) {
            console.log('onActiveShiftChange - shift exists:', snapshot.data());
            cb(snapshot.data() as Shift);
        } else {
            console.log('onActiveShiftChange - no active shift');
            cb(null);
        }
    });
};

/** Listen to real‑time active shifts (used by LiveWorkersPanel) */
export const onActiveShifts = (
    cb: (workers: { user: User; shift: Shift }[]) => void
) => {
    let latestCall = 0;
    const col = collection(db, 'activeShifts');
    return onSnapshot(col, async snapshot => {
        const callId = ++latestCall;

        const results = await Promise.all(
            snapshot.docs.map(async docSnap => {
                const shift = docSnap.data() as Shift;
                const userSnap = await getDoc(doc(db, 'users', docSnap.id));
                if (!userSnap.exists()) return null;
                return { user: userSnap.data() as User, shift };
            })
        );

        // Scarta se nel frattempo è arrivato uno snapshot più recente
        if (callId !== latestCall) return;

        cb(results.filter((w): w is { user: User; shift: Shift } => w !== null));
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

// Leave Requests Service

export const addLeaveRequest = async (request: LeaveRequest): Promise<void> => {
    await setDoc(doc(db, 'leaveRequests', request.id), request);
};

export const getAllLeaveRequests = async (): Promise<LeaveRequest[]> => {
    const snap = await getDocs(collection(db, 'leaveRequests'));
    return snap.docs
        .map(d => d.data() as LeaveRequest)
        .sort((a, b) => new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime());
};

export const getUserLeaveRequests = async (userId: string): Promise<LeaveRequest[]> => {
    const q = query(collection(db, 'leaveRequests'), where('userId', '==', userId));
    const snap = await getDocs(q);
    return snap.docs
        .map(d => d.data() as LeaveRequest)
        .sort((a, b) => new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime());
};

export const approveLeaveRequest = async (request: LeaveRequest): Promise<void> => {
    // Aggiorna stato richiesta
    await setDoc(doc(db, 'leaveRequests', request.id), {
        ...request,
        status: 'approved',
        reviewedAt: new Date().toISOString(),
    });
    // Crea permesso confermato
    const leave: FutureLeave = {
        id: `leave_${request.id}`,
        userId: request.userId,
        startDate: request.startDate,
        ...(request.endDate ? { endDate: request.endDate } : {}),
        createdAt: new Date().toISOString(),
    };
    await addFutureLeave(request.userId, leave);
};

export const rejectLeaveRequest = async (request: LeaveRequest): Promise<void> => {
    await setDoc(doc(db, 'leaveRequests', request.id), {
        ...request,
        status: 'rejected',
        reviewedAt: new Date().toISOString(),
    });
};

// Shift Swap Requests Service

export const addShiftSwapRequest = async (request: ShiftSwapRequest): Promise<void> => {
    // Il controllo anti-duplicato (stesso turno già coinvolto in un'altra richiesta) va fatto
    // lato server (Cloud Function onShiftSwapRequestCreated): un dipendente normale non ha (né
    // deve avere) il permesso di leggere le richieste di scambio altrui per farlo qui.
    await setDoc(doc(db, 'shiftSwapRequests', request.id), request);
};

export const getAllShiftSwapRequests = async (): Promise<ShiftSwapRequest[]> => {
    const snap = await getDocs(collection(db, 'shiftSwapRequests'));
    return snap.docs
        .map(d => d.data() as ShiftSwapRequest)
        .sort((a, b) => new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime());
};

export const getUserShiftSwapRequests = async (userId: string): Promise<ShiftSwapRequest[]> => {
    const [asRequester, asTarget] = await Promise.all([
        getDocs(query(collection(db, 'shiftSwapRequests'), where('requesterId', '==', userId))),
        getDocs(query(collection(db, 'shiftSwapRequests'), where('targetUserId', '==', userId))),
    ]);
    const map = new Map<string, ShiftSwapRequest>();
    [...asRequester.docs, ...asTarget.docs].forEach(d => map.set(d.id, d.data() as ShiftSwapRequest));
    return [...map.values()].sort((a, b) => new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime());
};

// Accetta la richiesta (chiamabile dall'admin o dal collega bersaglio, vedi firestore.rules).
// Lo scambio vero e proprio sul roster (assignedShifts) avviene lato server nella Cloud Function
// onShiftSwapRequestUpdated, non qui: un dipendente normale non ha (né deve avere) il permesso
// di riscrivere direttamente il roster altrui.
export const approveShiftSwap = async (request: ShiftSwapRequest): Promise<void> => {
    await setDoc(doc(db, 'shiftSwapRequests', request.id), {
        ...request,
        status: 'approved',
        reviewedAt: new Date().toISOString(),
    });
};

export const rejectShiftSwap = async (request: ShiftSwapRequest): Promise<void> => {
    await setDoc(doc(db, 'shiftSwapRequests', request.id), {
        ...request,
        status: 'rejected',
        reviewedAt: new Date().toISOString(),
    });
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

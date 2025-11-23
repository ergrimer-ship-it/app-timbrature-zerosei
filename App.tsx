import React, { useState, useEffect, useCallback } from 'react';
import type { User, Shift, AssignedShift } from './types';
import { LoginScreen } from './components/LoginScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { RegistrationScreen } from './components/RegistrationScreen';
import { AdminDashboardScreen } from './components/AdminDashboardScreen';
import { UserDetailScreen } from './components/UserDetailScreen';

// Mock user database with admin flag
const MOCK_USERS_WITH_PASSWORDS: User[] = [
    { id: '1', name: 'Andrea', surname: 'Grimaldi', password: '2marzo2021', isAdmin: true },
    { id: '2', name: 'Laura', surname: 'Bianchi', password: 'password123' },
];

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
    const [shifts, setShifts] = useState<Shift[]>([]);
    const [activeShift, setActiveShift] = useState<Shift | null>(null);
    const [assignedShifts, setAssignedShifts] = useState<AssignedShift[]>([]);

    const [viewMode, setViewMode] = useState<'dashboard' | 'admin' | 'userDetail'>('dashboard');
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const [loginError, setLoginError] = useState<string | null>(null);
    const [rememberedCredentials, setRememberedCredentials] = useState<{ name: string, surname: string, password?: string } | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load state from localStorage on initial mount with robust parsing
    useEffect(() => {
        const safeParse = <T,>(key: string, defaultValue: T): T => {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) as T : defaultValue;
            } catch (error) {
                console.error(`Failed to parse ${key} from localStorage`, error);
                return defaultValue;
            }
        };

        // Load user database robustly
        const initialUsers = safeParse<User[]>('users', []);
        const usersToSet = initialUsers.length === 0 ? MOCK_USERS_WITH_PASSWORDS : initialUsers;
        setUsers(usersToSet);

        // Load other data robustly
        setAssignedShifts(safeParse<AssignedShift[]>('assignedShifts', []));
        setRememberedCredentials(safeParse<{ name: string, surname: string, password?: string } | null>('rememberedCredentials', null));

        const storedUser = safeParse<User | null>('user', null);
        if (storedUser) {
            const userExists = usersToSet.find(u => u.id === storedUser.id);
            if (userExists) {
                const currentUserData = { ...userExists, ...storedUser };
                setUser(currentUserData);
                if (currentUserData.isAdmin) {
                    setViewMode('admin');
                } else {
                    setShifts(safeParse<Shift[]>(`shifts_${currentUserData.id}`, []));
                    setActiveShift(safeParse<Shift | null>(`activeShift_${currentUserData.id}`, null));
                }
            } else {
                localStorage.removeItem('user');
            }
        }
        setIsInitialized(true);
    }, []);

    // Effect to save global data (users, assignedShifts)
    useEffect(() => {
        if (!isInitialized) return;
        try {
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('assignedShifts', JSON.stringify(assignedShifts));
        } catch (e) { console.error("Failed to save global data", e); }
    }, [users, assignedShifts, isInitialized]);

    // Effect to save user-specific session and shift data
    useEffect(() => {
        if (!isInitialized) return;
        try {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                if (!user.isAdmin) {
                    localStorage.setItem(`shifts_${user.id}`, JSON.stringify(shifts));
                    if (activeShift) {
                        localStorage.setItem(`activeShift_${user.id}`, JSON.stringify(activeShift));
                    } else {
                        localStorage.removeItem(`activeShift_${user.id}`);
                    }
                }
            } else {
                localStorage.removeItem('user');
            }
        } catch (error) {
            console.error("Failed to save session state", error);
        }
    }, [user, shifts, activeShift, isInitialized]);


    const handleLogin = useCallback((name: string, surname: string, password: string, rememberMe: boolean) => {
        const foundUser = users.find(u =>
            u.name.toLowerCase() === name.toLowerCase() &&
            u.surname.toLowerCase() === surname.toLowerCase() &&
            u.password === password
        );

        if (foundUser) {
            setUser(foundUser);
            setLoginError(null);

            if (foundUser.isAdmin) {
                setViewMode('admin');
            } else {
                setViewMode('dashboard');
                const storedShifts = localStorage.getItem(`shifts_${foundUser.id}`);
                const storedActiveShift = localStorage.getItem(`activeShift_${foundUser.id}`);
                setShifts(storedShifts ? JSON.parse(storedShifts) : []);
                setActiveShift(storedActiveShift ? JSON.parse(storedActiveShift) : null);
            }

            if (rememberMe) {
                const credentials = { name: foundUser.name, surname: foundUser.surname, password: foundUser.password };
                localStorage.setItem('rememberedCredentials', JSON.stringify(credentials));
                setRememberedCredentials(credentials);
            } else {
                localStorage.removeItem('rememberedCredentials');
                setRememberedCredentials(null);
            }
        } else {
            setLoginError("Nome, cognome o password non corretti.");
        }
    }, [users]);

    const handleRegister = useCallback((name: string, surname: string, password: string) => {
        const fullName = `${name} ${surname}`;
        const nameExists = users.some(u => (`${u.name} ${u.surname}`).toLowerCase() === fullName.toLowerCase());
        if (nameExists) {
            setLoginError("Questo utente è già registrato.");
            return;
        }

        const newUser: User = {
            id: `user_${Date.now()}`,
            name,
            surname,
            password,
        };

        setUsers(prev => [...prev, newUser]);
        setLoginError(null);
        setAuthMode('login');
    }, [users]);


    const handleLogout = useCallback(() => {
        setUser(null);
        setShifts([]);
        setActiveShift(null);
        setSelectedUser(null);
        setLoginError(null);
        setViewMode('dashboard');
        localStorage.removeItem('user');
    }, []);

    const handleClock = useCallback((tags: Shift['tags']) => {
        const now = new Date();
        if (activeShift) {
            // Clocking OUT
            const completedShift: Shift = { ...activeShift, endTime: now.toISOString() };
            setShifts(prev => [...prev, completedShift]);
            setActiveShift(null);
        } else {
            // Clocking IN
            const newShift: Shift = {
                id: `shift_${now.getTime()}`,
                startTime: now.toISOString(),
                endTime: null,
                tags: tags,
            };
            setActiveShift(newShift);
        }
    }, [activeShift]);

    // Admin functions
    const handleSelectUser = (userToView: User) => {
        const storedShifts = localStorage.getItem(`shifts_${userToView.id}`);
        setShifts(storedShifts ? JSON.parse(storedShifts) : []);
        setSelectedUser(userToView);
        setViewMode('userDetail');
    };

    const handleBackToAdmin = () => {
        setSelectedUser(null);
        setShifts([]);
        setViewMode('admin');
    };

    const handleSaveShifts = (newShifts: AssignedShift[]) => {
        setAssignedShifts(newShifts);
    };

    const handleDeleteUser = useCallback((userIdToDelete: string) => {
        // Remove user from the main list
        setUsers((prevUsers: User[]) => prevUsers.filter((u: User) => u.id !== userIdToDelete));

        // Remove their assigned shifts
        setAssignedShifts((prevAssigned: AssignedShift[]) => prevAssigned.filter((s: AssignedShift) => s.userId !== userIdToDelete));

        // Clear their individual data from localStorage to prevent orphaned data
        localStorage.removeItem(`shifts_${userIdToDelete}`);
        localStorage.removeItem(`activeShift_${userIdToDelete}`);
    }, []);

    const handleUpdateShift = useCallback((userId: string, updatedShift: Shift) => {
        const storageKey = `shifts_${userId}`;
        const storedShiftsRaw = localStorage.getItem(storageKey);
        const userShifts: Shift[] = storedShiftsRaw ? JSON.parse(storedShiftsRaw) : [];

        const updatedShifts = userShifts.map((s: Shift) => s.id === updatedShift.id ? updatedShift : s);

        localStorage.setItem(storageKey, JSON.stringify(updatedShifts));

        // If we are viewing this user, update the state to reflect changes
        if (selectedUser?.id === userId) {
            setShifts(updatedShifts);
        }
    }, [selectedUser]);

    const handleDeleteShift = useCallback((userId: string, shiftId: string) => {
        const storageKey = `shifts_${userId}`;
        const storedShiftsRaw = localStorage.getItem(storageKey);
        const userShifts: Shift[] = storedShiftsRaw ? JSON.parse(storedShiftsRaw) : [];

        const updatedShifts = userShifts.filter((s: Shift) => s.id !== shiftId);

        localStorage.setItem(storageKey, JSON.stringify(updatedShifts));

        if (selectedUser?.id === userId) {
            setShifts(updatedShifts);
        }
    }, [selectedUser]);


    if (!isInitialized) {
        return <div className="min-h-screen flex items-center justify-center"><p className="text-lg font-medium animate-pulse">Caricamento...</p></div>;
    }

    if (!user) {
        if (authMode === 'login') {
            return <LoginScreen
                onLogin={handleLogin}
                onSwitchToRegister={() => { setAuthMode('register'); setLoginError(null); }}
                error={loginError}
                rememberedCredentials={rememberedCredentials}
            />;
        }
        return <RegistrationScreen
            onRegister={handleRegister}
            onSwitchToLogin={() => { setAuthMode('login'); setLoginError(null); }}
            error={loginError}
        />;
    }

    if (user.isAdmin) {
        if (viewMode === 'userDetail' && selectedUser) {
            return <UserDetailScreen
                selectedUser={selectedUser}
                userShifts={shifts}
                onBack={handleBackToAdmin}
                onUpdateShift={(updatedShift) => handleUpdateShift(selectedUser.id, updatedShift)}
                onDeleteShift={(shiftId) => handleDeleteShift(selectedUser.id, shiftId)}
            />;
        }
        return <AdminDashboardScreen
            adminUser={user}
            allUsers={users}
            onSelectUser={handleSelectUser}
            onLogout={handleLogout}
            assignedShifts={assignedShifts}
            onSaveShifts={handleSaveShifts}
            onDeleteUser={handleDeleteUser}
        />;
    }

    const userAssignedShifts = assignedShifts.filter(s => s.userId === user.id);

    return (
        <DashboardScreen
            user={user}
            shifts={shifts}
            activeShift={activeShift}
            assignedShifts={userAssignedShifts}
            onLogout={handleLogout}
            onClock={handleClock}
        />
    );
};

export default App;

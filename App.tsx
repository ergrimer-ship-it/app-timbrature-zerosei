import React, { useState, useEffect, useCallback } from 'react';
import type { User, Shift, AssignedShift } from './types';
import { LoginScreen } from './components/LoginScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { RegistrationScreen } from './components/RegistrationScreen';
import { AdminDashboardScreen } from './components/AdminDashboardScreen';
import { UserDetailScreen } from './components/UserDetailScreen';
import { LiveWorkersPanel } from './components/LiveWorkersPanel';
import { ProfileScreen } from './components/ProfileScreen';
import { GlobalShiftsScreen } from './components/GlobalShiftsScreen';
import { ShiftPlannerScreen } from './components/ShiftPlannerScreen';
import { Layout } from './components/Layout';

// Firebase services
import { login, register, subscribeAuth, logout } from './authService';
import { getAllUsers, getShifts, addShift, deleteShift, setActiveShift as setActiveShiftDb, clearActiveShift as clearActiveShiftDb } from './services/dbService';

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
    const [shifts, setShifts] = useState<Shift[]>([]);
    const [activeShift, setActiveShift] = useState<Shift | null>(null);
    const [assignedShifts, setAssignedShifts] = useState<AssignedShift[]>([]);

    const [viewMode, setViewMode] = useState<string>('dashboard');
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const [loginError, setLoginError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [rememberedCredentials, setRememberedCredentials] = useState<{ name: string, surname: string, password?: string } | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    // Function to load all users from Firestore
    const loadUsers = useCallback(async () => {
        const all = await getAllUsers();
        setUsers(all);
    }, []);

    // Load users from Firestore on mount and listen to auth state changes
    useEffect(() => {
        const unsubAuth = subscribeAuth((u) => {
            setUser(u);
            if (u) {
                if (u.isAdmin) {
                    setViewMode('live');
                } else {
                    // Ensure users start at dashboard (Timbratrice) or keep current if navigating?
                    // For initial load, dashboard is fine.
                    // If we want to persist the last view, we'd need more logic, but for now let's fix the Admin issue.
                    // We only force 'live' for admin if they are currently on 'dashboard' (default) to avoid overriding navigation if we were to add persistence later.
                    // But since this runs on mount/auth change, setting it here is safer for the "initial load" case.
                    // However, if I navigate, does this fire? No, subscribeAuth fires on Firebase auth state change.
                    // So this is correct for page load / login.
                    setViewMode(prev => prev === 'dashboard' ? 'dashboard' : prev);
                }
            }
        });
        loadUsers();
        return () => {
            unsubAuth();
        };
    }, [loadUsers]);

    // Load remembered credentials for login convenience
    useEffect(() => {
        try {
            const stored = localStorage.getItem('rememberedCredentials');
            if (stored) {
                setRememberedCredentials(JSON.parse(stored));
            }
        } catch (error) {
            console.error('Failed to load remembered credentials', error);
        }
        setIsInitialized(true);
    }, []);

    const handleLogin = useCallback(async (name: string, surname: string, password: string, rememberMe: boolean) => {
        try {
            const user = await login(name, surname, password);
            setUser(user);
            setLoginError(null);

            if (user.isAdmin) {
                setViewMode('live');
            } else {
                setViewMode('dashboard');
                // Load shifts from Firestore
                const userShifts = await getShifts(user.id);
                setShifts(userShifts);
                // Active shift will be listened to by LiveWorkersPanel; set to null initially
                setActiveShift(null);
            }

            if (rememberMe) {
                const credentials = { name: user.name, surname: user.surname, password: user.password };
                localStorage.setItem('rememberedCredentials', JSON.stringify(credentials));
                setRememberedCredentials(credentials);
            } else {
                localStorage.removeItem('rememberedCredentials');
                setRememberedCredentials(null);
            }
        } catch (e) {
            setLoginError("Nome, cognome o password non corretti.");
        }
    }, []);

    const handleRegister = useCallback(async (name: string, surname: string, password: string) => {
        try {
            await register(name, surname, password, false);
            await logout(); // Logout immediately to show success message
            await loadUsers(); // Refresh user list
            setSuccessMessage("Registrazione completata! Effettua il login.");
            setLoginError(null);
            setAuthMode('login');
        } catch (e: any) {
            setLoginError(e.message || "Errore durante la registrazione.");
        }
    }, [loadUsers]);

    const handleLogout = useCallback(() => {
        setUser(null);
        setShifts([]);
        setActiveShift(null);
        setSelectedUser(null);
        setLoginError(null);
        setViewMode('dashboard');
    }, []);

    const handleClock = useCallback(async (tags: Shift['tags']) => {
        if (!user) return;

        const now = new Date();
        if (activeShift) {
            // Clocking OUT
            const completedShift: Shift = { ...activeShift, endTime: now.toISOString() };
            await addShift(user.id, completedShift);
            await clearActiveShiftDb(user.id);
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
            await setActiveShiftDb(user.id, newShift);
            setActiveShift(newShift);
        }
    }, [activeShift, user]);

    // Admin functions
    const handleSelectUser = async (userToView: User) => {
        const userShifts = await getShifts(userToView.id);
        setShifts(userShifts);
        setSelectedUser(userToView);
        setViewMode('userDetail');
    };

    const handleBackToAdmin = () => {
        setSelectedUser(null);
        setShifts([]);
        setViewMode('users');
    };

    const handleDeleteUser = useCallback((userIdToDelete: string) => {
        // Remove user from the main list
        setUsers((prevUsers: User[]) => prevUsers.filter((u: User) => u.id !== userIdToDelete));

        // Remove their assigned shifts
        setAssignedShifts((prevAssigned: AssignedShift[]) => prevAssigned.filter((s: AssignedShift) => s.userId !== userIdToDelete));

        // Note: User data in Firestore should be deleted via admin panel in future
    }, []);

    const handleUpdateShift = useCallback(async (userId: string, updatedShift: Shift) => {
        // Update shift in Firestore
        await addShift(userId, updatedShift);

        // If we are viewing this user, update the state to reflect changes
        if (selectedUser?.id === userId) {
            const userShifts = await getShifts(userId);
            setShifts(userShifts);
        }
    }, [selectedUser]);

    const handleDeleteShift = useCallback(async (userId: string, shiftId: string) => {
        try {
            await deleteShift(userId, shiftId);

            // Update local state if we are viewing this user
            if (selectedUser?.id === userId) {
                const userShifts = await getShifts(userId);
                setShifts(userShifts);
            }
        } catch (error) {
            console.error("Failed to delete shift:", error);
            alert("Errore durante l'eliminazione del turno.");
        }
    }, [selectedUser]);


    if (!isInitialized) {
        return <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white"><p className="text-lg font-medium animate-pulse">Caricamento...</p></div>;
    }

    const renderContent = () => {
        if (!user) {
            return authMode === 'login' ? (
                <LoginScreen
                    onLogin={handleLogin}
                    onSwitchToRegister={() => { setAuthMode('register'); setLoginError(null); setSuccessMessage(null); }}
                    error={loginError}
                    successMessage={successMessage}
                    rememberedCredentials={rememberedCredentials}
                />
            ) : (
                <RegistrationScreen
                    onRegister={handleRegister}
                    onSwitchToLogin={() => { setAuthMode('login'); setLoginError(null); setSuccessMessage(null); }}
                    error={loginError}
                />
            );
        }

        switch (viewMode) {
            case 'dashboard':
                const userAssignedShifts = assignedShifts.filter(s => s.userId === user.id);
                return <DashboardScreen
                    user={user}
                    shifts={shifts}
                    activeShift={activeShift}
                    assignedShifts={userAssignedShifts}
                    onLogout={handleLogout}
                    onClock={handleClock}
                />;
            case 'live':
                return <LiveWorkersPanel />;
            case 'users':
                return (
                    <AdminDashboardScreen
                        allUsers={users}
                        onSelectUser={handleSelectUser}
                        onDeleteUser={handleDeleteUser}
                    />
                );
            case 'planner':
                return (
                    <ShiftPlannerScreen
                        allUsers={users}
                        assignedShifts={assignedShifts}
                        onSaveShifts={setAssignedShifts}
                    />
                );
            case 'userDetail':
                return (
                    <UserDetailScreen
                        selectedUser={selectedUser!}
                        userShifts={shifts}
                        onBack={handleBackToAdmin}
                        onUpdateShift={(updatedShift) => handleUpdateShift(selectedUser!.id, updatedShift)}
                        onDeleteShift={(id) => handleDeleteShift(selectedUser!.id, id)}
                    />
                );
            case 'globalShifts':
                return <GlobalShiftsScreen assignedShifts={assignedShifts} />;
            case 'profile':
                return <ProfileScreen user={user} />;
            default:
                // Default fallback based on role
                return user.isAdmin ? <LiveWorkersPanel /> : <DashboardScreen
                    user={user}
                    shifts={shifts}
                    activeShift={activeShift}
                    assignedShifts={assignedShifts.filter(s => s.userId === user.id)}
                    onLogout={handleLogout}
                    onClock={handleClock}
                />;
        }
    };

    return (
        <Layout
            user={user}
            currentSection={viewMode}
            onNavigate={setViewMode}
            onLogout={handleLogout}
        >
            {renderContent()}
        </Layout>
    );
};

export default App;

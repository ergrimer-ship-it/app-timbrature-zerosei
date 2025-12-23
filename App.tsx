import React, { useState, useEffect, useCallback } from 'react';
import type { User, Shift, AssignedShift, ShiftType } from './types';
import { LoginScreen } from './components/LoginScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { RegistrationScreen } from './components/RegistrationScreen';
import { AdminDashboardScreen } from './components/AdminDashboardScreen';
import { UserDetailScreen } from './components/UserDetailScreen';
import { LiveWorkersPanel } from './components/LiveWorkersPanel';
import { ProfileScreen } from './components/ProfileScreen';
import { GlobalShiftsScreen } from './components/GlobalShiftsScreen';
import { ShiftPlannerScreen } from './components/ShiftPlannerScreen';
import { DocumentsScreen } from './components/DocumentsScreen';
import { EmployeeNotesScreen } from './components/EmployeeNotesScreen';
import { Layout } from './components/Layout';
import { LeaveSummaryScreen } from './components/LeaveSummaryScreen';

// Firebase services
import { login, register, subscribeAuth, logout } from './authService';
import { getAllUsers, deleteUser, getShifts, addShift, deleteShift, setActiveShift as setActiveShiftDb, getActiveShift as getActiveShiftDb, clearActiveShift as clearActiveShiftDb, saveAssignedShifts, getAssignedShifts, onActiveShiftChange } from './services/dbService';
import { requestNotificationPermission, setupForegroundMessageListener } from './services/notificationService';
import { createNotification, listenToAdminNotifications, showBrowserNotification } from './services/localNotificationService';

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
                    setViewMode(prev => prev === 'dashboard' ? 'dashboard' : prev);
                }
            }
        });
        return () => {
            unsubAuth();
        };
    }, []);

    // Load users when user becomes authenticated as admin
    useEffect(() => {
        if (user?.isAdmin) {
            loadUsers();
        }
    }, [user, loadUsers]);

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

    // Load assigned shifts from Firebase on mount
    useEffect(() => {
        const loadAssignedShifts = async () => {
            try {
                const shifts = await getAssignedShifts();
                setAssignedShifts(shifts);
            } catch (error) {
                console.error('Failed to load assigned shifts:', error);
            }
        };
        loadAssignedShifts();
    }, []);

    // Real-time listener for activeShift (for non-admin users)
    useEffect(() => {
        if (!user || user.isAdmin) {
            // Only set up listener for non-admin users
            setActiveShift(null);
            return;
        }

        console.log('Setting up activeShift for user:', user.id);

        // First, load the current activeShift immediately (critical for app reopen)
        const loadInitialActiveShift = async () => {
            try {
                console.log('Loading initial activeShift from DB...');
                const initialShift = await getActiveShiftDb(user.id);
                console.log('Initial activeShift loaded:', initialShift);
                setActiveShift(initialShift);
            } catch (error) {
                console.error('Error loading initial activeShift:', error);
                setActiveShift(null);
            }
        };

        // Load immediately on mount/user change
        loadInitialActiveShift();

        // Then set up real-time listener for subsequent changes
        console.log('Setting up real-time activeShift listener for user:', user.id);
        const unsubscribe = onActiveShiftChange(user.id, (shift) => {
            console.log('ActiveShift changed (real-time):', shift);
            setActiveShift(shift);
        });

        // Cleanup on unmount or user change
        return () => {
            console.log('Cleaning up activeShift listener');
            unsubscribe();
        };
    }, [user]);

    const handleLogin = useCallback(async (name: string, surname: string, password: string, rememberMe: boolean) => {
        try {
            const user = await login(name, surname, password);
            setUser(user);
            setLoginError(null);

            if (user.isAdmin) {
                setViewMode('live');

                // Request notification permission for admin
                await requestNotificationPermission(user.id);
                setupForegroundMessageListener();

                // Setup notification listener for admins
                listenToAdminNotifications((notification) => {
                    console.log('New notification:', notification);
                    showBrowserNotification(
                        'Timbratura Dipendente',
                        notification.message
                    );
                });
            } else {
                setViewMode('dashboard');
                // Load shifts from Firestore
                const userShifts = await getShifts(user.id);
                setShifts(userShifts);
                // Note: activeShift will be loaded via real-time listener in useEffect

                // Request notification permission
                await requestNotificationPermission(user.id);
                setupForegroundMessageListener();

                // Setup notification listener for document uploads
                listenToAdminNotifications((notification) => {
                    // Only show notifications for this user
                    if (notification.userId === user.id && notification.type === 'document_upload') {
                        console.log('New document notification:', notification);
                        showBrowserNotification(
                            'Nuovo Documento',
                            notification.message
                        );
                    }
                });
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

    const handleClock = useCallback(async (shiftType: ShiftType) => {
        if (!user) return;

        console.log('handleClock called with shiftType:', shiftType);
        console.log('Current activeShift:', activeShift);

        const now = new Date();
        if (activeShift) {
            // Clocking OUT
            const completedShift: Shift = { ...activeShift, endTime: now.toISOString() };
            console.log('Clocking OUT - completedShift:', completedShift);
            await addShift(user.id, completedShift);
            await clearActiveShiftDb(user.id);
            setShifts(prev => [...prev, completedShift]);
            setActiveShift(null);

            // Create notification for admins
            await createNotification(
                'clock_out',
                user.id,
                `${user.name} ${user.surname}`,
                `${user.name} ${user.surname} ha timbrato l'uscita alle ${new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}`
            );
        } else {
            // Clocking IN
            const newShift: Shift = {
                id: `shift_${now.getTime()}`,
                startTime: now.toISOString(),
                endTime: null,
                type: shiftType,
            };
            console.log('Clocking IN - newShift:', newShift);
            await setActiveShiftDb(user.id, newShift);
            setActiveShift(newShift);

            // Create notification for admins
            await createNotification(
                'clock_in',
                user.id,
                `${user.name} ${user.surname}`,
                `${user.name} ${user.surname} ha timbrato l'entrata alle ${new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}`
            );
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

    const handleDeleteUser = useCallback(async (userIdToDelete: string) => {
        try {
            // Delete user from Firebase
            await deleteUser(userIdToDelete);

            // Remove user from the main list
            setUsers((prevUsers: User[]) => prevUsers.filter((u: User) => u.id !== userIdToDelete));

            // Remove their assigned shifts
            setAssignedShifts((prevAssigned: AssignedShift[]) => prevAssigned.filter((s: AssignedShift) => s.userId !== userIdToDelete));

            // Reload users from Firebase to ensure consistency
            await loadUsers();
        } catch (error) {
            console.error('Failed to delete user:', error);
            alert('Errore durante l\'eliminazione dell\'utente.');
        }
    }, [loadUsers]);

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
                const handleSaveShifts = async (shifts: AssignedShift[]) => {
                    try {
                        await saveAssignedShifts(shifts);
                        setAssignedShifts(shifts);
                    } catch (error) {
                        console.error('Failed to save assigned shifts:', error);
                        alert('Errore durante il salvataggio dei turni.');
                    }
                };
                return (
                    <ShiftPlannerScreen
                        allUsers={users}
                        assignedShifts={assignedShifts}
                        onSaveShifts={handleSaveShifts}
                    />
                );
            case 'leaveSummary':
                return <LeaveSummaryScreen />;
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
            case 'documents':
                return <DocumentsScreen user={user} allUsers={users} />;
            case 'profile':
                return <ProfileScreen user={user} />;
            case 'employeeNotes':
                return (
                    <EmployeeNotesScreen
                        selectedUser={user}
                        isAdmin={false}
                    />
                );
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

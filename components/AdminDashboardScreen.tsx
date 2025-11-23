import React, { useState } from 'react';
import type { User, AssignedShift } from '../types';
import { LogoutIcon, UsersIcon, ClipboardListIcon, TrashIcon, ClockIcon } from './icons';
import { ShiftPlanner } from './ShiftPlanner';
import { ConfirmDeleteModal } from './ConfirmDeleteModal';
import { LiveWorkersPanel } from './LiveWorkersPanel';

interface AdminDashboardScreenProps {
    adminUser: User;
    allUsers: User[];
    onSelectUser: (user: User) => void;
    onLogout: () => void;
    assignedShifts: AssignedShift[];
    onSaveShifts: (shifts: AssignedShift[]) => void;
    onDeleteUser: (userId: string) => void;
}

const SidebarItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }> = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active
            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/20'
            : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
            }`}
    >
        {icon}
        <span className="font-medium">{label}</span>
    </button>
);

export const AdminDashboardScreen: React.FC<AdminDashboardScreenProps> = ({ adminUser, allUsers, onSelectUser, onLogout, assignedShifts, onSaveShifts, onDeleteUser }) => {

    const [activeTab, setActiveTab] = useState<'live' | 'users' | 'planner'>('live');
    const [userToDelete, setUserToDelete] = useState<User | null>(null);
    const regularUsers = allUsers.filter(u => !u.isAdmin);

    const handleDeleteClick = (user: User, event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent the main div's onClick from firing
        setUserToDelete(user);
    };

    const confirmDeletion = () => {
        if (userToDelete) {
            onDeleteUser(userToDelete.id);
            setUserToDelete(null);
        }
    };

    return (
        <div className="min-h-screen flex bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-black text-slate-200 font-sans">
            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col w-72 glass-panel border-r border-slate-800/50 p-6 m-4 rounded-3xl h-[calc(100vh-2rem)] sticky top-4">
                <div className="flex items-center gap-3 px-2 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <span className="text-white font-bold text-xl">Z</span>
                    </div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">ZeroSei</h1>
                </div>

                <nav className="flex-1 space-y-2">
                    <SidebarItem
                        icon={<ClockIcon className="w-5 h-5" />}
                        label="Live"
                        active={activeTab === 'live'}
                        onClick={() => setActiveTab('live')}
                    />
                    <SidebarItem
                        icon={<UsersIcon className="w-5 h-5" />}
                        label="Gestione Utenti"
                        active={activeTab === 'users'}
                        onClick={() => setActiveTab('users')}
                    />
                    <SidebarItem
                        icon={<ClipboardListIcon className="w-5 h-5" />}
                        label="Pianificazione Turni"
                        active={activeTab === 'planner'}
                        onClick={() => setActiveTab('planner')}
                    />
                </nav>

                <div className="pt-6 border-t border-slate-800/50">
                    <div className="flex items-center gap-3 px-2 mb-4">
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                            {adminUser.name.charAt(0)}{adminUser.surname.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">{adminUser.name} {adminUser.surname}</p>
                            <p className="text-xs text-slate-500 truncate">Amministratore</p>
                        </div>
                    </div>
                    <button
                        onClick={onLogout}
                        className="w-full flex items-center gap-2 text-red-400 hover:bg-red-500/10 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                        <LogoutIcon className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 lg:p-8 overflow-y-auto h-screen">
                {/* Mobile Header */}
                <header className="lg:hidden flex justify-between items-center mb-8 glass-panel p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                            <span className="text-white font-bold">Z</span>
                        </div>
                        <span className="font-bold text-lg">ZeroSei Admin</span>
                    </div>
                    <button onClick={onLogout} className="p-2 text-slate-400 hover:text-white">
                        <LogoutIcon className="w-6 h-6" />
                    </button>
                </header>

                <div className="max-w-7xl mx-auto">
                    <header className="mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Pannello di Controllo</h1>
                        <p className="text-slate-400">Gestisci i dipendenti e pianifica i turni.</p>
                    </header>

                    {/* Mobile Tabs */}
                    <div className="lg:hidden flex mb-6 bg-slate-800/50 p-1 rounded-xl">
                        <button
                            onClick={() => setActiveTab('live')}
                            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'live' ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-400'}`}
                        >
                            Live
                        </button>
                        <button
                            onClick={() => setActiveTab('users')}
                            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'users' ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-400'}`}
                        >
                            Utenti
                        </button>
                        <button
                            onClick={() => setActiveTab('planner')}
                            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'planner' ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-400'}`}
                        >
                            Turni
                        </button>
                    </div>

                    {activeTab === 'live' && (
                        <div className="glass-panel p-6 rounded-3xl shadow-lg">
                            <LiveWorkersPanel allUsers={regularUsers} />
                        </div>
                    )}

                    {activeTab === 'users' && (
                        <div className="glass-panel p-6 rounded-3xl shadow-lg">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white"><UsersIcon className="text-indigo-400" /> Utenti Registrati</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                {regularUsers.length > 0 ? (
                                    regularUsers.map(user => (
                                        <div
                                            key={user.id}
                                            onClick={() => onSelectUser(user)}
                                            className="flex items-center justify-between bg-slate-800/40 border border-slate-700/50 p-4 rounded-2xl cursor-pointer hover:bg-slate-800/80 hover:border-indigo-500/30 transition-all group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-indigo-300 font-bold text-lg border border-slate-600">
                                                    {user.name.charAt(0)}{user.surname.charAt(0)}
                                                </div>
                                                <div>
                                                    <span className="font-bold text-slate-200 block">{user.name} {user.surname}</span>
                                                    <span className="text-xs text-indigo-400 group-hover:text-indigo-300 transition-colors">Visualizza Calendario</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={(e) => handleDeleteClick(user, e)}
                                                className="p-2 text-slate-500 hover:text-red-400 rounded-full hover:bg-red-500/10 transition-colors"
                                                aria-label={`Elimina ${user.name} ${user.surname}`}
                                            >
                                                <TrashIcon className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full py-12 text-center">
                                        <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <UsersIcon className="w-8 h-8 text-slate-600" />
                                        </div>
                                        <p className="text-slate-500">Nessun utente registrato.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'planner' && (
                        <div className="glass-panel p-6 rounded-3xl shadow-lg">
                            <ShiftPlanner
                                allUsers={regularUsers}
                                assignedShifts={assignedShifts}
                                onSaveShifts={onSaveShifts}
                            />
                        </div>
                    )}
                </div>
            </main>
            {userToDelete && (
                <ConfirmDeleteModal
                    isOpen={!!userToDelete}
                    onClose={() => setUserToDelete(null)}
                    onConfirm={confirmDeletion}
                    userName={`${userToDelete.name} ${userToDelete.surname}`}
                />
            )}
        </div>
    );
};
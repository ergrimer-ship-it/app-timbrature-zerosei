import React, { useState } from 'react';
import type { User } from '../types';
import { UsersIcon, TrashIcon } from './icons';
import { ConfirmDeleteModal } from './ConfirmDeleteModal';

interface AdminDashboardScreenProps {
    allUsers: User[];
    onSelectUser: (user: User) => void;
    onDeleteUser: (userId: string) => void;
}

export const AdminDashboardScreen: React.FC<AdminDashboardScreenProps> = ({ allUsers, onSelectUser, onDeleteUser }) => {
    const [userToDelete, setUserToDelete] = useState<User | null>(null);
    const regularUsers = allUsers.filter(u => !u.isAdmin);

    const handleDeleteClick = (user: User, event: React.MouseEvent) => {
        event.stopPropagation();
        setUserToDelete(user);
    };

    const confirmDeletion = () => {
        if (userToDelete) {
            onDeleteUser(userToDelete.id);
            setUserToDelete(null);
        }
    };

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-white mb-2">Gestione Utenti</h1>
                <p className="text-slate-400">Visualizza e gestisci i dipendenti registrati.</p>
            </header>

            <div className="glass-panel p-6 rounded-3xl shadow-lg">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                    <UsersIcon className="text-indigo-400" /> Utenti Registrati
                </h2>
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
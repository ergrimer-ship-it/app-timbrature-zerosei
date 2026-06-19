import React, { useState } from 'react';
import type { User } from '../types';
import { UsersIcon, TrashIcon, EyeIcon, EyeOffIcon, DownloadIcon } from './icons';
import { ConfirmDeleteModal } from './ConfirmDeleteModal';
import { exportAllData } from '../services/dbService';

interface AdminDashboardScreenProps {
    allUsers: User[];
    onSelectUser: (user: User) => void;
    onDeleteUser: (userId: string) => void;
}

const AVATAR_GRADIENTS = [
    'from-blue-500 to-indigo-600',
    'from-emerald-500 to-teal-600',
    'from-violet-500 to-purple-600',
    'from-orange-500 to-amber-500',
    'from-rose-500 to-pink-600',
    'from-cyan-500 to-sky-600',
];

function avatarGradient(index: number) {
    return AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
}

export const AdminDashboardScreen: React.FC<AdminDashboardScreenProps> = ({ allUsers, onSelectUser, onDeleteUser }) => {
    const [userToDelete, setUserToDelete] = useState<User | null>(null);
    const [visiblePasswordUserId, setVisiblePasswordUserId] = useState<string | null>(null);
    const [isExporting, setIsExporting] = useState(false);

    const handleDeleteClick = (user: User, event: React.MouseEvent) => {
        event.stopPropagation();
        setUserToDelete(user);
    };

    const confirmDeletion = () => {
        if (userToDelete) { onDeleteUser(userToDelete.id); setUserToDelete(null); }
    };

    const handleExportBackup = async () => {
        setIsExporting(true);
        try {
            const backupData = await exportAllData();
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
            const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `backup_${timestamp}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch {
            alert('Errore durante l\'esportazione del backup');
        } finally {
            setIsExporting(false);
        }
    };

    const sortedUsers = [...allUsers].sort((a, b) =>
        `${a.surname} ${a.name}`.localeCompare(`${b.surname} ${b.name}`, 'it')
    );

    return (
        <div className="space-y-5">
            {/* Blue header */}
            <div className="screen-header rounded-b-3xl">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Gestione Utenti</h1>
                        <p className="text-blue-200 text-sm mt-1">{allUsers.length} dipendenti registrati</p>
                    </div>
                    <button
                        onClick={handleExportBackup}
                        disabled={isExporting}
                        className="flex items-center gap-2 px-3 py-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold rounded-xl transition-colors disabled:opacity-50"
                    >
                        <DownloadIcon className="w-4 h-4" />
                        {isExporting ? 'Esporto...' : 'Backup'}
                    </button>
                </div>
            </div>

            {/* User list */}
            <div className="glass-panel rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
                    <UsersIcon className="w-5 h-5 text-blue-600" />
                    <h2 className="font-bold text-slate-800">Utenti Registrati</h2>
                </div>

                {sortedUsers.length > 0 ? (
                    <div className="divide-y divide-slate-100">
                        {sortedUsers.map((user, index) => (
                            <div
                                key={user.id}
                                onClick={() => onSelectUser(user)}
                                className="flex items-center gap-4 px-5 py-3.5 cursor-pointer hover:bg-blue-50/50 transition-colors"
                            >
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${avatarGradient(index)} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                                    {user.name.charAt(0)}{user.surname.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-slate-800 text-sm">{user.name} {user.surname}</span>
                                        {user.isAdmin && (
                                            <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold">ADMIN</span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-xs text-slate-400 font-mono">
                                            {visiblePasswordUserId === user.id
                                                ? <span className="text-emerald-600">{user.password}</span>
                                                : '••••••••'}
                                        </span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setVisiblePasswordUserId(visiblePasswordUserId === user.id ? null : user.id); }}
                                            className="text-slate-400 hover:text-slate-600 transition-colors"
                                        >
                                            {visiblePasswordUserId === user.id ? <EyeOffIcon className="w-3 h-3" /> : <EyeIcon className="w-3 h-3" />}
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={(e) => handleDeleteClick(user, e)}
                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                                >
                                    <TrashIcon className="w-4 h-4" />
                                </button>
                                <span className="text-slate-300 text-lg">›</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-16 text-center">
                        <UsersIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                        <p className="text-slate-400">Nessun utente registrato.</p>
                    </div>
                )}
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

import React, { useState } from 'react';
import type { User, Shift, AssignedShift, UserRole } from '../types';
import { USER_ROLES } from '../types';
import { Calendar } from './Calendar';
import { EmployeeNotesScreen } from './EmployeeNotesScreen';
import { UserShiftsView } from './UserShiftsView';
import { ChevronLeftIcon, CalendarIcon, FileTextIcon, ClipboardListIcon } from './icons';
import { getUserPassword, updateUserRole } from '../services/dbService';

interface UserDetailScreenProps {
    selectedUser: User;
    userShifts: Shift[];
    assignedShifts: AssignedShift[];
    onBack: () => void;
    onUpdateShift: (updatedShift: Shift) => void;
    onDeleteShift: (shiftId: string) => void;
    onRoleChange?: (userId: string, role: UserRole | null) => void;
}

export const UserDetailScreen: React.FC<UserDetailScreenProps> = ({ selectedUser, userShifts, assignedShifts, onBack, onUpdateShift, onDeleteShift, onRoleChange }) => {
    const [activeTab, setActiveTab] = useState<'calendar' | 'shifts' | 'notes'>('calendar');
    const [password, setPassword] = useState<string | null>(null);
    const [loadingPassword, setLoadingPassword] = useState(false);
    const [currentRole, setCurrentRole] = useState<UserRole | undefined>(selectedUser.role);
    const [savingRole, setSavingRole] = useState(false);

    const handleShowPassword = async () => {
        if (password !== null) { setPassword(null); return; }
        setLoadingPassword(true);
        const pw = await getUserPassword(selectedUser.id);
        setPassword(pw ?? '(non trovata)');
        setLoadingPassword(false);
    };

    const handleRoleChange = async (role: UserRole | '') => {
        setSavingRole(true);
        try {
            const newRole = (role as UserRole) || null;
            await updateUserRole(selectedUser.id, newRole);
            setCurrentRole(newRole ?? undefined);
            onRoleChange?.(selectedUser.id, newRole);
        } finally {
            setSavingRole(false);
        }
    };

    const tabs = [
        { id: 'calendar' as const, label: 'Calendario', icon: <CalendarIcon className="w-4 h-4" /> },
        { id: 'shifts'   as const, label: 'Turni Programmati', icon: <ClipboardListIcon className="w-4 h-4" /> },
        { id: 'notes'    as const, label: 'Note e Richieste',  icon: <FileTextIcon className="w-4 h-4" /> },
    ];

    return (
        <div className="space-y-5">
            {/* Blue header */}
            <div className="screen-header rounded-b-3xl">
                <button onClick={onBack} className="flex items-center gap-1 text-blue-200 hover:text-white text-sm font-medium mb-4 transition-colors">
                    <ChevronLeftIcon className="w-4 h-4" />
                    Torna alla lista
                </button>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center font-bold text-xl">
                        {selectedUser.name.charAt(0)}{selectedUser.surname.charAt(0)}
                    </div>
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">{selectedUser.name} {selectedUser.surname}</h1>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                            {/* Selettore ruolo */}
                            <select
                                value={currentRole ?? ''}
                                onChange={e => handleRoleChange(e.target.value as UserRole | '')}
                                disabled={savingRole}
                                className="bg-white/15 text-white text-xs font-semibold border border-white/30 rounded-xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-60"
                            >
                                <option value="">— Nessun ruolo —</option>
                                {USER_ROLES.map(r => (
                                    <option key={r} value={r}>{r}</option>
                                ))}
                            </select>
                            {savingRole && <span className="text-blue-200 text-xs">Salvo...</span>}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <button
                                onClick={handleShowPassword}
                                className="text-blue-200 hover:text-white text-xs font-medium transition-colors"
                            >
                                {loadingPassword ? 'Caricamento...' : password !== null ? 'Nascondi password' : 'Mostra password'}
                            </button>
                            {password !== null && (
                                <span className="font-mono text-yellow-300 text-xs bg-white/10 px-2 py-0.5 rounded-lg">{password}</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mt-5 flex-wrap">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                                activeTab === tab.id
                                    ? 'bg-white text-blue-700 shadow'
                                    : 'bg-white/15 text-blue-100 hover:bg-white/25'
                            }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <main>
                {activeTab === 'calendar' ? (
                    <div className="glass-panel rounded-2xl p-5">
                        <Calendar shifts={userShifts} isAdminView={true} onUpdateShift={onUpdateShift} onDeleteShift={onDeleteShift} />
                    </div>
                ) : activeTab === 'shifts' ? (
                    <div className="glass-panel rounded-2xl p-5">
                        <UserShiftsView assignedShifts={assignedShifts} />
                    </div>
                ) : (
                    <EmployeeNotesScreen selectedUser={selectedUser} isAdmin={true} />
                )}
            </main>
        </div>
    );
};

import React, { useState } from 'react';
import type { User, Shift, AssignedShift } from '../types';
import { Calendar } from './Calendar';
import { EmployeeNotesScreen } from './EmployeeNotesScreen';
import { UserShiftsView } from './UserShiftsView';
import { ChevronLeftIcon, CalendarIcon, FileTextIcon, ClipboardListIcon } from './icons';
import { getUserPassword } from '../services/dbService';

interface UserDetailScreenProps {
    selectedUser: User;
    userShifts: Shift[];
    assignedShifts: AssignedShift[];
    onBack: () => void;
    onUpdateShift: (updatedShift: Shift) => void;
    onDeleteShift: (shiftId: string) => void;
}

export const UserDetailScreen: React.FC<UserDetailScreenProps> = ({ selectedUser, userShifts, assignedShifts, onBack, onUpdateShift, onDeleteShift }) => {
    const [activeTab, setActiveTab] = useState<'calendar' | 'shifts' | 'notes'>('calendar');
    const [password, setPassword] = useState<string | null>(null);
    const [loadingPassword, setLoadingPassword] = useState(false);

    const handleShowPassword = async () => {
        if (password !== null) { setPassword(null); return; }
        setLoadingPassword(true);
        const pw = await getUserPassword(selectedUser.id);
        setPassword(pw ?? '(non trovata)');
        setLoadingPassword(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
            <header className="mb-8">
                <button onClick={onBack} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold mb-4">
                    <ChevronLeftIcon className="w-5 h-5" />
                    Torna alla lista utenti
                </button>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Dettaglio per {selectedUser.name} {selectedUser.surname}</h1>
                <p className="text-gray-400">Visualizzazione del calendario timbrature e note.</p>

                <div className="mt-3 flex items-center gap-3">
                    <button
                        onClick={handleShowPassword}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
                    >
                        {loadingPassword ? 'Caricamento...' : password !== null ? 'Nascondi password' : 'Mostra password'}
                    </button>
                    {password !== null && (
                        <span className="font-mono text-yellow-300 bg-slate-800 px-3 py-1.5 rounded-lg text-sm select-all">
                            {password}
                        </span>
                    )}
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-2 mt-6 flex-wrap">
                    <button
                        onClick={() => setActiveTab('calendar')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${activeTab === 'calendar'
                            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/50'
                            : 'bg-slate-800/30 text-slate-400 border border-slate-700/50 hover:bg-slate-800/50'
                            }`}
                    >
                        <CalendarIcon className="w-5 h-5" />
                        Calendario
                    </button>
                    <button
                        onClick={() => setActiveTab('shifts')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${activeTab === 'shifts'
                            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/50'
                            : 'bg-slate-800/30 text-slate-400 border border-slate-700/50 hover:bg-slate-800/50'
                            }`}
                    >
                        <ClipboardListIcon className="w-5 h-5" />
                        Turni Programmati
                    </button>
                    <button
                        onClick={() => setActiveTab('notes')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${activeTab === 'notes'
                            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/50'
                            : 'bg-slate-800/30 text-slate-400 border border-slate-700/50 hover:bg-slate-800/50'
                            }`}
                    >
                        <FileTextIcon className="w-5 h-5" />
                        Note e Richieste
                    </button>
                </div>
            </header>
            <main>
                {activeTab === 'calendar' ? (
                    <Calendar
                        shifts={userShifts}
                        isAdminView={true}
                        onUpdateShift={onUpdateShift}
                        onDeleteShift={onDeleteShift}
                    />
                ) : activeTab === 'shifts' ? (
                    <UserShiftsView assignedShifts={assignedShifts} />
                ) : (
                    <EmployeeNotesScreen
                        selectedUser={selectedUser}
                        isAdmin={true}
                    />
                )}
            </main>
        </div>
    );
};
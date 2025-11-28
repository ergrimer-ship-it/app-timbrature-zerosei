import React, { useState } from 'react';
import type { User, Shift } from '../types';
import { Calendar } from './Calendar';
import { EmployeeNotesScreen } from './EmployeeNotesScreen';
import { ChevronLeftIcon, CalendarIcon, FileTextIcon } from './icons';

interface UserDetailScreenProps {
    selectedUser: User;
    userShifts: Shift[];
    onBack: () => void;
    onUpdateShift: (updatedShift: Shift) => void;
    onDeleteShift: (shiftId: string) => void;
}

export const UserDetailScreen: React.FC<UserDetailScreenProps> = ({ selectedUser, userShifts, onBack, onUpdateShift, onDeleteShift }) => {
    const [activeTab, setActiveTab] = useState<'calendar' | 'notes'>('calendar');

    return (
        <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
            <header className="mb-8">
                <button onClick={onBack} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold mb-4">
                    <ChevronLeftIcon className="w-5 h-5" />
                    Torna alla lista utenti
                </button>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Dettaglio per {selectedUser.name} {selectedUser.surname}</h1>
                <p className="text-gray-400">Visualizzazione del calendario timbrature e note.</p>

                {/* Tab Navigation */}
                <div className="flex gap-2 mt-6">
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
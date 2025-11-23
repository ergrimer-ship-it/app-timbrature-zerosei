import React from 'react';
import type { User, Shift } from '../types';
import { Calendar } from './Calendar';
import { ChevronLeftIcon } from './icons';

interface UserDetailScreenProps {
    selectedUser: User;
    userShifts: Shift[];
    onBack: () => void;
    onUpdateShift: (updatedShift: Shift) => void;
    onDeleteShift: (shiftId: string) => void;
}

export const UserDetailScreen: React.FC<UserDetailScreenProps> = ({ selectedUser, userShifts, onBack, onUpdateShift, onDeleteShift }) => {
    return (
        <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
            <header className="mb-8">
                <button onClick={onBack} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold mb-4">
                    <ChevronLeftIcon className="w-5 h-5" />
                    Torna alla lista utenti
                </button>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Dettaglio per {selectedUser.name} {selectedUser.surname}</h1>
                <p className="text-gray-400">Visualizzazione del calendario timbrature.</p>
            </header>
            <main>
                 <Calendar 
                    shifts={userShifts} 
                    isAdminView={true}
                    onUpdateShift={onUpdateShift}
                    onDeleteShift={onDeleteShift}
                />
            </main>
        </div>
    );
};
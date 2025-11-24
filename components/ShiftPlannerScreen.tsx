import React from 'react';
import { ShiftPlanner } from './ShiftPlanner';
import type { User, AssignedShift } from '../types';

interface ShiftPlannerScreenProps {
    allUsers: User[];
    assignedShifts: AssignedShift[];
    onSaveShifts: (shifts: AssignedShift[]) => void;
}

export const ShiftPlannerScreen: React.FC<ShiftPlannerScreenProps> = ({ allUsers, assignedShifts, onSaveShifts }) => {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-white mb-2">Pianificazione Turni</h1>
                <p className="text-slate-400">Gestisci e assegna i turni ai dipendenti.</p>
            </header>
            <div className="glass-panel p-6 rounded-3xl shadow-lg">
                <ShiftPlanner
                    allUsers={allUsers}
                    assignedShifts={assignedShifts}
                    onSaveShifts={onSaveShifts}
                />
            </div>
        </div>
    );
};

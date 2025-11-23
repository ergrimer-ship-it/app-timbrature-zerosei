import React, { useState, useMemo } from 'react';
import type { AssignedShift } from '../types';
import { ChevronLeftIcon, ChevronRightIcon, ClipboardListIcon } from './icons';

interface UserShiftsViewProps {
    assignedShifts: AssignedShift[];
}

export const UserShiftsView: React.FC<UserShiftsViewProps> = ({ assignedShifts }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const changeMonth = (amount: number) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setDate(1);
            newDate.setMonth(newDate.getMonth() + amount);
            return newDate;
        });
    };

    const monthlyShifts = useMemo(() => {
        return assignedShifts
            .filter(shift => {
                const shiftDate = new Date(shift.date);
                return shiftDate.getFullYear() === currentDate.getFullYear() &&
                       shiftDate.getMonth() === currentDate.getMonth();
            })
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }, [assignedShifts, currentDate]);

    return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><ClipboardListIcon className="w-5 h-5" /> I Miei Turni</h3>

            <div className="flex items-center justify-between mb-4">
                <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-700 transition">
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <h4 className="text-lg font-semibold text-center capitalize">
                    {currentDate.toLocaleString('it-IT', { month: 'long', year: 'numeric' })}
                </h4>
                <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-700 transition">
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>

            <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-2">
                {monthlyShifts.length > 0 ? (
                    monthlyShifts.map(shift => {
                        const shiftDate = new Date(shift.date);
                        // Adjust for timezone offset to display correct local date
                        const localDate = new Date(shiftDate.getTime() + shiftDate.getTimezoneOffset() * 60000);
                        return (
                            <div key={shift.id} className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg">
                                <p className="font-semibold">
                                    {localDate.toLocaleDateString('it-IT', { weekday: 'short', day: '2-digit', month: 'short' })}
                                </p>
                                <p className="text-sm font-mono bg-blue-900/50 px-2 py-1 rounded">{shift.startTime}</p>
                            </div>
                        )
                    })
                ) : (
                    <p className="text-gray-500 text-center py-4">Nessun turno assegnato per questo mese.</p>
                )}
            </div>
        </div>
    );
};

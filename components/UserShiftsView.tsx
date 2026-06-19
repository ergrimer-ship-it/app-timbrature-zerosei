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
            const d = new Date(prev);
            d.setDate(1);
            d.setMonth(d.getMonth() + amount);
            return d;
        });
    };

    const monthlyShifts = useMemo(() => {
        return assignedShifts
            .filter(shift => {
                const d = new Date(shift.date);
                return d.getFullYear() === currentDate.getFullYear() && d.getMonth() === currentDate.getMonth();
            })
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }, [assignedShifts, currentDate]);

    return (
        <div>
            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                <ClipboardListIcon className="w-5 h-5 text-blue-600" />
                I Miei Turni
            </h3>

            <div className="flex items-center justify-between mb-4">
                <button onClick={() => changeMonth(-1)} className="p-1.5 rounded-lg hover:bg-slate-100 transition text-slate-600">
                    <ChevronLeftIcon className="w-4 h-4" />
                </button>
                <span className="text-sm font-semibold text-slate-700 capitalize">
                    {currentDate.toLocaleString('it-IT', { month: 'long', year: 'numeric' })}
                </span>
                <button onClick={() => changeMonth(1)} className="p-1.5 rounded-lg hover:bg-slate-100 transition text-slate-600">
                    <ChevronRightIcon className="w-4 h-4" />
                </button>
            </div>

            <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-1">
                {monthlyShifts.length > 0 ? (
                    monthlyShifts.map(shift => {
                        const d = new Date(shift.date);
                        const local = new Date(d.getTime() + d.getTimezoneOffset() * 60000);
                        return (
                            <div key={shift.id} className="flex justify-between items-center bg-slate-50 border border-slate-200 p-3 rounded-xl">
                                <p className="font-semibold text-slate-700 text-sm">
                                    {local.toLocaleDateString('it-IT', { weekday: 'short', day: '2-digit', month: 'short' })}
                                </p>
                                <p className="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-1 rounded-lg">
                                    {shift.startTime}{shift.endTime ? ` – ${shift.endTime}` : ''}
                                </p>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-slate-400 text-center py-6 text-sm">Nessun turno assegnato per questo mese.</p>
                )}
            </div>
        </div>
    );
};

import React, { useState, useEffect, useMemo } from 'react';
import type { User, AssignedShift, FutureLeave } from '../types';
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon, SaveIcon } from './icons';
import { getFutureLeaves } from '../services/dbService';

interface ShiftPlannerProps {
    allUsers: User[];
    assignedShifts: AssignedShift[];
    onSaveShifts: (shifts: AssignedShift[]) => void;
}

const toDateKey = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};


export const ShiftPlanner: React.FC<ShiftPlannerProps> = ({ allUsers, assignedShifts, onSaveShifts }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [localShifts, setLocalShifts] = useState<AssignedShift[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    const [leavesByUser, setLeavesByUser] = useState<Record<string, FutureLeave[]>>({});

    useEffect(() => {
        setLocalShifts(assignedShifts);
    }, [assignedShifts]);

    useEffect(() => {
        if (allUsers.length === 0) return;
        const load = async () => {
            const result: Record<string, FutureLeave[]> = {};
            await Promise.all(
                allUsers
                    .filter(u => !u.isAdmin)
                    .map(async u => { result[u.id] = await getFutureLeaves(u.id); })
            );
            setLeavesByUser(result);
        };
        load();
    }, [allUsers]);

    const changeMonth = (amount: number) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setDate(1);
            newDate.setMonth(newDate.getMonth() + amount);
            return newDate;
        });
    };

    const daysInMonth = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const numDays = new Date(year, month + 1, 0).getDate();
        return Array.from({ length: numDays }, (_, i) => new Date(year, month, i + 1));
    }, [currentDate]);

    const shiftsByDay = useMemo(() => {
        const map = new Map<string, AssignedShift[]>();
        daysInMonth.forEach(day => {
            const dayKey = toDateKey(day);
            map.set(dayKey, []);
        });

        localShifts.forEach(shift => {
            const shiftDate = new Date(shift.date);
            if (shiftDate.getFullYear() === currentDate.getFullYear() && shiftDate.getMonth() === currentDate.getMonth()){
                const dayKey = shift.date; // shift.date is already YYYY-MM-DD
                if (map.has(dayKey)) {
                    const dayShifts = map.get(dayKey)!;
                    map.set(dayKey, [...dayShifts, shift]);
                }
            }
        });
        return map;
    }, [localShifts, currentDate, daysInMonth]);

    const leavesByDate = useMemo(() => {
        const map = new Map<string, User[]>();
        daysInMonth.forEach(day => {
            const dateStr = toDateKey(day);
            const usersOnLeave = allUsers.filter(u => {
                if (u.isAdmin) return false;
                return (leavesByUser[u.id] ?? []).some(l => {
                    const end = l.endDate ?? l.startDate;
                    return l.startDate <= dateStr && dateStr <= end;
                });
            });
            if (usersOnLeave.length > 0) map.set(dateStr, usersOnLeave);
        });
        return map;
    }, [allUsers, leavesByUser, daysInMonth]);

    const handleAddShift = (date: string) => {
        const newShift: AssignedShift = {
            id: `shift_${Date.now()}_${Math.random()}`,
            date,
            userId: '',
            startTime: '18:30',
            endTime: '21:30',
        };
        setLocalShifts(prev => [...prev, newShift]);
    };

    const handleUpdateShift = (id: string, field: 'userId' | 'startTime' | 'endTime', value: string) => {
        setLocalShifts(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
    };

    const handleDeleteShift = (id: string) => {
        setLocalShifts(prev => prev.filter(s => s.id !== id));
    };
    
    const handleSaveChanges = () => {
        setIsSaving(true);
        // We only update the shifts for the currently viewed month.
        const otherMonthsShifts = assignedShifts.filter(s => {
            const shiftDate = new Date(s.date);
            return shiftDate.getFullYear() !== currentDate.getFullYear() || shiftDate.getMonth() !== currentDate.getMonth();
        });
        const currentMonthShifts = localShifts.filter(s => {
             const shiftDate = new Date(s.date);
            return shiftDate.getFullYear() === currentDate.getFullYear() && shiftDate.getMonth() === currentDate.getMonth();
        });
        onSaveShifts([...otherMonthsShifts, ...currentMonthShifts]);
        setTimeout(() => setIsSaving(false), 1000);
    };

    return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
                 <div className="flex items-center">
                    <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-700 transition">
                        <ChevronLeftIcon />
                    </button>
                    <h2 className="text-xl font-bold text-center capitalize w-48">
                        {currentDate.toLocaleString('it-IT', { month: 'long', year: 'numeric' })}
                    </h2>
                    <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-700 transition">
                        <ChevronRightIcon />
                    </button>
                </div>
                <button 
                    onClick={handleSaveChanges}
                    disabled={isSaving}
                    className="w-full sm:w-auto mt-4 sm:mt-0 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 disabled:bg-gray-500"
                >
                    <SaveIcon />
                    {isSaving ? 'Salvato!' : 'Salva Modifiche'}
                </button>
            </div>
            
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                {Array.from(shiftsByDay.entries()).sort(([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime()).map(([date, shifts]) => (
                    <div key={date} className="bg-gray-900/50 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2 text-blue-300">
                           {new Date(date.replace(/-/g, '/')).toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric' })}
                        </h4>
                        {leavesByDate.has(date) && (
                            <div className="flex flex-wrap gap-1 mb-3">
                                {leavesByDate.get(date)!.map(u => (
                                    <span key={u.id} className="inline-flex items-center gap-1 text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full">
                                        ✈️ {u.name} {u.surname}: permesso
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className="space-y-2">
                            {shifts.map(shift => (
                                <div key={shift.id} className="grid grid-cols-1 sm:grid-cols-[1fr,auto,auto,auto] gap-2 items-center">
                                    <select
                                        value={shift.userId}
                                        onChange={(e) => handleUpdateShift(shift.id, 'userId', e.target.value)}
                                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Seleziona Utente</option>
                                        {allUsers.map(u => <option key={u.id} value={u.id}>{u.name} {u.surname}</option>)}
                                    </select>
                                    <input
                                        type="time"
                                        value={shift.startTime}
                                        onChange={(e) => handleUpdateShift(shift.id, 'startTime', e.target.value)}
                                        className="w-full sm:w-auto px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="time"
                                        value={shift.endTime ?? ''}
                                        onChange={(e) => handleUpdateShift(shift.id, 'endTime', e.target.value)}
                                        className="w-full sm:w-auto px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Fine"
                                    />
                                    <button onClick={() => handleDeleteShift(shift.id)} className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                                        <TrashIcon />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => handleAddShift(date)} className="text-blue-400 hover:text-blue-300 font-semibold mt-3 text-sm">
                            + Aggiungi Turno
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
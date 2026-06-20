import React, { useState, useEffect, useMemo } from 'react';
import type { User, AssignedShift, FutureLeave } from '../types';
import { ROLE_COLORS } from '../types';
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon, SaveIcon } from './icons';
import { getFutureLeaves } from '../services/dbService';

interface ShiftPlannerProps {
    allUsers: User[];
    assignedShifts: AssignedShift[];
    onSaveShifts: (shifts: AssignedShift[]) => void;
}

const AVATAR_GRADIENTS = [
    'from-blue-500 to-indigo-600', 'from-emerald-500 to-teal-600',
    'from-violet-500 to-purple-600', 'from-orange-500 to-amber-500',
    'from-rose-500 to-pink-600', 'from-cyan-500 to-sky-600',
];

const toDateKey = (date: Date): string => {
    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const d = date.getDate().toString().padStart(2, '0');
    return `${y}-${m}-${d}`;
};

export const ShiftPlanner: React.FC<ShiftPlannerProps> = ({ allUsers, assignedShifts, onSaveShifts }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [localShifts, setLocalShifts] = useState<AssignedShift[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    const [leavesByUser, setLeavesByUser] = useState<Record<string, FutureLeave[]>>({});

    useEffect(() => { setLocalShifts(assignedShifts); }, [assignedShifts]);

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
            const d = new Date(prev);
            d.setDate(1);
            d.setMonth(d.getMonth() + amount);
            return d;
        });
    };

    const daysInMonth = useMemo(() => {
        const y = currentDate.getFullYear();
        const mo = currentDate.getMonth();
        const n = new Date(y, mo + 1, 0).getDate();
        return Array.from({ length: n }, (_, i) => new Date(y, mo, i + 1));
    }, [currentDate]);

    const shiftsByDay = useMemo(() => {
        const map = new Map<string, AssignedShift[]>();
        daysInMonth.forEach(day => map.set(toDateKey(day), []));
        localShifts.forEach(shift => {
            const d = new Date(shift.date);
            if (d.getFullYear() === currentDate.getFullYear() && d.getMonth() === currentDate.getMonth()) {
                const key = shift.date;
                if (map.has(key)) map.set(key, [...map.get(key)!, shift]);
            }
        });
        return map;
    }, [localShifts, currentDate, daysInMonth]);

    const leavesByDate = useMemo(() => {
        const map = new Map<string, User[]>();
        daysInMonth.forEach(day => {
            const dateStr = toDateKey(day);
            const users = allUsers.filter(u => {
                if (u.isAdmin) return false;
                return (leavesByUser[u.id] ?? []).some(l => {
                    const end = l.endDate ?? l.startDate;
                    return l.startDate <= dateStr && dateStr <= end;
                });
            });
            if (users.length > 0) map.set(dateStr, users);
        });
        return map;
    }, [allUsers, leavesByUser, daysInMonth]);

    const handleAddShift = (date: string) => {
        setLocalShifts(prev => [...prev, {
            id: `shift_${Date.now()}_${Math.random()}`,
            date, userId: '', startTime: '18:30', endTime: '21:30',
        }]);
    };

    const handleUpdateShift = (id: string, field: 'userId' | 'startTime' | 'endTime', value: string) => {
        setLocalShifts(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
    };

    const handleDeleteShift = (id: string) => {
        setLocalShifts(prev => prev.filter(s => s.id !== id));
    };

    const handleSaveChanges = () => {
        setIsSaving(true);
        const other = assignedShifts.filter(s => {
            const d = new Date(s.date);
            return d.getFullYear() !== currentDate.getFullYear() || d.getMonth() !== currentDate.getMonth();
        });
        const current = localShifts.filter(s => {
            const d = new Date(s.date);
            return d.getFullYear() === currentDate.getFullYear() && d.getMonth() === currentDate.getMonth();
        });
        onSaveShifts([...other, ...current]);
        setTimeout(() => setIsSaving(false), 1000);
    };

    return (
        <div className="space-y-5">
            {/* Blue header */}
            <div className="screen-header rounded-b-3xl">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">📅 Pianificazione Turni</h1>
                        <p className="text-blue-200 text-sm mt-1">Gestisci i turni del mese</p>
                    </div>
                    <button
                        onClick={handleSaveChanges}
                        disabled={isSaving}
                        className="flex items-center gap-2 px-4 py-2 bg-white text-blue-700 font-bold text-sm rounded-xl shadow hover:shadow-md transition disabled:opacity-60"
                    >
                        <SaveIcon />
                        {isSaving ? 'Salvato!' : 'Salva'}
                    </button>
                </div>
                <div className="flex items-center justify-between mt-5 bg-white/15 rounded-2xl px-4 py-3">
                    <button onClick={() => changeMonth(-1)} className="text-white hover:text-blue-200 transition p-1">
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <span className="font-bold text-white capitalize">
                        {currentDate.toLocaleString('it-IT', { month: 'long', year: 'numeric' })}
                    </span>
                    <button onClick={() => changeMonth(1)} className="text-white hover:text-blue-200 transition p-1">
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Days */}
            <div className="space-y-3">
                {Array.from(shiftsByDay.entries())
                    .sort(([a], [b]) => a.localeCompare(b))
                    .map(([date, shifts]) => (
                        <div key={date} className="glass-panel rounded-2xl p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-slate-800 capitalize">
                                    {new Date(date.replace(/-/g, '/')).toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'short' })}
                                </h4>
                                {shifts.length > 0 && (
                                    <span className="text-xs bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded-full">
                                        {shifts.length} {shifts.length === 1 ? 'turno' : 'turni'}
                                    </span>
                                )}
                            </div>

                            {leavesByDate.has(date) && (
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {leavesByDate.get(date)!.map(u => (
                                        <span key={u.id} className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-600 border border-amber-200 px-2 py-0.5 rounded-full">
                                            ✈️ {u.name} {u.surname}: permesso
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="space-y-2">
                                {shifts.map(shift => {
                                    const userIdx = allUsers.findIndex(u => u.id === shift.userId);
                                    const gradient = userIdx >= 0 ? AVATAR_GRADIENTS[userIdx % AVATAR_GRADIENTS.length] : null;
                                    const selectedUser = userIdx >= 0 ? allUsers[userIdx] : null;
                                    return (
                                    <div key={shift.id} className="grid grid-cols-1 sm:grid-cols-[auto,1fr,auto,auto,auto] gap-2 items-center bg-slate-50 rounded-xl p-2">
                                        <div className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-xs font-bold ${gradient ? `bg-gradient-to-br ${gradient}` : 'bg-slate-300'}`}>
                                            {selectedUser ? `${selectedUser.name.charAt(0)}${selectedUser.surname.charAt(0)}` : '?'}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <select
                                                value={shift.userId}
                                                onChange={(e) => handleUpdateShift(shift.id, 'userId', e.target.value)}
                                                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            >
                                                <option value="">Seleziona Utente</option>
                                                {allUsers.map(u => <option key={u.id} value={u.id}>{u.name} {u.surname}{u.role ? ` · ${u.role}` : ''}</option>)}
                                            </select>
                                            {selectedUser?.role && (() => {
                                                const c = ROLE_COLORS[selectedUser.role!];
                                                return <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${c.bg} ${c.text} ${c.border}`}>{selectedUser.role}</span>;
                                            })()}
                                        </div>
                                        <input
                                            type="time"
                                            value={shift.startTime}
                                            onChange={(e) => handleUpdateShift(shift.id, 'startTime', e.target.value)}
                                            className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        <input
                                            type="time"
                                            value={shift.endTime ?? ''}
                                            onChange={(e) => handleUpdateShift(shift.id, 'endTime', e.target.value)}
                                            className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        <button onClick={() => handleDeleteShift(shift.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                            <TrashIcon />
                                        </button>
                                    </div>
                                    );
                                })}
                            </div>
                            <button
                                onClick={() => handleAddShift(date)}
                                className="mt-3 text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 transition-colors"
                            >
                                + Aggiungi Turno
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

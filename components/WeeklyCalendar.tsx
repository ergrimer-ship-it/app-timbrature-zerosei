import React, { useState, useMemo } from 'react';
import type { Shift, AssignedShift, User, UserRole } from '../types';
import { ROLE_COLORS } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import { formatTime } from '../utils/date';

interface WeeklyCalendarProps {
    shifts: (Shift & { userId: string })[];
    assignedShifts: AssignedShift[];
    users: User[];
    onShiftClick?: (user: User, actualShift?: Shift, assignedShift?: AssignedShift) => void;
    /** Se fornito usa queste date (modal esterno); altrimenti gestisce lo stato internamente */
    weekDates?: Date[];
    onChangeWeek?: (amount: number) => void;
}

const WEEK_DAYS_FULL = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];

function toDateKey(d: Date) {
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
}

export const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({
    shifts, assignedShifts, users, onShiftClick, weekDates: externalWeekDates, onChangeWeek
}) => {
    const [internalStart, setInternalStart] = useState(() => {
        const now = new Date();
        const day = now.getDay();
        const monday = new Date(now);
        monday.setDate(now.getDate() - day + (day === 0 ? -6 : 1));
        monday.setHours(0, 0, 0, 0);
        return monday;
    });

    const isControlled = !!externalWeekDates;

    const changeWeek = (amount: number) => {
        if (isControlled) { onChangeWeek?.(amount); return; }
        setInternalStart(prev => {
            const d = new Date(prev);
            d.setDate(d.getDate() + amount * 7);
            return d;
        });
    };

    const weekDates = useMemo(() => {
        if (isControlled) return externalWeekDates!;
        return Array.from({ length: 7 }, (_, i) => {
            const d = new Date(internalStart);
            d.setDate(d.getDate() + i);
            return d;
        });
    }, [isControlled, externalWeekDates, internalStart]);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const weekStart = weekDates[0];

    return (
        <div>
            {/* Navigazione settimana (solo in modalità standalone) */}
            {!isControlled && (
                <div className="flex items-center justify-between mb-4">
                    <button onClick={() => changeWeek(-1)} className="p-2 rounded-xl hover:bg-slate-100 transition text-slate-600">
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <div className="text-center">
                        <span className="font-bold text-slate-800 capitalize">
                            {weekStart.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
                        </span>
                        <span className="text-slate-400 text-sm ml-2">
                            {weekDates[0].getDate()} – {weekDates[6].getDate()}
                        </span>
                    </div>
                    <button onClick={() => changeWeek(1)} className="p-2 rounded-xl hover:bg-slate-100 transition text-slate-600">
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </div>
            )}

            {/* Giorni — solo quelli con turni */}
            <div className="space-y-3">
                {weekDates.map((date, i) => {
                    const isToday = date.toDateString() === today.toDateString();
                    const isPast = date < today;
                    const dateKey = toDateKey(date);

                    const entries = users
                        .filter(u => !u.isAdmin)
                        .map(user => {
                            const actual = shifts.find(s => {
                                if (s.userId !== user.id) return false;
                                const sd = new Date(s.startTime);
                                return sd.getDate() === date.getDate() &&
                                    sd.getMonth() === date.getMonth() &&
                                    sd.getFullYear() === date.getFullYear();
                            });
                            const assigned = assignedShifts.find(s => s.userId === user.id && s.date === dateKey);
                            if (!actual && !assigned) return null;
                            return { user, actual, assigned };
                        })
                        .filter((x): x is NonNullable<typeof x> => x !== null);

                    if (entries.length === 0) return null;

                    return (
                        <div key={i} className={`glass-panel rounded-2xl overflow-hidden ${isToday ? 'ring-2 ring-blue-400' : ''}`}>
                            {/* Header giorno */}
                            <div className={`flex items-center justify-between px-4 py-3 border-b border-slate-100 ${isToday ? 'bg-blue-50' : 'bg-white'}`}>
                                <div>
                                    <p className={`font-bold text-sm ${isToday ? 'text-blue-700' : 'text-slate-800'}`}>
                                        {WEEK_DAYS_FULL[i]}
                                    </p>
                                    <p className={`text-xs ${isToday ? 'text-blue-500' : 'text-slate-400'}`}>
                                        {date.toLocaleDateString('it-IT', { day: 'numeric', month: 'long' })}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isToday ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                                        {entries.length} {entries.length === 1 ? 'turno' : 'turni'}
                                    </span>
                                    {isToday && (
                                        <span className="text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full">OGGI</span>
                                    )}
                                </div>
                            </div>

                            {/* Righe dipendenti */}
                            <div className="divide-y divide-slate-50">
                                {entries.map(({ user, actual, assigned }) => {
                                    const roleColor = user.role ? ROLE_COLORS[user.role as UserRole] : null;
                                    const borderColor = roleColor
                                        ? user.role === 'Banchista' ? 'border-l-blue-400'
                                        : user.role === 'Pizzaiolo' ? 'border-l-orange-400'
                                        : 'border-l-emerald-400'
                                        : 'border-l-slate-300';

                                    // Determina stato
                                    let timeDisplay: React.ReactNode;
                                    let statusLabel: React.ReactNode;
                                    let rowBg = 'bg-white';

                                    if (actual) {
                                        // Turno effettivo (timbrato)
                                        const startT = formatTime(new Date(actual.startTime));
                                        const endT = actual.endTime ? formatTime(new Date(actual.endTime)) : '...';
                                        const isActive = !actual.endTime && isToday;
                                        timeDisplay = (
                                            <span className={`font-bold text-sm ${isActive ? 'text-emerald-600' : 'text-blue-700'}`}>
                                                {startT} – {endT}
                                            </span>
                                        );
                                        statusLabel = isActive
                                            ? <span className="text-[10px] text-emerald-600 font-semibold">✅ In servizio</span>
                                            : <span className="text-[10px] text-blue-500 font-semibold">✓ Completato</span>;
                                        rowBg = isActive ? 'bg-emerald-50/50' : 'bg-white';
                                    } else if (assigned) {
                                        // Solo programmato
                                        const timeStr = `${assigned.startTime}${assigned.endTime ? ` – ${assigned.endTime}` : ''}`;
                                        const isMissed = isPast && !isToday;
                                        timeDisplay = (
                                            <span className={`font-bold text-sm ${isMissed ? 'text-red-400' : 'text-slate-400'}`}>
                                                {timeStr}
                                            </span>
                                        );
                                        statusLabel = isMissed
                                            ? <span className="text-[10px] text-red-400 font-semibold">⚠️ Non timbrato</span>
                                            : <span className="text-[10px] text-slate-400 font-semibold">📋 Programmato</span>;
                                        rowBg = isMissed ? 'bg-red-50/30' : 'bg-slate-50/50';
                                    }

                                    return (
                                        <div
                                            key={user.id}
                                            onClick={() => onShiftClick?.(user, actual, assigned)}
                                            className={`flex items-center gap-3 px-4 py-3 border-l-4 ${borderColor} ${rowBg} cursor-pointer hover:brightness-95 transition-all`}
                                        >
                                            {/* Avatar */}
                                            <div className={`w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-xs font-bold ${
                                                user.role === 'Pizzaiolo' ? 'bg-gradient-to-br from-orange-500 to-amber-500' :
                                                user.role === 'Consegnatore' ? 'bg-gradient-to-br from-emerald-500 to-teal-600' :
                                                'bg-gradient-to-br from-blue-500 to-indigo-600'
                                            }`}>
                                                {user.name.charAt(0)}{user.surname.charAt(0)}
                                            </div>

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-slate-800 text-sm truncate">
                                                    {user.name} {user.surname}
                                                </p>
                                                {user.role && roleColor && (
                                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${roleColor.bg} ${roleColor.text} ${roleColor.border}`}>
                                                        {user.role}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Orario + stato */}
                                            <div className="text-right flex-shrink-0">
                                                {timeDisplay}
                                                <div>{statusLabel}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

                {weekDates.every((date) => {
                    const dateKey = toDateKey(date);
                    return !users.some(u =>
                        shifts.some(s => s.userId === u.id && new Date(s.startTime).toDateString() === date.toDateString()) ||
                        assignedShifts.some(s => s.userId === u.id && s.date === dateKey)
                    );
                }) && (
                    <div className="text-center py-10 text-slate-400">
                        <p className="text-4xl mb-2">📅</p>
                        <p className="text-sm">Nessun turno programmato questa settimana</p>
                    </div>
                )}
            </div>
        </div>
    );
};

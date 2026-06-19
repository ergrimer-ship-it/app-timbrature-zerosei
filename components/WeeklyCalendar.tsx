import React, { useState, useMemo } from 'react';
import type { Shift, AssignedShift, PublicUser } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import { formatTime } from '../utils/date';

interface WeeklyCalendarProps {
    shifts: (Shift & { userId: string })[];
    assignedShifts: AssignedShift[];
    users: PublicUser[];
    onShiftClick?: (user: PublicUser, actualShift?: Shift, assignedShift?: AssignedShift) => void;
}

const WEEK_DAYS = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];

export const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({ shifts, assignedShifts, users, onShiftClick }) => {
    const [currentWeekStart, setCurrentWeekStart] = useState(() => {
        const now = new Date();
        const day = now.getDay();
        const diff = now.getDate() - day + (day === 0 ? -6 : 1);
        const monday = new Date(now.setDate(diff));
        monday.setHours(0, 0, 0, 0);
        return monday;
    });

    const changeWeek = (amount: number) => {
        setCurrentWeekStart(prev => {
            const d = new Date(prev);
            d.setDate(d.getDate() + amount * 7);
            return d;
        });
    };

    const weekDates = useMemo(() => {
        return Array.from({ length: 7 }, (_, i) => {
            const d = new Date(currentWeekStart);
            d.setDate(d.getDate() + i);
            return d;
        });
    }, [currentWeekStart]);

    return (
        <div>
            {/* Week nav */}
            <div className="flex items-center justify-between mb-4">
                <button onClick={() => changeWeek(-1)} className="p-2 rounded-xl hover:bg-slate-100 transition text-slate-600">
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <div className="text-center">
                    <span className="font-bold text-slate-800 capitalize">
                        {currentWeekStart.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
                    </span>
                    <span className="text-slate-400 text-sm ml-2">
                        {weekDates[0].getDate()} – {weekDates[6].getDate()}
                    </span>
                </div>
                <button onClick={() => changeWeek(1)} className="p-2 rounded-xl hover:bg-slate-100 transition text-slate-600">
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Days */}
            <div className="space-y-3">
                {weekDates.map((date, i) => {
                    const isToday = new Date().toDateString() === date.toDateString();
                    const dateKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

                    const workingUsers = users.map(user => {
                        const actualShift = shifts.find(s => {
                            if (s.userId !== user.id) return false;
                            const sd = new Date(s.startTime);
                            return sd.getDate() === date.getDate() && sd.getMonth() === date.getMonth() && sd.getFullYear() === date.getFullYear();
                        });
                        const assignedShift = assignedShifts.find(s => s.userId === user.id && s.date === dateKey);
                        if (!actualShift && !assignedShift) return null;
                        return { user, actualShift, assignedShift };
                    }).filter((item): item is NonNullable<typeof item> => item !== null);

                    return (
                        <div
                            key={i}
                            className={`rounded-2xl border p-4 ${isToday ? 'bg-blue-50 border-blue-300' : 'bg-white border-slate-200'}`}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <span className={`font-bold text-sm ${isToday ? 'text-blue-600' : 'text-slate-700'}`}>
                                    {WEEK_DAYS[i]}
                                </span>
                                <span className={`text-sm ${isToday ? 'text-blue-500' : 'text-slate-400'}`}>
                                    {date.toLocaleDateString('it-IT', { day: 'numeric', month: 'long' })}
                                </span>
                                {isToday && (
                                    <span className="ml-auto text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full">OGGI</span>
                                )}
                            </div>

                            {workingUsers.length > 0 ? (
                                <div className="flex flex-wrap gap-2">
                                    {workingUsers.map(({ user, actualShift, assignedShift }) => {
                                        const isActual = !!actualShift;
                                        const timeText = actualShift
                                            ? `${formatTime(new Date(actualShift.startTime))} – ${actualShift.endTime ? formatTime(new Date(actualShift.endTime)) : '...'}`
                                            : assignedShift?.startTime ?? '';

                                        return (
                                            <div
                                                key={user.id}
                                                onClick={() => onShiftClick?.(user, actualShift, assignedShift)}
                                                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm cursor-pointer transition-all ${
                                                    isActual
                                                        ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
                                                        : 'bg-slate-50 border-slate-200 border-dashed text-slate-600 hover:bg-slate-100'
                                                }`}
                                            >
                                                <div className={`w-5 h-5 rounded-lg flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-white ${isActual ? 'bg-blue-500' : 'bg-slate-400'}`}>
                                                    {user.name.charAt(0)}{user.surname.charAt(0)}
                                                </div>
                                                <span className="font-medium text-xs">{user.name} {user.surname}</span>
                                                <span className="font-bold text-xs opacity-70">{timeText}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <p className="text-slate-400 text-xs italic">Nessun turno programmato</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

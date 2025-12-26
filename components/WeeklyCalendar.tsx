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
        const diff = now.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
        const monday = new Date(now.setDate(diff));
        monday.setHours(0, 0, 0, 0);
        return monday;
    });

    const changeWeek = (amount: number) => {
        setCurrentWeekStart(prev => {
            const newDate = new Date(prev);
            newDate.setDate(newDate.getDate() + (amount * 7));
            return newDate;
        });
    };

    const weekDates = useMemo(() => {
        return Array.from({ length: 7 }, (_, i) => {
            const date = new Date(currentWeekStart);
            date.setDate(date.getDate() + i);
            return date;
        });
    }, [currentWeekStart]);

    return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between mb-6">
                <button onClick={() => changeWeek(-1)} className="p-2 rounded-full hover:bg-gray-700 transition">
                    <ChevronLeftIcon />
                </button>
                <h2 className="text-xl font-bold text-center capitalize">
                    {currentWeekStart.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
                    <span className="text-sm text-slate-400 ml-2 font-normal">
                        ({weekDates[0].getDate()} - {weekDates[6].getDate()})
                    </span>
                </h2>
                <button onClick={() => changeWeek(1)} className="p-2 rounded-full hover:bg-gray-700 transition">
                    <ChevronRightIcon />
                </button>
            </div>

            <div className="space-y-4">
                {weekDates.map((date, i) => {
                    const isToday = new Date().toDateString() === date.toDateString();
                    const dateKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

                    // Find all users working this day (either actual or assigned)
                    const workingUsers = users.map(user => {
                        // 1. Find Actual Shift
                        const actualShift = shifts.find(s => {
                            if (s.userId !== user.id) return false;
                            const shiftDate = new Date(s.startTime);
                            return shiftDate.getDate() === date.getDate() &&
                                shiftDate.getMonth() === date.getMonth() &&
                                shiftDate.getFullYear() === date.getFullYear();
                        });

                        // 2. Find Assigned Shift
                        const assignedShift = assignedShifts.find(s => s.userId === user.id && s.date === dateKey);

                        if (!actualShift && !assignedShift) return null;

                        return {
                            user,
                            actualShift,
                            assignedShift
                        };
                    }).filter((item): item is NonNullable<typeof item> => item !== null);

                    return (
                        <div key={i} className={`p-4 rounded-xl border ${isToday ? 'bg-slate-700/50 border-blue-500/50' : 'bg-slate-800/50 border-slate-700'}`}>
                            <div className="flex items-center gap-2 mb-3">
                                <span className={`text-lg font-bold capitalize ${isToday ? 'text-blue-400' : 'text-slate-200'}`}>
                                    {WEEK_DAYS[i]}
                                </span>
                                <span className="text-slate-400 text-sm">
                                    {date.toLocaleDateString('it-IT', { day: 'numeric', month: 'long' })}
                                </span>
                            </div>

                            {workingUsers.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {workingUsers.map(({ user, actualShift, assignedShift }) => {
                                        let content = null;
                                        let styleClass = "";

                                        if (actualShift) {
                                            content = (
                                                <>
                                                    {formatTime(new Date(actualShift.startTime))} - {actualShift.endTime ? formatTime(new Date(actualShift.endTime)) : '...'}
                                                </>
                                            );
                                            styleClass = "bg-indigo-500/20 border-indigo-500/30 text-indigo-200 hover:bg-indigo-500/30 cursor-pointer";
                                        } else if (assignedShift) {
                                            content = (
                                                <>
                                                    {assignedShift.startTime}
                                                </>
                                            );
                                            styleClass = "bg-slate-600/20 border-slate-600/30 text-slate-300 border-dashed hover:bg-slate-600/30 cursor-pointer";
                                        }

                                        return (
                                            <div
                                                key={user.id}
                                                onClick={() => onShiftClick?.(user, actualShift, assignedShift)}
                                                className={`flex items-center justify-between p-2 rounded-lg border transition-all ${styleClass}`}
                                            >
                                                <div className="flex items-center gap-2 overflow-hidden">
                                                    <div className="w-6 h-6 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white border border-slate-600">
                                                        {user.name.charAt(0)}{user.surname.charAt(0)}
                                                    </div>
                                                    <span className="font-medium truncate text-sm">{user.name} {user.surname}</span>
                                                </div>
                                                <div className="text-xs font-bold ml-2 whitespace-nowrap">
                                                    {content}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-slate-500 text-sm italic py-2">
                                    Nessun turno programmato
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

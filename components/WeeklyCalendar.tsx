import React, { useState, useMemo } from 'react';
import type { Shift, User, AssignedShift } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import { formatTime } from '../utils/date';

interface WeeklyCalendarProps {
    shifts: (Shift & { userId: string })[];
    assignedShifts: AssignedShift[];
    users: User[];
}

const WEEK_DAYS = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];

export const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({ shifts, assignedShifts, users }) => {
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
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg overflow-x-auto">
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

            <div className="min-w-[800px]">
                {/* Header Row */}
                <div className="grid grid-cols-[200px_repeat(7,1fr)] gap-2 mb-4">
                    <div className="font-bold text-slate-400 self-end pb-2">Dipendente</div>
                    {weekDates.map((date, i) => {
                        const isToday = new Date().toDateString() === date.toDateString();
                        return (
                            <div key={i} className={`text-center p-2 rounded-lg ${isToday ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-300'}`}>
                                <div className="font-bold">{WEEK_DAYS[i]}</div>
                                <div className="text-sm opacity-75">{date.getDate()}</div>
                            </div>
                        );
                    })}
                </div>

                {/* User Rows */}
                <div className="space-y-2">
                    {users.map(user => (
                        <div key={user.id} className="grid grid-cols-[200px_repeat(7,1fr)] gap-2 items-center hover:bg-slate-700/30 p-2 rounded-xl transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white border border-slate-600">
                                    {user.name.charAt(0)}{user.surname.charAt(0)}
                                </div>
                                <span className="font-medium text-slate-200 truncate">{user.name} {user.surname}</span>
                            </div>
                            {weekDates.map((date, i) => {
                                // 1. Find Actual Shift (Worked)
                                const actualShift = shifts.find(s => {
                                    if (s.userId !== user.id) return false;
                                    const shiftDate = new Date(s.startTime);
                                    return shiftDate.getDate() === date.getDate() &&
                                        shiftDate.getMonth() === date.getMonth() &&
                                        shiftDate.getFullYear() === date.getFullYear();
                                });

                                // 2. Find Assigned Shift (Planned)
                                const dateKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
                                const assignedShift = assignedShifts.find(s => s.userId === user.id && s.date === dateKey);

                                // 3. Determine what to show
                                // Priority: Actual Shift > Assigned Shift
                                let content = null;
                                let styleClass = "";

                                if (actualShift) {
                                    content = (
                                        <>
                                            {formatTime(new Date(actualShift.startTime))} - {actualShift.endTime ? formatTime(new Date(actualShift.endTime)) : '...'}
                                        </>
                                    );
                                    styleClass = "bg-indigo-500/20 border border-indigo-500/30 text-indigo-200";
                                } else if (assignedShift) {
                                    content = (
                                        <>
                                            {assignedShift.startTime}
                                        </>
                                    );
                                    styleClass = "bg-slate-600/20 border border-slate-600/30 text-slate-300 border-dashed";
                                }

                                return (
                                    <div key={i} className="h-12 flex items-center justify-center">
                                        {content ? (
                                            <div className={`text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap ${styleClass}`}>
                                                {content}
                                            </div>
                                        ) : (
                                            <div className="w-1 h-1 rounded-full bg-slate-800"></div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

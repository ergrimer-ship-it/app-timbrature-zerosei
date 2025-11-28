import React, { useState, useMemo } from 'react';
import type { Shift } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import { ShiftDetailModal } from './ShiftDetailModal';

interface CalendarProps {
    shifts: Shift[];
    isAdminView?: boolean;
    onUpdateShift?: (updatedShift: Shift) => void;
    onDeleteShift?: (shiftId: string) => void;
}

const WEEK_DAYS = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];

export const Calendar: React.FC<CalendarProps> = ({ shifts, isAdminView = false, onUpdateShift, onDeleteShift }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const changeMonth = (amount: number) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setDate(1); // Fix: Set day to 1 to prevent month skipping issues.
            newDate.setMonth(newDate.getMonth() + amount);
            return newDate;
        });
    };

    const calendarGrid = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Adjust for Monday start (Date.getDay() is 0 for Sunday)
        const startOffset = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

        const grid: (Date | null)[] = Array(startOffset).fill(null);
        for (let day = 1; day <= daysInMonth; day++) {
            grid.push(new Date(year, month, day));
        }
        return grid;
    }, [currentDate]);

    const shiftsByDay = useMemo(() => {
        const map = new Map<string, { totalMs: number }>();
        shifts.forEach(shift => {
            if (shift.endTime) {
                const startDate = new Date(shift.startTime);
                const endDate = new Date(shift.endTime);
                // Use local date parts for the key to avoid timezone issues
                const dayKey = `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}`;
                const duration = endDate.getTime() - startDate.getTime();

                const existing = map.get(dayKey) || { totalMs: 0 };
                const newTotalMs = existing.totalMs + duration;

                map.set(dayKey, { totalMs: newTotalMs });
            }
        });
        return map;
    }, [shifts]);

    const handleDayClick = (date: Date) => {
        const dayKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        // Only open modal if there are shifts on this day
        if (shiftsByDay.has(dayKey)) {
            setSelectedDate(date);
        }
    };

    const renderHoursAndMinutes = (totalMs: number) => {
        if (totalMs <= 0) return '';
        const hours = Math.floor(totalMs / (1000 * 60 * 60));
        const minutes = Math.floor((totalMs % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
    };

    const monthlyTotalMs = useMemo(() => {
        const totals = {
            total: 0,
            standard: 0,
            cassa: 0,
            macchina_propria: 0,
            macchina_pizzeria: 0
        };

        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        shifts.forEach(shift => {
            const shiftDate = new Date(shift.startTime);
            if (shift.endTime && shiftDate.getFullYear() === currentYear && shiftDate.getMonth() === currentMonth) {
                const duration = new Date(shift.endTime).getTime() - shiftDate.getTime();
                totals.total += duration;

                const type = shift.type || 'standard';
                totals[type] += duration;
            }
        });
        return totals;
    }, [shifts, currentDate]);

    return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg h-full">
            <div className="flex items-center justify-between mb-2">
                <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-700 transition">
                    <ChevronLeftIcon />
                </button>
                <h2 className="text-xl font-bold text-center capitalize">
                    {currentDate.toLocaleString('it-IT', { month: 'long', year: 'numeric' })}
                </h2>
                <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-700 transition">
                    <ChevronRightIcon />
                </button>
            </div>
            <div className="mb-4 p-3 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <div className="text-center mb-2">
                    <p className="text-sm text-slate-400 mb-1">Ore Totali Mese</p>
                    <p className="text-2xl font-bold text-indigo-300">{renderHoursAndMinutes(monthlyTotalMs.total)}</p>
                </div>
                {monthlyTotalMs.total > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-700/50 space-y-1 text-sm">
                        {monthlyTotalMs.standard > 0 && (
                            <div className="flex justify-between text-slate-300">
                                <span>Standard:</span>
                                <span className="font-mono">{renderHoursAndMinutes(monthlyTotalMs.standard)}</span>
                            </div>
                        )}
                        {monthlyTotalMs.cassa > 0 && (
                            <div className="flex justify-between text-slate-300">
                                <span>Cassa:</span>
                                <span className="font-mono">{renderHoursAndMinutes(monthlyTotalMs.cassa)}</span>
                            </div>
                        )}
                        {monthlyTotalMs.macchina_propria > 0 && (
                            <div className="flex justify-between text-slate-300">
                                <span>Macchina Propria:</span>
                                <span className="font-mono">{renderHoursAndMinutes(monthlyTotalMs.macchina_propria)}</span>
                            </div>
                        )}
                        {monthlyTotalMs.macchina_pizzeria > 0 && (
                            <div className="flex justify-between text-slate-300">
                                <span>Macchina Pizzeria:</span>
                                <span className="font-mono">{renderHoursAndMinutes(monthlyTotalMs.macchina_pizzeria)}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-400 font-semibold mb-2">
                {WEEK_DAYS.map(day => <div key={day}>{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1 md:gap-2">
                {calendarGrid.map((date, index) => {
                    if (!date) return <div key={`empty-${index}`} />;

                    const dayKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
                    const dayData = shiftsByDay.get(dayKey);
                    const hasShifts = !!dayData && dayData.totalMs > 0;

                    const today = new Date();
                    const isToday = date.getFullYear() === today.getFullYear() &&
                        date.getMonth() === today.getMonth() &&
                        date.getDate() === today.getDate();

                    return (
                        <button
                            key={date.toISOString()}
                            onClick={() => handleDayClick(date)}
                            disabled={!hasShifts}
                            className={`aspect-square flex flex-col items-center justify-center p-1 rounded-lg transition-colors text-center 
                                ${hasShifts ? 'bg-blue-900/50 cursor-pointer hover:bg-blue-900/80' : ''} 
                                ${isToday ? 'ring-2 ring-blue-500' : ''}
                                ${!hasShifts ? 'cursor-default' : ''}`}
                        >
                            <span className={`text-sm md:text-base ${isToday ? 'font-extrabold text-white' : 'text-gray-300'}`}>{date.getDate()}</span>
                            {hasShifts && (
                                <span className="text-xs md:text-sm font-bold text-blue-300 mt-1">{renderHoursAndMinutes(dayData.totalMs)}</span>
                            )}
                        </button>
                    );
                })}
            </div>
            {selectedDate && (
                <ShiftDetailModal
                    date={selectedDate}
                    shifts={shifts}
                    onClose={() => setSelectedDate(null)}
                    isAdminView={isAdminView}
                    onUpdateShift={onUpdateShift}
                    onDeleteShift={onDeleteShift}
                />
            )}
        </div>
    );
};
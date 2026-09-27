import React, { useState, useMemo } from 'react';
import type { Shift, SalaryAdvance, FutureLeave } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import { ShiftDetailModal } from './ShiftDetailModal';

interface CalendarProps {
    shifts: Shift[];
    isAdminView?: boolean;
    onUpdateShift?: (updatedShift: Shift) => void;
    onDeleteShift?: (shiftId: string) => void;
    salaryAdvances?: SalaryAdvance[];
    futureLeaves?: FutureLeave[];
}

const WEEK_DAYS = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];

export const Calendar: React.FC<CalendarProps> = ({ shifts, isAdminView = false, onUpdateShift, onDeleteShift, salaryAdvances = [], futureLeaves = [] }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const changeMonth = (amount: number) => {
        setCurrentDate(prev => {
            const d = new Date(prev);
            d.setDate(1);
            d.setMonth(d.getMonth() + amount);
            return d;
        });
    };

    const calendarGrid = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const offset = firstDay === 0 ? 6 : firstDay - 1;
        const grid: (Date | null)[] = Array(offset).fill(null);
        for (let d = 1; d <= daysInMonth; d++) grid.push(new Date(year, month, d));
        return grid;
    }, [currentDate]);

    const shiftsByDay = useMemo(() => {
        const map = new Map<string, { totalMs: number }>();
        shifts.forEach(shift => {
            if (shift.endTime) {
                const start = new Date(shift.startTime);
                const key = `${start.getFullYear()}-${(start.getMonth() + 1).toString().padStart(2, '0')}-${start.getDate().toString().padStart(2, '0')}`;
                const ms = new Date(shift.endTime).getTime() - start.getTime();
                map.set(key, { totalMs: (map.get(key)?.totalMs ?? 0) + ms });
            }
        });
        return map;
    }, [shifts]);

    const monthlyTotals = useMemo(() => {
        const t = { total: 0, standard: 0, cassa: 0, macchina_propria: 0, macchina_pizzeria: 0 };
        const pay = { total: 0, standard: 0, cassa: 0, macchina_propria: 0, macchina_pizzeria: 0 };
        const y = currentDate.getFullYear();
        const mo = currentDate.getMonth();
        shifts.forEach(shift => {
            const d = new Date(shift.startTime);
            if (shift.endTime && d.getFullYear() === y && d.getMonth() === mo) {
                const ms = new Date(shift.endTime).getTime() - d.getTime();
                t.total += ms;
                const type = (shift.type ?? 'standard') as keyof typeof t;
                if (type in t) t[type] += ms;
                if (shift.hourlyRate !== undefined) {
                    // Tronca i secondi: la paga si calcola su ore e minuti interi, non al secondo,
                    // per coincidere con un conto fatto a mano sulle ore visualizzate.
                    const minutesFloored = Math.floor(ms / 60000);
                    const amount = (minutesFloored / 60) * shift.hourlyRate;
                    pay.total += amount;
                    if (type in pay) pay[type] += amount;
                }
            }
        });
        return { hours: t, pay };
    }, [shifts, currentDate]);

    const monthlyAdvances = useMemo(() => {
        const y = currentDate.getFullYear();
        const mo = currentDate.getMonth();
        return salaryAdvances.filter(a => {
            const d = new Date(a.date);
            return d.getFullYear() === y && d.getMonth() === mo;
        }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }, [salaryAdvances, currentDate]);

    const monthlyLeaves = useMemo(() => {
        const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        return futureLeaves.filter(l => {
            const start = new Date(l.startDate);
            const end = l.endDate ? new Date(l.endDate) : start;
            return start <= monthEnd && end >= monthStart;
        }).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    }, [futureLeaves, currentDate]);

    const fmt = (ms: number) => {
        if (ms <= 0) return '';
        const h = Math.floor(ms / 3600000);
        const m = Math.floor((ms % 3600000) / 60000);
        return `${h}h ${m.toString().padStart(2, '0')}m`;
    };

    const fmtCurrency = (n: number) => n > 0 ? new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(n) : '';
    const fmtDate = (s: string) => new Date(s).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const fmtDateRange = (start: string, end?: string) => end && end !== start ? `${fmtDate(start)} – ${fmtDate(end)}` : fmtDate(start);

    const handleDayClick = (date: Date) => {
        const key = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        if (shiftsByDay.has(key)) setSelectedDate(date);
    };

    const today = new Date();

    return (
        <div className="h-full">
            {/* Month nav */}
            <div className="flex items-center justify-between mb-4">
                <button onClick={() => changeMonth(-1)} className="p-2 rounded-xl hover:bg-slate-100 transition text-slate-600">
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <h2 className="text-base font-bold text-slate-800 capitalize">
                    {currentDate.toLocaleString('it-IT', { month: 'long', year: 'numeric' })}
                </h2>
                <button onClick={() => changeMonth(1)} className="p-2 rounded-xl hover:bg-slate-100 transition text-slate-600">
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Monthly totals */}
            <div className="mb-4 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                <div className="text-center mb-2">
                    <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-1">Ore Totali Mese</p>
                    <p className="text-2xl font-bold text-blue-700">{fmt(monthlyTotals.hours.total) || '—'}</p>
                    {monthlyTotals.pay.total > 0 && (
                        <p className="text-sm font-bold text-emerald-600 mt-0.5">{fmtCurrency(monthlyTotals.pay.total)}</p>
                    )}
                </div>
                {monthlyTotals.hours.total > 0 && (
                    <div className="mt-3 pt-3 border-t border-blue-200 space-y-1.5 text-sm">
                        {monthlyTotals.hours.standard > 0 && (
                            <div className="flex justify-between text-slate-600">
                                <span>Standard</span>
                                <span className="font-mono font-semibold text-slate-700">
                                    {fmt(monthlyTotals.hours.standard)}
                                    {monthlyTotals.pay.standard > 0 && <span className="text-emerald-600 ml-1.5">{fmtCurrency(monthlyTotals.pay.standard)}</span>}
                                </span>
                            </div>
                        )}
                        {monthlyTotals.hours.cassa > 0 && (
                            <div className="flex justify-between text-slate-600">
                                <span>Cassa</span>
                                <span className="font-mono font-semibold text-slate-700">
                                    {fmt(monthlyTotals.hours.cassa)}
                                    {monthlyTotals.pay.cassa > 0 && <span className="text-emerald-600 ml-1.5">{fmtCurrency(monthlyTotals.pay.cassa)}</span>}
                                </span>
                            </div>
                        )}
                        {monthlyTotals.hours.macchina_propria > 0 && (
                            <div className="flex justify-between text-slate-600">
                                <span>Macchina Propria</span>
                                <span className="font-mono font-semibold text-slate-700">
                                    {fmt(monthlyTotals.hours.macchina_propria)}
                                    {monthlyTotals.pay.macchina_propria > 0 && <span className="text-emerald-600 ml-1.5">{fmtCurrency(monthlyTotals.pay.macchina_propria)}</span>}
                                </span>
                            </div>
                        )}
                        {monthlyTotals.hours.macchina_pizzeria > 0 && (
                            <div className="flex justify-between text-slate-600">
                                <span>Macchina Pizzeria</span>
                                <span className="font-mono font-semibold text-slate-700">
                                    {fmt(monthlyTotals.hours.macchina_pizzeria)}
                                    {monthlyTotals.pay.macchina_pizzeria > 0 && <span className="text-emerald-600 ml-1.5">{fmtCurrency(monthlyTotals.pay.macchina_pizzeria)}</span>}
                                </span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Week day headers */}
            <div className="grid grid-cols-7 gap-1 text-center mb-1">
                {WEEK_DAYS.map(d => (
                    <div key={d} className="text-xs font-semibold text-slate-400 py-1">{d}</div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
                {calendarGrid.map((date, i) => {
                    if (!date) return <div key={`e-${i}`} />;
                    const key = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
                    const dayData = shiftsByDay.get(key);
                    const hasShifts = !!dayData && dayData.totalMs > 0;
                    const isToday = date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();

                    return (
                        <button
                            key={date.toISOString()}
                            onClick={() => handleDayClick(date)}
                            disabled={!hasShifts}
                            className={`aspect-square flex flex-col items-center justify-center p-0.5 rounded-xl transition-all text-center
                                ${hasShifts ? 'bg-blue-600 cursor-pointer hover:bg-blue-700 shadow-sm' : 'cursor-default'}
                                ${isToday && !hasShifts ? 'ring-2 ring-blue-400' : ''}
                            `}
                        >
                            <span className={`text-xs md:text-sm font-bold leading-tight ${hasShifts ? 'text-white' : isToday ? 'text-blue-600' : 'text-slate-500'}`}>
                                {date.getDate()}
                            </span>
                            {hasShifts && (
                                <span className="text-[9px] md:text-[10px] font-bold text-blue-200 leading-tight">
                                    {fmt(dayData.totalMs)}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Riepilogo mese: anticipi e permessi/ferie */}
            {(monthlyAdvances.length > 0 || monthlyLeaves.length > 0) && (
                <div className="mt-4 space-y-3">
                    {monthlyAdvances.length > 0 && (
                        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">💶 Anticipi del mese</p>
                            <div className="space-y-1.5">
                                {monthlyAdvances.map(a => (
                                    <div key={a.id} className="flex items-center justify-between text-sm">
                                        <div>
                                            <span className="text-slate-600">{fmtDate(a.date)}</span>
                                            {a.notes && <span className="text-slate-400 italic ml-2">"{a.notes}"</span>}
                                        </div>
                                        <span className="font-mono font-semibold text-emerald-700">{fmtCurrency(a.amount)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {monthlyLeaves.length > 0 && (
                        <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl">
                            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">🏖️ Permessi/Ferie del mese</p>
                            <div className="space-y-1.5">
                                {monthlyLeaves.map(l => (
                                    <div key={l.id} className="text-sm text-slate-600">
                                        {fmtDateRange(l.startDate, l.endDate)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

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

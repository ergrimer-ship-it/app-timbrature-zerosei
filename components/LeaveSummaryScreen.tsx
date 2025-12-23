import React, { useState, useEffect, useMemo } from 'react';
import { getAllUsers, getFutureLeaves } from '../services/dbService';
import type { User, FutureLeave } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface LeaveSummaryScreenProps {
    onBack?: () => void;
}

interface LeaveItem {
    user: User;
    leave: FutureLeave;
}

export const LeaveSummaryScreen: React.FC<LeaveSummaryScreenProps> = ({ onBack }) => {
    // Initialize with Next Month
    const [currentDate, setCurrentDate] = useState(() => {
        const d = new Date();
        d.setMonth(d.getMonth() + 1);
        d.setDate(1);
        return d;
    });

    const [allLeaves, setAllLeaves] = useState<LeaveItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            try {
                const users = await getAllUsers();
                const promises = users.map(async user => {
                    const leaves = await getFutureLeaves(user.id);
                    return leaves.map(leave => ({ user, leave }));
                });
                const results = await Promise.all(promises);
                const flat = results.flat();
                setAllLeaves(flat);
            } catch (error) {
                console.error("Error loading leaves summary:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, []);

    const changeMonth = (amount: number) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setDate(1);
            newDate.setMonth(newDate.getMonth() + amount);
            return newDate;
        });
    };

    const formatRange = (start: string, end?: string) => {
        const s = new Date(start);
        const e = end ? new Date(end) : s;

        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };

        if (s.getTime() === e.getTime()) {
            return s.toLocaleDateString('it-IT', options);
        }
        return `${s.toLocaleDateString('it-IT', options)} - ${e.toLocaleDateString('it-IT', options)}`;
    };

    const filteredLeaves = useMemo(() => {
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        return allLeaves.filter(item => {
            const start = new Date(item.leave.startDate);
            const end = item.leave.endDate ? new Date(item.leave.endDate) : start;

            // Check if loop overlaps with current month
            // Simple check: start or end is in the month
            // Better check: range overlap

            const monthStart = new Date(currentYear, currentMonth, 1);
            const monthEnd = new Date(currentYear, currentMonth + 1, 0);

            return start <= monthEnd && end >= monthStart;
        }).sort((a, b) => new Date(a.leave.startDate).getTime() - new Date(b.leave.startDate).getTime());
    }, [allLeaves, currentDate]);

    if (isLoading) {
        return <div className="text-white p-8">Caricamento riepilogo...</div>;
    }

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Riepilogo Permessi</h1>
                    <p className="text-slate-400">Pianificazione ferie e assenze dei dipendenti.</p>
                </div>

                <div className="flex items-center bg-slate-800 rounded-lg p-1 self-start md:self-auto">
                    <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-slate-700 rounded-md transition text-slate-300">
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <span className="min-w-[140px] text-center font-bold text-white capitalize px-2">
                        {currentDate.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
                    </span>
                    <button onClick={() => changeMonth(1)} className="p-2 hover:bg-slate-700 rounded-md transition text-slate-300">
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </div>
            </header>

            <div className="glass-panel p-0 overflow-hidden rounded-2xl shadow-lg bg-slate-800/50 border border-slate-700">
                {filteredLeaves.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-700 bg-slate-800/80 text-slate-400 text-xs uppercase tracking-wider">
                                    <th className="p-4 font-semibold">Dipendente</th>
                                    <th className="p-4 font-semibold">Periodo</th>
                                    <th className="p-4 font-semibold text-center">Giorni</th>
                                    <th className="p-4 font-semibold text-right">Dettagli</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700/50">
                                {filteredLeaves.map((item) => {
                                    const s = new Date(item.leave.startDate);
                                    const e = item.leave.endDate ? new Date(item.leave.endDate) : s;
                                    const days = Math.round((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24)) + 1;

                                    return (
                                        <tr key={item.leave.id} className="hover:bg-slate-700/30 transition-colors">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-300 border border-indigo-500/30">
                                                        {item.user.name.charAt(0)}{item.user.surname.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-slate-200">{item.user.name} {item.user.surname}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-slate-300">
                                                {formatRange(item.leave.startDate, item.leave.endDate)}
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className="inline-block px-2 py-1 rounded-md bg-slate-700 text-xs font-bold text-slate-300 min-w-[30px]">
                                                    {days}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="text-xs text-slate-500">
                                                    Richiesto il {new Date(item.leave.createdAt).toLocaleDateString('it-IT')}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="p-12 text-center flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-600">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-slate-300">Nessun permesso trovato</h3>
                        <p className="text-slate-500 mt-1">Non ci sono richieste di permesso per {currentDate.toLocaleDateString('it-IT', { month: 'long' })}.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

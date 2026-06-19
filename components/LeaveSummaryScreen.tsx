import React, { useState, useEffect, useMemo } from 'react';
import { getAllUsers, getFutureLeaves } from '../services/dbService';
import type { User, FutureLeave } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface LeaveItem { user: User; leave: FutureLeave; }

export const LeaveSummaryScreen: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(() => {
        const d = new Date();
        d.setMonth(d.getMonth() + 1);
        d.setDate(1);
        return d;
    });
    const [allLeaves, setAllLeaves] = useState<LeaveItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            setIsLoading(true);
            try {
                const users = await getAllUsers();
                const results = await Promise.all(
                    users.map(async user => (await getFutureLeaves(user.id)).map(leave => ({ user, leave })))
                );
                setAllLeaves(results.flat());
            } finally {
                setIsLoading(false);
            }
        };
        load();
    }, []);

    const changeMonth = (amount: number) => {
        setCurrentDate(prev => {
            const d = new Date(prev);
            d.setDate(1);
            d.setMonth(d.getMonth() + amount);
            return d;
        });
    };

    const formatRange = (start: string, end?: string) => {
        const s = new Date(start);
        const e = end ? new Date(end) : s;
        const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
        return s.getTime() === e.getTime()
            ? s.toLocaleDateString('it-IT', opts)
            : `${s.toLocaleDateString('it-IT', opts)} – ${e.toLocaleDateString('it-IT', opts)}`;
    };

    const filteredLeaves = useMemo(() => {
        const y = currentDate.getFullYear();
        const mo = currentDate.getMonth();
        const monthStart = new Date(y, mo, 1);
        const monthEnd = new Date(y, mo + 1, 0);
        return allLeaves.filter(({ leave }) => {
            const start = new Date(leave.startDate);
            const end = leave.endDate ? new Date(leave.endDate) : start;
            return start <= monthEnd && end >= monthStart;
        }).sort((a, b) => new Date(a.leave.startDate).getTime() - new Date(b.leave.startDate).getTime());
    }, [allLeaves, currentDate]);

    if (isLoading) return <div className="text-slate-500 p-8 text-center">Caricamento riepilogo...</div>;

    return (
        <div className="space-y-5">
            {/* Blue header */}
            <div className="screen-header rounded-b-3xl">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h1 className="text-2xl font-bold">Riepilogo Permessi</h1>
                        <p className="text-blue-200 text-sm mt-1">Ferie e assenze dei dipendenti</p>
                    </div>
                </div>
                <div className="flex items-center justify-between bg-white/15 rounded-2xl px-4 py-3">
                    <button onClick={() => changeMonth(-1)} className="text-white hover:text-blue-200 transition p-1">
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <span className="font-bold text-white capitalize">
                        {currentDate.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
                    </span>
                    <button onClick={() => changeMonth(1)} className="text-white hover:text-blue-200 transition p-1">
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="glass-panel rounded-2xl overflow-hidden">
                {filteredLeaves.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-100 bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                    <th className="p-4 font-semibold">Dipendente</th>
                                    <th className="p-4 font-semibold">Periodo</th>
                                    <th className="p-4 font-semibold text-center">Giorni</th>
                                    <th className="p-4 font-semibold text-right">Richiesto</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredLeaves.map(({ user, leave }) => {
                                    const s = new Date(leave.startDate);
                                    const e = leave.endDate ? new Date(leave.endDate) : s;
                                    const days = Math.round((e.getTime() - s.getTime()) / 86400000) + 1;
                                    return (
                                        <tr key={leave.id} className="hover:bg-blue-50/40 transition-colors">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">
                                                        {user.name.charAt(0)}{user.surname.charAt(0)}
                                                    </div>
                                                    <span className="font-medium text-slate-700 text-sm">{user.name} {user.surname}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-slate-600 text-sm">{formatRange(leave.startDate, leave.endDate)}</td>
                                            <td className="p-4 text-center">
                                                <span className="inline-block px-2 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold min-w-[28px]">{days}</span>
                                            </td>
                                            <td className="p-4 text-right text-xs text-slate-400">
                                                {new Date(leave.createdAt).toLocaleDateString('it-IT')}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="py-16 text-center">
                        <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-slate-500 font-medium">Nessun permesso per {currentDate.toLocaleDateString('it-IT', { month: 'long' })}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

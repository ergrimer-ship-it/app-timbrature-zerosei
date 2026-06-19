import React, { useState, useEffect, useMemo } from 'react';
import { getAllUsers, getFutureLeaves, getAllLeaveRequests, approveLeaveRequest, rejectLeaveRequest } from '../services/dbService';
import type { User, FutureLeave, LeaveRequest } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface LeaveItem { user: User; leave: FutureLeave; }

export const LeaveSummaryScreen: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'requests' | 'confirmed'>('requests');

    // Confirmed leaves state
    const [currentDate, setCurrentDate] = useState(() => {
        const d = new Date(); d.setMonth(d.getMonth() + 1); d.setDate(1); return d;
    });
    const [allLeaves, setAllLeaves] = useState<LeaveItem[]>([]);

    // Pending requests state
    const [requests, setRequests] = useState<LeaveRequest[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            setIsLoading(true);
            try {
                const allUsers = await getAllUsers();
                setUsers(allUsers);
                const [leavesArrays, reqs] = await Promise.all([
                    Promise.all(allUsers.map(async u => (await getFutureLeaves(u.id)).map(l => ({ user: u, leave: l })))),
                    getAllLeaveRequests(),
                ]);
                setAllLeaves(leavesArrays.flat());
                setRequests(reqs);
            } finally { setIsLoading(false); }
        };
        load();
    }, []);

    const pendingRequests = useMemo(() =>
        requests.filter(r => r.status === 'pending')
    , [requests]);

    const handleApprove = async (req: LeaveRequest) => {
        await approveLeaveRequest(req);
        setRequests(prev => prev.map(r => r.id === req.id ? { ...r, status: 'approved', reviewedAt: new Date().toISOString() } : r));
        // Aggiorna anche la lista confirmed
        const user = users.find(u => u.id === req.userId);
        if (user) {
            setAllLeaves(prev => [...prev, {
                user,
                leave: { id: `leave_${req.id}`, userId: req.userId, startDate: req.startDate, ...(req.endDate ? { endDate: req.endDate } : {}), createdAt: new Date().toISOString() }
            }]);
        }
    };

    const handleReject = async (req: LeaveRequest) => {
        await rejectLeaveRequest(req);
        setRequests(prev => prev.map(r => r.id === req.id ? { ...r, status: 'rejected', reviewedAt: new Date().toISOString() } : r));
    };

    const changeMonth = (amount: number) => {
        setCurrentDate(prev => { const d = new Date(prev); d.setDate(1); d.setMonth(d.getMonth() + amount); return d; });
    };

    const formatRange = (start: string, end?: string) => {
        const s = new Date(start); const e = end ? new Date(end) : s;
        const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
        return s.getTime() === e.getTime() ? s.toLocaleDateString('it-IT', opts) : `${s.toLocaleDateString('it-IT', opts)} – ${e.toLocaleDateString('it-IT', opts)}`;
    };

    const fmtDate = (s: string) => new Date(s).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });

    const filteredLeaves = useMemo(() => {
        const y = currentDate.getFullYear(); const mo = currentDate.getMonth();
        const start = new Date(y, mo, 1); const end = new Date(y, mo + 1, 0);
        return allLeaves
            .filter(({ leave }) => {
                const s = new Date(leave.startDate); const e = leave.endDate ? new Date(leave.endDate) : s;
                return s <= end && e >= start;
            })
            .sort((a, b) => new Date(a.leave.startDate).getTime() - new Date(b.leave.startDate).getTime());
    }, [allLeaves, currentDate]);

    if (isLoading) return <div className="text-slate-500 p-8 text-center animate-pulse">Caricamento...</div>;

    return (
        <div className="space-y-5">
            {/* Blue header */}
            <div className="screen-header rounded-b-3xl">
                <h1 className="text-2xl font-bold">🏖️ Permessi</h1>
                <p className="text-blue-200 text-sm mt-1">Richieste e permessi confermati</p>

                {/* Tabs */}
                <div className="flex gap-2 mt-4">
                    <button onClick={() => setActiveTab('requests')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold transition-all ${activeTab === 'requests' ? 'bg-white text-blue-700' : 'bg-white/15 text-blue-100 hover:bg-white/25'}`}>
                        📥 Richieste
                        {pendingRequests.length > 0 && (
                            <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                                {pendingRequests.length}
                            </span>
                        )}
                    </button>
                    <button onClick={() => setActiveTab('confirmed')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold transition-all ${activeTab === 'confirmed' ? 'bg-white text-blue-700' : 'bg-white/15 text-blue-100 hover:bg-white/25'}`}>
                        ✅ Confermati
                    </button>
                </div>
            </div>

            {/* TAB: Richieste */}
            {activeTab === 'requests' && (
                <div className="space-y-3">
                    {requests.length === 0 ? (
                        <div className="glass-panel rounded-2xl py-16 text-center">
                            <div className="text-5xl mb-3">📭</div>
                            <p className="text-slate-500">Nessuna richiesta ricevuta.</p>
                        </div>
                    ) : (
                        requests.map(req => {
                            const days = req.endDate
                                ? Math.ceil((new Date(req.endDate).getTime() - new Date(req.startDate).getTime()) / 86400000) + 1
                                : 1;
                            const isPending = req.status === 'pending';
                            return (
                                <div key={req.id} className={`glass-panel rounded-2xl p-4 border-l-4 ${
                                    isPending ? 'border-amber-400' :
                                    req.status === 'approved' ? 'border-emerald-400' : 'border-red-400'
                                }`}>
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-sm flex-shrink-0">
                                                {req.userName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800 text-sm">{req.userName}</p>
                                                <p className="text-blue-700 font-semibold text-sm">
                                                    {formatRange(req.startDate, req.endDate)}
                                                    <span className="text-slate-400 font-normal ml-1">({days}gg)</span>
                                                </p>
                                                {req.notes && <p className="text-xs text-slate-500 mt-0.5 italic">"{req.notes}"</p>}
                                                <p className="text-xs text-slate-400 mt-0.5">
                                                    {fmtDate(req.requestedAt)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            {isPending ? (
                                                <div className="flex flex-col gap-1.5">
                                                    <button onClick={() => handleApprove(req)}
                                                        className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-colors">
                                                        ✅ Approva
                                                    </button>
                                                    <button onClick={() => handleReject(req)}
                                                        className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-xl transition-colors">
                                                        ❌ Rifiuta
                                                    </button>
                                                </div>
                                            ) : (
                                                <span className={`text-xs font-bold px-2 py-1 rounded-full border ${
                                                    req.status === 'approved'
                                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                                        : 'bg-red-50 text-red-600 border-red-200'
                                                }`}>
                                                    {req.status === 'approved' ? '✅ Approvato' : '❌ Rifiutato'}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            )}

            {/* TAB: Confermati */}
            {activeTab === 'confirmed' && (
                <>
                    <div className="glass-panel rounded-2xl overflow-hidden">
                        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100">
                            <button onClick={() => changeMonth(-1)} className="p-1.5 rounded-lg hover:bg-slate-100 transition text-slate-600">
                                <ChevronLeftIcon className="w-4 h-4" />
                            </button>
                            <span className="font-bold text-slate-800 capitalize text-sm">
                                {currentDate.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
                            </span>
                            <button onClick={() => changeMonth(1)} className="p-1.5 rounded-lg hover:bg-slate-100 transition text-slate-600">
                                <ChevronRightIcon className="w-4 h-4" />
                            </button>
                        </div>

                        {filteredLeaves.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-100">
                                            <th className="p-4 font-semibold">Dipendente</th>
                                            <th className="p-4 font-semibold">Periodo</th>
                                            <th className="p-4 font-semibold text-center">Giorni</th>
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
                                                        <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded-lg">{days}</span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="py-16 text-center">
                                <div className="text-5xl mb-3">🏖️</div>
                                <p className="text-slate-500">Nessun permesso per {currentDate.toLocaleDateString('it-IT', { month: 'long' })}</p>
                            </div>
                        )}
                    </div>
                </>
            )}

            {/* Permessi confermati per dipendente specifico — visibili dall'admin nelle note dipendente */}
            {activeTab === 'confirmed' && (
                <p className="text-xs text-slate-400 text-center">
                    I permessi approvati appaiono anche nella scheda del singolo dipendente → tab "Note e Richieste"
                </p>
            )}
        </div>
    );
};

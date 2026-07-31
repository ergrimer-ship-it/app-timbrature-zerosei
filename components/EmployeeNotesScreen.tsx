import React, { useState, useEffect, useMemo } from 'react';
import type { User, SalaryAdvance, FutureLeave, LeaveRequest, AssignedShift, PublicUser, ShiftSwapRequest } from '../types';
import { getSalaryAdvances, addSalaryAdvance, deleteSalaryAdvance, getFutureLeaves, addFutureLeave, deleteFutureLeave, addLeaveRequest, getUserLeaveRequests, getAssignedShifts, getPublicUsers, addShiftSwapRequest, getUserShiftSwapRequests, approveShiftSwap, rejectShiftSwap } from '../services/dbService';

interface EmployeeNotesScreenProps {
    selectedUser: User;
    isAdmin: boolean;
}

export const EmployeeNotesScreen: React.FC<EmployeeNotesScreenProps> = ({ selectedUser, isAdmin }) => {
    const [advances, setAdvances] = useState<SalaryAdvance[]>([]);
    const [leaves, setLeaves] = useState<FutureLeave[]>([]);
    const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);
    const [loading, setLoading] = useState(true);

    const [advanceAmount, setAdvanceAmount] = useState('');
    const [advanceDate, setAdvanceDate] = useState('');
    const [advanceNotes, setAdvanceNotes] = useState('');

    // Admin-only: aggiunta manuale permesso confermato
    const [leaveStartDate, setLeaveStartDate] = useState('');
    const [leaveEndDate, setLeaveEndDate] = useState('');

    // Dipendente: richiesta permesso
    const [reqStartDate, setReqStartDate] = useState('');
    const [reqEndDate, setReqEndDate] = useState('');
    const [reqNotes, setReqNotes] = useState('');
    const [reqSending, setReqSending] = useState(false);
    const [reqSuccess, setReqSuccess] = useState(false);

    // Tab richieste (solo dipendente)
    const [activeRequestTab, setActiveRequestTab] = useState<'permesso' | 'turno'>('permesso');

    // Dipendente: richiesta cambio turno (i turni futuri sono turni pianificati/AssignedShift,
    // non turni reali/Shift che esistono solo dopo la timbratura)
    const [allAssignedShifts, setAllAssignedShifts] = useState<AssignedShift[]>([]);
    const [colleagues, setColleagues] = useState<PublicUser[]>([]);
    const [swapRequests, setSwapRequests] = useState<ShiftSwapRequest[]>([]);
    const [swapMyShiftId, setSwapMyShiftId] = useState('');
    const [swapColleagueId, setSwapColleagueId] = useState('');
    const [swapColleagueShiftId, setSwapColleagueShiftId] = useState('');
    const [swapSending, setSwapSending] = useState(false);
    const [swapSuccess, setSwapSuccess] = useState(false);

    useEffect(() => { loadData(); }, [selectedUser.id]);

    const todayStr = useMemo(() => {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }, []);

    const myShifts = useMemo(
        () => allAssignedShifts
            .filter(s => s.userId === selectedUser.id && s.date >= todayStr)
            .sort((a, b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime)),
        [allAssignedShifts, selectedUser.id, todayStr]
    );

    const colleagueShifts = useMemo(
        () => swapColleagueId
            ? allAssignedShifts
                .filter(s => s.userId === swapColleagueId && s.date >= todayStr)
                .sort((a, b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime))
            : [],
        [allAssignedShifts, swapColleagueId, todayStr]
    );

    const loadData = async () => {
        setLoading(true);
        try {
            const [adv, lv, reqs, assignedShifts, users, swapReqs] = await Promise.all([
                getSalaryAdvances(selectedUser.id),
                getFutureLeaves(selectedUser.id),
                !isAdmin ? getUserLeaveRequests(selectedUser.id) : Promise.resolve([]),
                !isAdmin ? getAssignedShifts() : Promise.resolve([]),
                !isAdmin ? getPublicUsers() : Promise.resolve([]),
                !isAdmin ? getUserShiftSwapRequests(selectedUser.id) : Promise.resolve([]),
            ]);
            setAdvances(adv);
            setLeaves(lv);
            setLeaveRequests(reqs);
            setAllAssignedShifts(assignedShifts);
            // Solo colleghi con lo stesso ruolo possono scambiarsi un turno
            setColleagues(users.filter(u => u.id !== selectedUser.id && u.role === selectedUser.role));
            setSwapRequests(swapReqs);
        } finally { setLoading(false); }
    };

    const handleAddAdvance = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!advanceAmount || !advanceDate) return;
        const newAdv: SalaryAdvance = {
            id: `advance_${Date.now()}`, userId: selectedUser.id,
            amount: parseFloat(advanceAmount), date: new Date(advanceDate).toISOString(),
            notes: advanceNotes, createdAt: new Date().toISOString()
        };
        try {
            await addSalaryAdvance(selectedUser.id, newAdv);
            setAdvances(prev => [newAdv, ...prev]);
            setAdvanceAmount(''); setAdvanceDate(''); setAdvanceNotes('');
        } catch { alert("Errore durante l'aggiunta dell'anticipo"); }
    };

    const handleDeleteAdvance = async (id: string) => {
        if (!confirm('Eliminare questo anticipo?')) return;
        await deleteSalaryAdvance(selectedUser.id, id);
        setAdvances(prev => prev.filter(a => a.id !== id));
    };

    const handleAddLeave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!leaveStartDate) return;
        const newLeave: FutureLeave = {
            id: `leave_${Date.now()}`, userId: selectedUser.id,
            startDate: leaveStartDate,
            ...(leaveEndDate ? { endDate: leaveEndDate } : {}),
            createdAt: new Date().toISOString()
        };
        try {
            await addFutureLeave(selectedUser.id, newLeave);
            setLeaves(prev => [...prev, newLeave].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()));
            setLeaveStartDate(''); setLeaveEndDate('');
        } catch { alert("Errore durante l'aggiunta del permesso"); }
    };

    const handleDeleteLeave = async (id: string) => {
        if (!confirm('Eliminare questo permesso?')) return;
        await deleteFutureLeave(selectedUser.id, id);
        setLeaves(prev => prev.filter(l => l.id !== id));
    };

    const handleSendRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!reqStartDate) return;
        setReqSending(true);
        try {
            const req: LeaveRequest = {
                id: `req_${Date.now()}`,
                userId: selectedUser.id,
                userName: `${selectedUser.name} ${selectedUser.surname}`,
                startDate: reqStartDate,
                ...(reqEndDate ? { endDate: reqEndDate } : {}),
                ...(reqNotes.trim() ? { notes: reqNotes.trim() } : {}),
                status: 'pending',
                requestedAt: new Date().toISOString(),
            };
            await addLeaveRequest(req);
            setLeaveRequests(prev => [req, ...prev]);
            setReqStartDate(''); setReqEndDate(''); setReqNotes('');
            setReqSuccess(true);
            setTimeout(() => setReqSuccess(false), 3000);
        } finally { setReqSending(false); }
    };

    const handleSendSwapRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!swapMyShiftId || !swapColleagueId || !swapColleagueShiftId) return;
        const myShift = myShifts.find(s => s.id === swapMyShiftId);
        const colleague = colleagues.find(c => c.id === swapColleagueId);
        const colleagueShift = colleagueShifts.find(s => s.id === swapColleagueShiftId);
        if (!myShift || !colleague || !colleagueShift) return;
        setSwapSending(true);
        try {
            const req: ShiftSwapRequest = {
                id: `swap_${Date.now()}`,
                requesterId: selectedUser.id,
                requesterName: `${selectedUser.name} ${selectedUser.surname}`,
                requesterShiftId: myShift.id,
                requesterShiftDate: myShift.date,
                requesterShiftStart: myShift.startTime,
                ...(myShift.endTime ? { requesterShiftEnd: myShift.endTime } : {}),
                targetUserId: colleague.id,
                targetUserName: `${colleague.name} ${colleague.surname}`,
                targetShiftId: colleagueShift.id,
                targetShiftDate: colleagueShift.date,
                targetShiftStart: colleagueShift.startTime,
                ...(colleagueShift.endTime ? { targetShiftEnd: colleagueShift.endTime } : {}),
                status: 'pending',
                requestedAt: new Date().toISOString(),
            };
            await addShiftSwapRequest(req);
            setSwapRequests(prev => [req, ...prev]);
            setSwapMyShiftId(''); setSwapColleagueId(''); setSwapColleagueShiftId('');
            setSwapSuccess(true);
            setTimeout(() => setSwapSuccess(false), 3000);
        } catch {
            alert('Errore durante l\'invio della richiesta di cambio turno.');
        } finally { setSwapSending(false); }
    };

    const [swapReplyingId, setSwapReplyingId] = useState<string | null>(null);

    const handleAcceptSwap = async (req: ShiftSwapRequest) => {
        setSwapReplyingId(req.id);
        try {
            await approveShiftSwap(req);
            setSwapRequests(prev => prev.map(r => r.id === req.id ? { ...r, status: 'approved', reviewedAt: new Date().toISOString() } : r));
        } catch {
            alert('Errore durante l\'accettazione del cambio turno.');
        } finally { setSwapReplyingId(null); }
    };

    const handleRejectSwap = async (req: ShiftSwapRequest) => {
        setSwapReplyingId(req.id);
        try {
            await rejectShiftSwap(req);
            setSwapRequests(prev => prev.map(r => r.id === req.id ? { ...r, status: 'rejected', reviewedAt: new Date().toISOString() } : r));
        } finally { setSwapReplyingId(null); }
    };

    const fmtCurrency = (n: number) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(n);
    const fmtDate = (s: string) => new Date(s).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const fmtAssignedShift = (date: string, start: string, end?: string) => {
        const dateLabel = new Date(`${date}T00:00:00`).toLocaleDateString('it-IT', { weekday: 'short', day: '2-digit', month: '2-digit' });
        return `${dateLabel} ${start}${end ? `–${end}` : ''}`;
    };

    if (loading) return <div className="text-center py-12 text-slate-400 animate-pulse">Caricamento...</div>;

    return (
        <div className="space-y-5">
            {!isAdmin && (
                <div className="screen-header rounded-b-3xl">
                    <h1 className="text-2xl font-bold">📝 Note e Richieste</h1>
                    <p className="text-blue-200 text-sm mt-1">Le tue note e richieste</p>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Anticipi */}
                <div className="glass-panel rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-slate-800 flex items-center gap-2">💶 Anticipi Stipendio</h2>
                        <span className="text-lg font-bold text-emerald-600">{fmtCurrency(advances.reduce((s, a) => s + a.amount, 0))}</span>
                    </div>

                    {isAdmin && (
                        <form onSubmit={handleAddAdvance} className="mb-4 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Aggiungi Anticipo</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs text-slate-500 block mb-1">Importo (€)</label>
                                    <input type="number" step="0.01" value={advanceAmount} onChange={e => setAdvanceAmount(e.target.value)}
                                        className="glass-input w-full px-3 py-2 rounded-xl text-sm" placeholder="0.00" required />
                                </div>
                                <div>
                                    <label className="text-xs text-slate-500 block mb-1">Data</label>
                                    <input type="date" value={advanceDate} onChange={e => setAdvanceDate(e.target.value)}
                                        className="glass-input w-full px-3 py-2 rounded-xl text-sm" required />
                                </div>
                            </div>
                            <textarea value={advanceNotes} onChange={e => setAdvanceNotes(e.target.value)}
                                className="glass-input w-full px-3 py-2 rounded-xl text-sm resize-none" rows={2} placeholder="Note..." />
                            <button type="submit" className="w-full py-2 rounded-xl font-bold text-white text-sm"
                                style={{ background: 'linear-gradient(135deg,#10b981,#059669)' }}>
                                + Aggiungi Anticipo
                            </button>
                        </form>
                    )}

                    <div className="space-y-2 max-h-72 overflow-y-auto">
                        {advances.length > 0 ? advances.map(adv => (
                            <div key={adv.id} className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center justify-between">
                                <div>
                                    <p className="text-xl font-bold text-emerald-600">{fmtCurrency(adv.amount)}</p>
                                    <p className="text-xs text-slate-400">{fmtDate(adv.date)}</p>
                                    {adv.notes && <p className="text-xs text-slate-500 mt-1">{adv.notes}</p>}
                                </div>
                                {isAdmin && (
                                    <button onClick={() => handleDeleteAdvance(adv.id)}
                                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">🗑️</button>
                                )}
                            </div>
                        )) : (
                            <div className="text-center py-8">
                                <div className="text-4xl mb-2">💶</div>
                                <p className="text-slate-400 text-sm">Nessun anticipo registrato</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Permessi */}
                <div className="glass-panel rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-slate-800 flex items-center gap-2">🏖️ Permessi Futuri</h2>
                        <span className="text-lg font-bold text-blue-600">{leaves.length}</span>
                    </div>

                    {isAdmin && (
                        <form onSubmit={handleAddLeave} className="mb-4 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Aggiungi Permesso</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs text-slate-500 block mb-1">Data Inizio</label>
                                    <input type="date" value={leaveStartDate} onChange={e => setLeaveStartDate(e.target.value)}
                                        className="glass-input w-full px-3 py-2 rounded-xl text-sm" required />
                                </div>
                                <div>
                                    <label className="text-xs text-slate-500 block mb-1">Data Fine (opzionale)</label>
                                    <input type="date" value={leaveEndDate} onChange={e => setLeaveEndDate(e.target.value)}
                                        className="glass-input w-full px-3 py-2 rounded-xl text-sm" />
                                </div>
                            </div>
                            <button type="submit" className="w-full py-2 rounded-xl font-bold text-white text-sm glass-button">
                                + Aggiungi Permesso
                            </button>
                        </form>
                    )}

                    <div className="space-y-2 max-h-72 overflow-y-auto">
                        {leaves.length > 0 ? leaves.map(leave => {
                            const days = leave.endDate
                                ? Math.ceil((new Date(leave.endDate).getTime() - new Date(leave.startDate).getTime()) / 86400000) + 1
                                : 1;
                            return (
                                <div key={leave.id} className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 rounded-xl text-xl">🏖️</div>
                                        <div>
                                            <p className="font-semibold text-slate-700 text-sm">
                                                {fmtDate(leave.startDate)}{leave.endDate ? ` – ${fmtDate(leave.endDate)}` : ''}
                                            </p>
                                            <p className="text-xs text-slate-400">{days} {days === 1 ? 'giorno' : 'giorni'}</p>
                                        </div>
                                    </div>
                                    {isAdmin && (
                                        <button onClick={() => handleDeleteLeave(leave.id)}
                                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">🗑️</button>
                                    )}
                                </div>
                            );
                        }) : (
                            <div className="text-center py-8">
                                <div className="text-4xl mb-2">🏖️</div>
                                <p className="text-slate-400 text-sm">Nessun permesso registrato</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Sezione richieste (solo dipendente): permesso o cambio turno */}
            {!isAdmin && (
                <div className="glass-panel rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-4 p-1 bg-slate-100 rounded-xl w-fit">
                        <button type="button" onClick={() => setActiveRequestTab('permesso')}
                            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-colors ${activeRequestTab === 'permesso' ? 'bg-white text-slate-800 shadow' : 'text-slate-500'}`}>
                            📤 Permesso
                        </button>
                        <button type="button" onClick={() => setActiveRequestTab('turno')}
                            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-colors ${activeRequestTab === 'turno' ? 'bg-white text-slate-800 shadow' : 'text-slate-500'}`}>
                            🔄 Cambio Turno
                        </button>
                    </div>

                    {activeRequestTab === 'permesso' && (
                    <>
                    <form onSubmit={handleSendRequest} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 mb-5">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs text-slate-500 block mb-1">Data Inizio *</label>
                                <input type="date" value={reqStartDate} onChange={e => setReqStartDate(e.target.value)}
                                    className="glass-input w-full px-3 py-2 rounded-xl text-sm" required />
                            </div>
                            <div>
                                <label className="text-xs text-slate-500 block mb-1">Data Fine (opzionale)</label>
                                <input type="date" value={reqEndDate} onChange={e => setReqEndDate(e.target.value)}
                                    className="glass-input w-full px-3 py-2 rounded-xl text-sm" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-slate-500 block mb-1">Nota / Motivo (opzionale)</label>
                            <textarea value={reqNotes} onChange={e => setReqNotes(e.target.value)}
                                className="glass-input w-full px-3 py-2 rounded-xl text-sm resize-none" rows={2}
                                placeholder="es. Visita medica, impegno familiare..." />
                        </div>
                        {reqSuccess && (
                            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2 text-emerald-700 text-sm text-center font-semibold">
                                ✅ Richiesta inviata con successo!
                            </div>
                        )}
                        <button type="submit" disabled={reqSending || !reqStartDate}
                            className="w-full py-2.5 rounded-xl font-bold text-white text-sm glass-button disabled:opacity-50">
                            {reqSending ? 'Invio...' : '📤 Invia Richiesta'}
                        </button>
                    </form>

                    {/* Lista richieste proprie */}
                    {leaveRequests.length > 0 && (
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Le tue richieste</p>
                            {leaveRequests.map(req => {
                                const statusStyle =
                                    req.status === 'approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                    req.status === 'rejected' ? 'bg-red-50 text-red-600 border-red-200' :
                                    'bg-amber-50 text-amber-700 border-amber-200';
                                const statusLabel =
                                    req.status === 'approved' ? '✅ Approvato' :
                                    req.status === 'rejected' ? '❌ Rifiutato' : '⏳ In attesa';
                                const days = req.endDate
                                    ? Math.ceil((new Date(req.endDate).getTime() - new Date(req.startDate).getTime()) / 86400000) + 1
                                    : 1;
                                return (
                                    <div key={req.id} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <p className="font-semibold text-slate-700 text-sm">
                                                    {fmtDate(req.startDate)}{req.endDate ? ` – ${fmtDate(req.endDate)}` : ''}
                                                    <span className="text-slate-400 ml-1">({days}gg)</span>
                                                </p>
                                                {req.notes && <p className="text-xs text-slate-500 mt-0.5">{req.notes}</p>}
                                                <p className="text-xs text-slate-400 mt-0.5">
                                                    Inviata {new Date(req.requestedAt).toLocaleDateString('it-IT')}
                                                </p>
                                            </div>
                                            <span className={`text-xs font-bold px-2 py-1 rounded-full border flex-shrink-0 ${statusStyle}`}>
                                                {statusLabel}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    </>
                    )}

                    {activeRequestTab === 'turno' && (
                    <>
                    <form onSubmit={handleSendSwapRequest} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 mb-5">
                        <div>
                            <label className="text-xs text-slate-500 block mb-1">Il tuo turno da cedere *</label>
                            <select value={swapMyShiftId} onChange={e => setSwapMyShiftId(e.target.value)}
                                className="glass-input w-full px-3 py-2 rounded-xl text-sm" required>
                                <option value="">Seleziona un turno...</option>
                                {myShifts.map(s => (
                                    <option key={s.id} value={s.id}>{fmtAssignedShift(s.date, s.startTime, s.endTime)}</option>
                                ))}
                            </select>
                            {myShifts.length === 0 && (
                                <p className="text-xs text-slate-400 mt-1">Non hai turni futuri da cedere.</p>
                            )}
                        </div>
                        <div>
                            <label className="text-xs text-slate-500 block mb-1">Collega *</label>
                            <select value={swapColleagueId}
                                onChange={e => { setSwapColleagueId(e.target.value); setSwapColleagueShiftId(''); }}
                                className="glass-input w-full px-3 py-2 rounded-xl text-sm" required>
                                <option value="">Seleziona un collega...</option>
                                {colleagues.map(c => (
                                    <option key={c.id} value={c.id}>{c.name} {c.surname}</option>
                                ))}
                            </select>
                        </div>
                        {swapColleagueId && (
                            <div>
                                <label className="text-xs text-slate-500 block mb-1">Turno del collega da ricevere *</label>
                                <select value={swapColleagueShiftId} onChange={e => setSwapColleagueShiftId(e.target.value)}
                                    className="glass-input w-full px-3 py-2 rounded-xl text-sm" required>
                                    <option value="">Seleziona un turno...</option>
                                    {colleagueShifts.map(s => (
                                        <option key={s.id} value={s.id}>{fmtAssignedShift(s.date, s.startTime, s.endTime)}</option>
                                    ))}
                                </select>
                                {colleagueShifts.length === 0 && (
                                    <p className="text-xs text-slate-400 mt-1">Il collega non ha turni futuri.</p>
                                )}
                            </div>
                        )}
                        {swapSuccess && (
                            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2 text-emerald-700 text-sm text-center font-semibold">
                                ✅ Richiesta di cambio turno inviata!
                            </div>
                        )}
                        <button type="submit" disabled={swapSending || !swapMyShiftId || !swapColleagueId || !swapColleagueShiftId}
                            className="w-full py-2.5 rounded-xl font-bold text-white text-sm glass-button disabled:opacity-50">
                            {swapSending ? 'Invio...' : '🔄 Invia Richiesta di Cambio'}
                        </button>
                    </form>

                    {/* Lista richieste cambio turno proprie */}
                    {swapRequests.length > 0 && (
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Le tue richieste di cambio</p>
                            {swapRequests.map(req => {
                                const statusStyle =
                                    req.status === 'approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                    req.status === 'rejected' ? 'bg-red-50 text-red-600 border-red-200' :
                                    'bg-amber-50 text-amber-700 border-amber-200';
                                const statusLabel =
                                    req.status === 'approved' ? '✅ Approvato' :
                                    req.status === 'rejected' ? '❌ Rifiutato' : '⏳ In attesa';
                                const isRequester = req.requesterId === selectedUser.id;
                                const otherName = isRequester ? req.targetUserName : req.requesterName;
                                const mine = isRequester
                                    ? fmtAssignedShift(req.requesterShiftDate, req.requesterShiftStart, req.requesterShiftEnd)
                                    : fmtAssignedShift(req.targetShiftDate, req.targetShiftStart, req.targetShiftEnd);
                                const other = isRequester
                                    ? fmtAssignedShift(req.targetShiftDate, req.targetShiftStart, req.targetShiftEnd)
                                    : fmtAssignedShift(req.requesterShiftDate, req.requesterShiftStart, req.requesterShiftEnd);
                                const canReply = !isRequester && req.status === 'pending';
                                return (
                                    <div key={req.id} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <p className="font-semibold text-slate-700 text-sm">
                                                    {mine} ↔ {other}
                                                </p>
                                                <p className="text-xs text-slate-500 mt-0.5">
                                                    {isRequester ? `Con ${otherName}` : `${otherName} ti propone lo scambio`}
                                                </p>
                                                <p className="text-xs text-slate-400 mt-0.5">
                                                    Inviata {new Date(req.requestedAt).toLocaleDateString('it-IT')}
                                                </p>
                                            </div>
                                            {!canReply && (
                                                <span className={`text-xs font-bold px-2 py-1 rounded-full border flex-shrink-0 ${statusStyle}`}>
                                                    {statusLabel}
                                                </span>
                                            )}
                                        </div>
                                        {canReply && (
                                            <div className="flex items-center gap-2 mt-3">
                                                <button onClick={() => handleAcceptSwap(req)} disabled={swapReplyingId === req.id}
                                                    className="flex-1 py-2 rounded-lg text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50">
                                                    ✅ Accetta
                                                </button>
                                                <button onClick={() => handleRejectSwap(req)} disabled={swapReplyingId === req.id}
                                                    className="flex-1 py-2 rounded-lg text-xs font-bold text-white bg-red-500 hover:bg-red-600 disabled:opacity-50">
                                                    ❌ Rifiuta
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    </>
                    )}
                </div>
            )}
        </div>
    );
};

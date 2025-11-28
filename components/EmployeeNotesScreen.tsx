import React, { useState, useEffect } from 'react';
import type { User, SalaryAdvance, FutureLeave } from '../types';
import { getSalaryAdvances, addSalaryAdvance, deleteSalaryAdvance, getFutureLeaves, addFutureLeave, deleteFutureLeave } from '../services/dbService';
import { EuroIcon, CalendarIcon, TrashIcon, PlusIcon, FileTextIcon } from './icons';

interface EmployeeNotesScreenProps {
    selectedUser: User; // The user whose notes we're viewing
    isAdmin: boolean;
}

export const EmployeeNotesScreen: React.FC<EmployeeNotesScreenProps> = ({ selectedUser, isAdmin }) => {
    const [advances, setAdvances] = useState<SalaryAdvance[]>([]);
    const [leaves, setLeaves] = useState<FutureLeave[]>([]);
    const [loading, setLoading] = useState(true);

    // Form states for advances
    const [advanceAmount, setAdvanceAmount] = useState('');
    const [advanceDate, setAdvanceDate] = useState('');
    const [advanceNotes, setAdvanceNotes] = useState('');

    // Form states for leaves
    const [leaveStartDate, setLeaveStartDate] = useState('');
    const [leaveEndDate, setLeaveEndDate] = useState('');

    useEffect(() => {
        loadData();
    }, [selectedUser.id]);

    const loadData = async () => {
        setLoading(true);
        try {
            const [advancesData, leavesData] = await Promise.all([
                getSalaryAdvances(selectedUser.id),
                getFutureLeaves(selectedUser.id)
            ]);
            setAdvances(advancesData);
            setLeaves(leavesData);
        } catch (error) {
            console.error('Error loading employee notes:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddAdvance = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!advanceAmount || !advanceDate) return;

        const newAdvance: SalaryAdvance = {
            id: `advance_${Date.now()}`,
            userId: selectedUser.id,
            amount: parseFloat(advanceAmount),
            date: new Date(advanceDate).toISOString(),
            notes: advanceNotes,
            createdAt: new Date().toISOString()
        };

        try {
            await addSalaryAdvance(selectedUser.id, newAdvance);
            setAdvances(prev => [newAdvance, ...prev]);
            setAdvanceAmount('');
            setAdvanceDate('');
            setAdvanceNotes('');
        } catch (error) {
            console.error('Error adding advance:', error);
            alert('Errore durante l\'aggiunta dell\'anticipo');
        }
    };

    const handleDeleteAdvance = async (advanceId: string) => {
        if (!confirm('Sei sicuro di voler eliminare questo anticipo?')) return;

        try {
            await deleteSalaryAdvance(selectedUser.id, advanceId);
            setAdvances(prev => prev.filter(a => a.id !== advanceId));
        } catch (error) {
            console.error('Error deleting advance:', error);
            alert('Errore durante l\'eliminazione dell\'anticipo');
        }
    };

    const handleAddLeave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!leaveStartDate) return;

        const newLeave: FutureLeave = {
            id: `leave_${Date.now()}`,
            userId: selectedUser.id,
            startDate: leaveStartDate,
            endDate: leaveEndDate || undefined,
            createdAt: new Date().toISOString()
        };

        try {
            await addFutureLeave(selectedUser.id, newLeave);
            setLeaves(prev => [...prev, newLeave].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()));
            setLeaveStartDate('');
            setLeaveEndDate('');
        } catch (error) {
            console.error('Error adding leave:', error);
            alert('Errore durante l\'aggiunta del permesso');
        }
    };

    const handleDeleteLeave = async (leaveId: string) => {
        if (!confirm('Sei sicuro di voler eliminare questo permesso?')) return;

        try {
            await deleteFutureLeave(selectedUser.id, leaveId);
            setLeaves(prev => prev.filter(l => l.id !== leaveId));
        } catch (error) {
            console.error('Error deleting leave:', error);
            alert('Errore durante l\'eliminazione del permesso');
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(amount);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const totalAdvances = advances.reduce((sum, adv) => sum + adv.amount, 0);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <p className="text-slate-400 animate-pulse">Caricamento...</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-white mb-2">Note e Richieste</h1>
                <p className="text-slate-400">
                    {isAdmin ? `Gestione note per ${selectedUser.name} ${selectedUser.surname}` : 'Le tue note e richieste'}
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Salary Advances Section */}
                <div className="glass-panel p-6 rounded-3xl">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <EuroIcon className="text-emerald-400" />
                            Anticipi Sullo Stipendio
                        </h2>
                        <div className="text-right">
                            <p className="text-xs text-slate-500">Totale</p>
                            <p className="text-lg font-bold text-emerald-400">{formatCurrency(totalAdvances)}</p>
                        </div>
                    </div>

                    {isAdmin && (
                        <form onSubmit={handleAddAdvance} className="mb-6 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                            <p className="text-sm font-medium text-slate-300 mb-3">Aggiungi Anticipo</p>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div>
                                    <label className="text-xs text-slate-400 block mb-1">Importo (€)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={advanceAmount}
                                        onChange={(e) => setAdvanceAmount(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                                        placeholder="0.00"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-slate-400 block mb-1">Data</label>
                                    <input
                                        type="date"
                                        value={advanceDate}
                                        onChange={(e) => setAdvanceDate(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="text-xs text-slate-400 block mb-1">Note</label>
                                <textarea
                                    value={advanceNotes}
                                    onChange={(e) => setAdvanceNotes(e.target.value)}
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500 resize-none"
                                    rows={2}
                                    placeholder="Note aggiuntive..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                <PlusIcon className="w-4 h-4" />
                                Aggiungi Anticipo
                            </button>
                        </form>
                    )}

                    <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                        {advances.length > 0 ? (
                            advances.map(advance => (
                                <div key={advance.id} className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <p className="text-2xl font-bold text-emerald-400">{formatCurrency(advance.amount)}</p>
                                            <p className="text-xs text-slate-500">{formatDate(advance.date)}</p>
                                        </div>
                                        {isAdmin && (
                                            <button
                                                onClick={() => handleDeleteAdvance(advance.id)}
                                                className="p-2 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
                                            >
                                                <TrashIcon className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>
                                    {advance.notes && (
                                        <div className="mt-2 p-2 bg-slate-900/50 rounded-lg">
                                            <p className="text-xs text-slate-400 flex items-start gap-2">
                                                <FileTextIcon className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                                {advance.notes}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <EuroIcon className="w-12 h-12 text-slate-700 mx-auto mb-2" />
                                <p className="text-slate-500 text-sm">Nessun anticipo registrato</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Future Leaves Section */}
                <div className="glass-panel p-6 rounded-3xl">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <CalendarIcon className="text-indigo-400" />
                            Permessi Futuri
                        </h2>
                        <div className="text-right">
                            <p className="text-xs text-slate-500">Totale</p>
                            <p className="text-lg font-bold text-indigo-400">{leaves.length}</p>
                        </div>
                    </div>

                    {isAdmin && (
                        <form onSubmit={handleAddLeave} className="mb-6 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                            <p className="text-sm font-medium text-slate-300 mb-3">Aggiungi Permesso</p>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div>
                                    <label className="text-xs text-slate-400 block mb-1">Data Inizio</label>
                                    <input
                                        type="date"
                                        value={leaveStartDate}
                                        onChange={(e) => setLeaveStartDate(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-slate-400 block mb-1">Data Fine (opzionale)</label>
                                    <input
                                        type="date"
                                        value={leaveEndDate}
                                        onChange={(e) => setLeaveEndDate(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                <PlusIcon className="w-4 h-4" />
                                Aggiungi Permesso
                            </button>
                        </form>
                    )}

                    <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                        {leaves.length > 0 ? (
                            leaves.map(leave => (
                                <div key={leave.id} className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-indigo-500/20 rounded-lg">
                                            <CalendarIcon className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-200">
                                                {formatDate(leave.startDate)}
                                                {leave.endDate && ` - ${formatDate(leave.endDate)}`}
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                {leave.endDate
                                                    ? `${Math.ceil((new Date(leave.endDate).getTime() - new Date(leave.startDate).getTime()) / (1000 * 60 * 60 * 24)) + 1} giorni`
                                                    : '1 giorno'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    {isAdmin && (
                                        <button
                                            onClick={() => handleDeleteLeave(leave.id)}
                                            className="p-2 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
                                        >
                                            <TrashIcon className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <CalendarIcon className="w-12 h-12 text-slate-700 mx-auto mb-2" />
                                <p className="text-slate-500 text-sm">Nessun permesso registrato</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

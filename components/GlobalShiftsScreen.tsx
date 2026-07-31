import React, { useEffect, useState, useMemo } from 'react';
import { WeeklyCalendar } from './WeeklyCalendar';
import { EditShiftModal } from './EditShiftModal';
import { getShifts, addShift, getPublicUsers, getAllShiftSwapRequests, approveShiftSwap, rejectShiftSwap, syncPublicUserRoles } from '../services/dbService';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import type { Shift, AssignedShift, User, ShiftSwapRequest } from '../types';

interface GlobalShiftsScreenProps {
    assignedShifts: AssignedShift[];
    user: User;
    onShiftsSwapped?: (shifts: AssignedShift[]) => void;
}

export const GlobalShiftsScreen: React.FC<GlobalShiftsScreenProps> = ({ assignedShifts, user, onShiftsSwapped }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [allShifts, setAllShifts] = useState<(Shift & { userId: string })[]>([]);

    const [swapRequests, setSwapRequests] = useState<ShiftSwapRequest[]>([]);
    const [swapActionId, setSwapActionId] = useState<string | null>(null);

    const [weekStart, setWeekStart] = useState(() => {
        const now = new Date();
        const day = now.getDay();
        const monday = new Date(now);
        monday.setDate(now.getDate() - day + (day === 0 ? -6 : 1));
        monday.setHours(0, 0, 0, 0);
        return monday;
    });

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedShift, setSelectedShift] = useState<Shift | null>(null);
    const [selectedUserForEdit, setSelectedUserForEdit] = useState<User | null>(null);

    useEffect(() => {
        const load = async () => {
            // getPublicUsers è accessibile a tutti gli utenti autenticati
            // (getAllUsers richiede permessi admin e fallirebbe per i dipendenti)
            const us = await getPublicUsers();
            setUsers(us as unknown as User[]);
            const arrays = await Promise.all(
                us.map(async u => {
                    try {
                        const s = await getShifts(u.id);
                        return s.map(sh => ({ ...sh, userId: u.id }));
                    } catch {
                        return [];
                    }
                })
            );
            setAllShifts(arrays.flat());
        };
        load();
    }, []);

    useEffect(() => {
        if (!user.isAdmin) return;
        getAllShiftSwapRequests().then(reqs => setSwapRequests(reqs.filter(r => r.status === 'pending')));
        // Self-heal: allinea eventuali publicUsers con ruolo disallineato rispetto a users
        syncPublicUserRoles().catch(() => {});
    }, [user.isAdmin]);

    const handleApproveSwap = async (req: ShiftSwapRequest) => {
        setSwapActionId(req.id);
        try {
            await approveShiftSwap(req);
            setSwapRequests(prev => prev.filter(r => r.id !== req.id));
            // Anteprima ottimistica locale: lo scambio effettivo sul roster viene applicato
            // lato server dalla Cloud Function onShiftSwapRequestUpdated pochi istanti dopo.
            const requesterIdx = assignedShifts.findIndex(s => s.id === req.requesterShiftId);
            const targetIdx = assignedShifts.findIndex(s => s.id === req.targetShiftId);
            if (requesterIdx !== -1 && targetIdx !== -1) {
                const updated = [...assignedShifts];
                updated[requesterIdx] = { ...updated[requesterIdx], userId: req.targetUserId };
                updated[targetIdx] = { ...updated[targetIdx], userId: req.requesterId };
                onShiftsSwapped?.(updated);
            }
        } catch (err: any) {
            alert(err?.message || 'Errore durante l\'approvazione dello scambio.');
        } finally {
            setSwapActionId(null);
        }
    };

    const handleRejectSwap = async (req: ShiftSwapRequest) => {
        setSwapActionId(req.id);
        try {
            await rejectShiftSwap(req);
            setSwapRequests(prev => prev.filter(r => r.id !== req.id));
        } finally {
            setSwapActionId(null);
        }
    };

    const fmtSwapShift = (date: string, start: string, end?: string) => {
        const dateLabel = new Date(`${date}T00:00:00`).toLocaleDateString('it-IT', { weekday: 'short', day: '2-digit', month: '2-digit' });
        return `${dateLabel} ${start}${end ? `–${end}` : ''}`;
    };

    const weekDates = useMemo(() => {
        return Array.from({ length: 7 }, (_, i) => {
            const d = new Date(weekStart);
            d.setDate(d.getDate() + i);
            return d;
        });
    }, [weekStart]);

    const changeWeek = (amount: number) => {
        setWeekStart(prev => {
            const d = new Date(prev);
            d.setDate(d.getDate() + amount * 7);
            return d;
        });
    };

    const handleShiftClick = (user: User, actualShift?: Shift, assignedShift?: AssignedShift) => {
        setSelectedUserForEdit(user);
        if (actualShift) {
            setSelectedShift(actualShift);
        } else if (assignedShift) {
            const [year, month, day] = assignedShift.date.split('-').map(Number);
            const [hours, minutes] = assignedShift.startTime.split(':').map(Number);
            setSelectedShift({
                id: `shift_${Date.now()}`,
                startTime: new Date(year, month - 1, day, hours, minutes).toISOString(),
                endTime: null,
                type: 'standard',
            });
        }
        setIsEditModalOpen(true);
    };

    const handleSaveShift = async (updatedShift: Shift) => {
        if (!selectedUserForEdit) return;
        try {
            await addShift(selectedUserForEdit.id, updatedShift);
            setAllShifts(prev => [
                ...prev.filter(s => s.id !== updatedShift.id),
                { ...updatedShift, userId: selectedUserForEdit.id }
            ]);
            setIsEditModalOpen(false);
            setSelectedShift(null);
            setSelectedUserForEdit(null);
        } catch {
            alert('Errore durante il salvataggio del turno.');
        }
    };

    return (
        <div className="space-y-5">
            {/* Blue header con navigazione settimana integrata */}
            <div className="screen-header rounded-b-3xl">
                <div className="flex items-start justify-between mb-5">
                    <div>
                        <h1 className="text-2xl font-bold">📅 Panoramica Turni</h1>
                        {user.isAdmin && (
                            <p className="text-blue-200 text-sm mt-1">Clicca su un turno per modificarlo</p>
                        )}
                    </div>
                    <span className="text-xs bg-white/15 text-white font-semibold px-3 py-1 rounded-full">
                        {weekDates[0].getDate()} – {weekDates[6].getDate()} {weekDates[0].toLocaleDateString('it-IT', { month: 'short' })}
                    </span>
                </div>
                <div className="flex items-center justify-between bg-white/15 rounded-2xl px-4 py-3">
                    <button onClick={() => changeWeek(-1)} className="text-white hover:text-blue-200 transition p-1">
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <span className="font-bold text-white capitalize">
                        {weekStart.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
                    </span>
                    <button onClick={() => changeWeek(1)} className="text-white hover:text-blue-200 transition p-1">
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {user.isAdmin && swapRequests.length > 0 && (
                <div className="glass-panel rounded-2xl p-5">
                    <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        🔄 Richieste Cambio Turno
                        <span className="text-xs bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full">{swapRequests.length}</span>
                    </h2>
                    <div className="space-y-2">
                        {swapRequests.map(req => {
                            const requesterPast = new Date(`${req.requesterShiftDate}T${req.requesterShiftStart}`) < new Date();
                            const targetPast = new Date(`${req.targetShiftDate}T${req.targetShiftStart}`) < new Date();
                            return (
                                <div key={req.id} className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-3 flex-wrap">
                                    <div>
                                        <p className="font-semibold text-slate-700 text-sm">
                                            {req.requesterName}{' '}
                                            <span className={requesterPast ? 'text-red-500 line-through' : ''}>{fmtSwapShift(req.requesterShiftDate, req.requesterShiftStart, req.requesterShiftEnd)}</span>
                                            {' '}↔{' '}
                                            {req.targetUserName}{' '}
                                            <span className={targetPast ? 'text-red-500 line-through' : ''}>{fmtSwapShift(req.targetShiftDate, req.targetShiftStart, req.targetShiftEnd)}</span>
                                        </p>
                                        {(requesterPast || targetPast) && (
                                            <p className="text-xs text-red-500 mt-0.5">⚠️ Uno dei due turni è già passato</p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => handleApproveSwap(req)} disabled={swapActionId === req.id}
                                            className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50">
                                            ✅ Approva
                                        </button>
                                        <button onClick={() => handleRejectSwap(req)} disabled={swapActionId === req.id}
                                            className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-red-500 hover:bg-red-600 disabled:opacity-50">
                                            ❌ Rifiuta
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            <WeeklyCalendar
                shifts={allShifts}
                assignedShifts={assignedShifts}
                users={users}
                onShiftClick={user.isAdmin ? handleShiftClick : undefined}
                weekDates={weekDates}
                onChangeWeek={changeWeek}
            />

            {selectedShift && (
                <EditShiftModal
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={handleSaveShift}
                    shift={selectedShift}
                    userName={selectedUserForEdit ? `${selectedUserForEdit.name} ${selectedUserForEdit.surname}` : undefined}
                />
            )}
        </div>
    );
};

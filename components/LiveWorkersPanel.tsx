import React, { useState, useEffect } from 'react';
import type { User, Shift, AssignedShift, UserRole } from '../types';
import { ROLE_COLORS } from '../types';
import { ClockIcon } from './icons';
import { formatTime } from '../utils/date';
import { onActiveShifts, getShifts, getAllUsers, addShift } from '../services/dbService';
import { WeeklyCalendar } from './WeeklyCalendar';
import { EditShiftModal } from './EditShiftModal';

interface LiveWorkersPanelProps {
    assignedShifts: AssignedShift[];
}

interface ActiveWorker { user: User; shift: Shift; }

export const LiveWorkersPanel: React.FC<LiveWorkersPanelProps> = ({ assignedShifts }) => {
    const [activeWorkers, setActiveWorkers] = useState<ActiveWorker[]>([]);
    const [currentTime, setCurrentTime] = useState(new Date());

    // Panoramica turni state
    const [users, setUsers] = useState<User[]>([]);
    const [allShifts, setAllShifts] = useState<(Shift & { userId: string })[]>([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedShift, setSelectedShift] = useState<Shift | null>(null);
    const [selectedUserForEdit, setSelectedUserForEdit] = useState<User | null>(null);

    useEffect(() => {
        const unsub = onActiveShifts(workers => {
            setActiveWorkers([...workers].sort((a, b) =>
                new Date(b.shift.startTime).getTime() - new Date(a.shift.startTime).getTime()
            ));
        });
        return () => unsub();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const load = async () => {
            const us = await getAllUsers();
            setUsers(us);
            const arrays = await Promise.all(us.map(async u => {
                const s = await getShifts(u.id);
                return s.map(sh => ({ ...sh, userId: u.id }));
            }));
            setAllShifts(arrays.flat());
        };
        load();
    }, []);

    const calculateDuration = (startTime: string): string => {
        const diff = currentTime.getTime() - new Date(startTime).getTime();
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        return `${h}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
    };

    const getShiftTypeLabel = (shift: Shift): string | null => {
        const labels: Record<string, string> = {
            standard: 'Standard', cassa: 'Cassa',
            macchina_propria: 'Macchina Propria', macchina_pizzeria: 'Macchina Pizzeria'
        };
        return shift.type ? labels[shift.type] ?? null : null;
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
            {/* Blue header */}
            <div className="screen-header rounded-b-3xl">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">📡 Live</h1>
                        <p className="text-blue-200 text-sm mt-1">Dipendenti in servizio ora</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-full">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-white text-sm font-semibold">
                            {activeWorkers.length} {activeWorkers.length === 1 ? 'persona' : 'persone'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Active workers */}
            {activeWorkers.length === 0 ? (
                <div className="glass-panel rounded-2xl py-12 text-center">
                    <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <ClockIcon className="w-7 h-7 text-slate-400" />
                    </div>
                    <p className="font-semibold text-slate-600">Nessuno in servizio</p>
                    <p className="text-slate-400 text-sm mt-1">Al momento non ci sono dipendenti al lavoro.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {activeWorkers.map(({ user, shift }) => {
                        const label = getShiftTypeLabel(shift);
                        return (
                            <div key={user.id} className="glass-panel rounded-2xl p-5 border-l-4 border-emerald-500">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
                                        {user.name.charAt(0)}{user.surname.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <p className="font-bold text-slate-800">{user.name} {user.surname}</p>
                                            {user.role && (() => {
                                                const c = ROLE_COLORS[user.role as UserRole];
                                                return c ? <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${c.bg} ${c.text} ${c.border}`}>{user.role}</span> : null;
                                            })()}
                                        </div>
                                        <div className="flex items-center gap-1 mt-0.5">
                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                            <span className="text-emerald-600 text-xs font-semibold">In Servizio</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Iniziato alle</span>
                                        <span className="font-semibold text-slate-700">{formatTime(new Date(shift.startTime))}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Durata</span>
                                        <span className="font-mono font-bold text-emerald-600">{calculateDuration(shift.startTime)}</span>
                                    </div>
                                    {label && (
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Tipo</span>
                                            <span className="bg-amber-50 text-amber-700 text-xs px-2 py-0.5 rounded-full font-semibold border border-amber-200">{label}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Weekly calendar */}
            <div className="glass-panel rounded-2xl p-5">
                <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="text-blue-600">📅</span>
                    Turni della Settimana
                </h2>
                <WeeklyCalendar
                    shifts={allShifts}
                    assignedShifts={assignedShifts}
                    users={users}
                    onShiftClick={handleShiftClick}
                />
            </div>

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

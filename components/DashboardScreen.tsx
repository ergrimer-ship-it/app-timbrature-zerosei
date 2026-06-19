import React, { useState, useEffect } from 'react';
import type { User, Shift, AssignedShift, ShiftType } from '../types';
import { Calendar } from './Calendar';
import { formatTime, formatDuration, isSameDay, formatDate } from '../utils/date';
import { UserShiftsView } from './UserShiftsView';

interface DashboardScreenProps {
    user: User;
    shifts: Shift[];
    activeShift: Shift | null;
    assignedShifts: AssignedShift[];
    onLogout: () => void;
    onClock: (shiftType: ShiftType) => void;
}

const SHIFT_LABELS: Record<ShiftType, string> = {
    standard: 'Standard', cassa: 'Cassa',
    macchina_propria: 'Macchina Propria', macchina_pizzeria: 'Macchina Pizzeria'
};

function daysUntil(dateStr: string): number {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const target = new Date(dateStr.replace(/-/g, '/')); target.setHours(0, 0, 0, 0);
    return Math.round((target.getTime() - today.getTime()) / 86400000);
}

const ShiftListItem: React.FC<{ shift: Shift }> = ({ shift }) => {
    const start = new Date(shift.startTime);
    const end = shift.endTime ? new Date(shift.endTime) : null;
    return (
        <div className="flex justify-between items-center bg-slate-50 border border-slate-200 p-3 rounded-xl">
            <div className="flex items-center gap-3">
                <span className="text-lg">⏱</span>
                <div>
                    <p className="font-semibold text-slate-700 text-sm">
                        <span className="text-blue-700">{formatTime(start)}</span>
                        {' – '}
                        <span className="text-blue-700">{end ? formatTime(end) : '...'}</span>
                    </p>
                    {shift.type && shift.type !== 'standard' && (
                        <span className="text-[10px] bg-amber-50 border border-amber-200 text-amber-600 px-1.5 py-0.5 rounded-full font-semibold">
                            {SHIFT_LABELS[shift.type]}
                        </span>
                    )}
                </div>
            </div>
            <p className="text-xs font-mono bg-slate-100 px-2 py-1 rounded-lg text-slate-500">{formatDuration(start, end)}</p>
        </div>
    );
};

const ShiftTypeOption: React.FC<{ label: string; value: ShiftType; selected: boolean; onChange: () => void }> = ({ label, selected, onChange }) => (
    <label className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all ${
        selected ? 'bg-blue-50 border-blue-400' : 'bg-white border-slate-200 hover:border-blue-300'
    }`}>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected ? 'border-blue-600' : 'border-slate-300'}`}>
            {selected && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
        </div>
        <input type="radio" checked={selected} onChange={onChange} className="hidden" />
        <span className={`ml-3 font-medium text-sm ${selected ? 'text-blue-700' : 'text-slate-600'}`}>{label}</span>
    </label>
);

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ user, shifts, activeShift, assignedShifts, onClock }) => {
    const [selectedShiftType, setSelectedShiftType] = useState<ShiftType | null>(null);
    const [elapsed, setElapsed] = useState('');

    useEffect(() => { if (!activeShift) setSelectedShiftType(null); }, [activeShift]);

    useEffect(() => {
        if (!activeShift) { setElapsed(''); return; }
        const update = () => {
            const diff = Date.now() - new Date(activeShift.startTime).getTime();
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            setElapsed(`${h}h ${m.toString().padStart(2, '0')}m`);
        };
        update();
        const id = setInterval(update, 30000);
        return () => clearInterval(id);
    }, [activeShift]);

    const handleClockClick = () => {
        if (activeShift) onClock(activeShift.type || 'standard');
        else if (selectedShiftType) onClock(selectedShiftType);
    };

    const todayShifts = [...shifts.filter(s => isSameDay(new Date(s.startTime), new Date()))].reverse();

    const upcomingShifts = assignedShifts
        .filter(s => daysUntil(s.date) >= 0)
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(0, 5);

    return (
        <div className="space-y-5">
            {/* Blue header with overlapping white card */}
            <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-5 pt-12 pb-16 rounded-b-3xl -mx-4 lg:-mx-8">
                    <div className="flex items-center justify-between mb-1">
                        <div>
                            <p className="text-blue-200 text-sm">Bentornato,</p>
                            <h1 className="text-2xl font-bold text-white">{user.name} {user.surname}</h1>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center font-bold text-white text-lg">
                            {user.name.charAt(0)}{user.surname.charAt(0)}
                        </div>
                    </div>
                </div>

                {/* Overlapping white card */}
                <div className="mx-2 -mt-10 bg-white rounded-2xl shadow-lg p-4 flex justify-between items-center">
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                            {activeShift ? 'Turno iniziato' : 'Oggi'}
                        </p>
                        <p className="text-2xl font-bold text-blue-700">
                            {activeShift ? formatTime(new Date(activeShift.startTime)) : formatDate(new Date())}
                        </p>
                        {activeShift?.type && (
                            <p className="text-xs text-slate-500 mt-0.5">{SHIFT_LABELS[activeShift.type]}</p>
                        )}
                    </div>
                    <div className="w-px bg-slate-200 self-stretch mx-2" />
                    <div className="text-right">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                            {activeShift ? 'Ore lavorate' : 'Data'}
                        </p>
                        <p className="text-2xl font-bold text-blue-700">
                            {activeShift ? (elapsed || '...') : new Date().toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit' })}
                        </p>
                        {activeShift && (
                            <div className="inline-flex items-center gap-1 mt-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                ATTIVO
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-1 flex flex-col gap-5">
                    {/* Clock panel */}
                    <div className="glass-panel rounded-2xl p-5">
                        {!activeShift && (
                            <div className="space-y-2 mb-5">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Tipo di turno</p>
                                {(Object.keys(SHIFT_LABELS) as ShiftType[]).map(t => (
                                    <ShiftTypeOption key={t} label={SHIFT_LABELS[t]} value={t}
                                        selected={selectedShiftType === t} onChange={() => setSelectedShiftType(t)} />
                                ))}
                            </div>
                        )}
                        <button onClick={handleClockClick} disabled={!activeShift && !selectedShiftType}
                            className={`w-full flex items-center justify-center gap-3 text-base font-bold py-4 rounded-xl transition-all shadow-lg ${
                                !activeShift && !selectedShiftType
                                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                                    : activeShift
                                        ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-red-200 hover:scale-[1.02]'
                                        : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-200 hover:scale-[1.02]'
                            }`}>
                            {activeShift ? '⏹ Timbra Uscita' : '▶ Timbra Entrata'}
                        </button>
                    </div>

                    {/* Today */}
                    <div className="glass-panel rounded-2xl p-5">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-slate-800">⏱ Oggi</h3>
                            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">{formatDate(new Date())}</span>
                        </div>
                        <div className="flex flex-col gap-2 max-h-52 overflow-y-auto">
                            {activeShift && isSameDay(new Date(activeShift.startTime), new Date()) && <ShiftListItem shift={activeShift} />}
                            {todayShifts.length > 0
                                ? todayShifts.map(s => <ShiftListItem key={s.id} shift={s} />)
                                : !activeShift && <p className="text-slate-400 text-center py-4 text-sm">Nessuna attività oggi.</p>
                            }
                        </div>
                    </div>

                    {/* Upcoming assigned shifts */}
                    <div className="glass-panel rounded-2xl p-5">
                        <h3 className="font-bold text-slate-800 mb-4">📅 Prossimi Turni</h3>
                        <div className="flex flex-col gap-2">
                            {upcomingShifts.length > 0 ? upcomingShifts.map(shift => {
                                const days = daysUntil(shift.date);
                                const d = new Date(shift.date.replace(/-/g, '/'));
                                return (
                                    <div key={shift.id} className="flex items-center justify-between bg-slate-50 border border-slate-200 p-3 rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-50 rounded-xl text-lg">📅</div>
                                            <div>
                                                <p className="font-semibold text-slate-700 text-sm capitalize">
                                                    {d.toLocaleDateString('it-IT', { weekday: 'short', day: 'numeric', month: 'short' })}
                                                </p>
                                                <p className="text-xs text-blue-600 font-mono">{shift.startTime}{shift.endTime ? ` – ${shift.endTime}` : ''}</p>
                                            </div>
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                                            days === 0 ? 'bg-emerald-100 text-emerald-700'
                                            : days === 1 ? 'bg-amber-100 text-amber-700'
                                            : 'bg-slate-100 text-slate-600'
                                        }`}>
                                            {days === 0 ? 'Oggi' : days === 1 ? 'Domani' : `Fra ${days}gg`}
                                        </span>
                                    </div>
                                );
                            }) : (
                                <p className="text-slate-400 text-sm text-center py-4">Nessun turno programmato.</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="glass-panel rounded-2xl p-5 h-full">
                        <h3 className="font-bold text-slate-800 mb-4">📆 Calendario</h3>
                        <Calendar shifts={shifts} />
                    </div>
                </div>
            </div>

            {/* My shifts view (mobile friendly below calendar) */}
            <div className="glass-panel rounded-2xl p-5 lg:hidden">
                <UserShiftsView assignedShifts={assignedShifts} />
            </div>
        </div>
    );
};

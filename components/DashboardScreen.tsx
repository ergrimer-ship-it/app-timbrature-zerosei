import React, { useState, useEffect } from 'react';
import type { User, Shift, AssignedShift, ShiftType } from '../types';
import { Calendar } from './Calendar';
import { formatTime, formatDuration, isSameDay, formatDate } from '../utils/date';
import { ClockIcon } from './icons';
import { UserShiftsView } from './UserShiftsView';

interface DashboardScreenProps {
    user: User;
    shifts: Shift[];
    activeShift: Shift | null;
    assignedShifts: AssignedShift[];
    onLogout: () => void;
    onClock: (shiftType: ShiftType) => void;
}

const ShiftListItem: React.FC<{ shift: Shift }> = ({ shift }) => {
    const startTime = new Date(shift.startTime);
    const endTime = shift.endTime ? new Date(shift.endTime) : null;
    const labels: Record<ShiftType, string> = {
        standard: 'Standard', cassa: 'Cassa',
        macchina_propria: 'Macchina Propria', macchina_pizzeria: 'Macchina Pizzeria'
    };
    return (
        <div className="flex justify-between items-center bg-slate-50 border border-slate-200 p-3 rounded-xl">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                    <ClockIcon className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                    <p className="font-semibold text-slate-700 text-sm">{formatTime(startTime)} – {endTime ? formatTime(endTime) : '...'}</p>
                    {shift.type && shift.type !== 'standard' && (
                        <span className="text-[10px] bg-amber-50 border border-amber-200 text-amber-600 px-1.5 py-0.5 rounded-full font-medium mt-0.5 inline-block">
                            {labels[shift.type]}
                        </span>
                    )}
                </div>
            </div>
            <p className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">{formatDuration(startTime, endTime)}</p>
        </div>
    );
};

const ShiftTypeOption: React.FC<{ label: string; value: ShiftType; selected: boolean; onChange: () => void; disabled: boolean }> = ({ label, selected, onChange, disabled }) => (
    <label className={`flex items-center p-3 rounded-xl transition-all border cursor-pointer ${
        disabled ? 'cursor-not-allowed bg-slate-50 border-slate-200 text-slate-400'
        : selected ? 'bg-blue-50 border-blue-400'
        : 'bg-white border-slate-200 hover:border-blue-300'
    }`}>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selected ? 'border-blue-600' : 'border-slate-300'}`}>
            {selected && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
        </div>
        <input type="radio" checked={selected} onChange={onChange} disabled={disabled} className="hidden" />
        <span className={`ml-3 font-medium text-sm ${selected ? 'text-blue-700' : 'text-slate-600'}`}>{label}</span>
    </label>
);

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ user, shifts, activeShift, assignedShifts, onClock }) => {
    const [selectedShiftType, setSelectedShiftType] = useState<ShiftType | null>(null);

    const getShiftTypeLabel = (type?: ShiftType): string | null => {
        if (!type) return null;
        const labels: Record<ShiftType, string> = {
            standard: 'Standard', cassa: 'Cassa',
            macchina_propria: 'Macchina Propria', macchina_pizzeria: 'Macchina Pizzeria'
        };
        return labels[type] || null;
    };

    useEffect(() => { if (!activeShift) setSelectedShiftType(null); }, [activeShift]);

    const handleClockClick = () => {
        if (activeShift) onClock(activeShift.type || 'standard');
        else if (selectedShiftType) onClock(selectedShiftType);
    };

    const todayShifts = [...shifts.filter(s => isSameDay(new Date(s.startTime), new Date()))].reverse();

    return (
        <div className="space-y-5">
            {/* Blue header */}
            <div className="screen-header rounded-b-3xl">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-blue-200 text-sm">Bentornato,</p>
                        <h1 className="text-2xl font-bold">{user.name} {user.surname}</h1>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center font-bold text-lg">
                        {user.name.charAt(0)}{user.surname.charAt(0)}
                    </div>
                </div>

                {/* Active shift info card */}
                {activeShift && (
                    <div className="bg-white/15 rounded-2xl p-4 flex justify-between items-center">
                        <div>
                            <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider">Turno iniziato</p>
                            <p className="text-white font-bold text-xl mt-0.5">{formatTime(new Date(activeShift.startTime))}</p>
                            {activeShift.type && (
                                <p className="text-blue-200 text-xs mt-0.5">{getShiftTypeLabel(activeShift.type)}</p>
                            )}
                        </div>
                        <div className="text-right">
                            <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider">Oggi</p>
                            <p className="text-white font-bold text-xl mt-0.5">{formatDate(new Date())}</p>
                            <div className="inline-flex items-center gap-1 mt-1 bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                ATTIVO
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-1 flex flex-col gap-5">
                    {/* Clock Panel */}
                    <div className="glass-panel rounded-2xl p-5">
                        {!activeShift && (
                            <div className="space-y-2 mb-5">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Tipo di turno</p>
                                <ShiftTypeOption label="Standard" value="standard" selected={selectedShiftType === 'standard'} onChange={() => setSelectedShiftType('standard')} disabled={false} />
                                <ShiftTypeOption label="Cassa" value="cassa" selected={selectedShiftType === 'cassa'} onChange={() => setSelectedShiftType('cassa')} disabled={false} />
                                <ShiftTypeOption label="Macchina Propria" value="macchina_propria" selected={selectedShiftType === 'macchina_propria'} onChange={() => setSelectedShiftType('macchina_propria')} disabled={false} />
                                <ShiftTypeOption label="Macchina Pizzeria" value="macchina_pizzeria" selected={selectedShiftType === 'macchina_pizzeria'} onChange={() => setSelectedShiftType('macchina_pizzeria')} disabled={false} />
                            </div>
                        )}
                        <button
                            onClick={handleClockClick}
                            disabled={!activeShift && !selectedShiftType}
                            className={`w-full flex items-center justify-center gap-3 text-base font-bold py-4 px-6 rounded-xl transition-all shadow-lg ${
                                !activeShift && !selectedShiftType
                                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                                    : activeShift
                                        ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-red-200 hover:shadow-red-300 hover:scale-[1.02]'
                                        : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-200 hover:shadow-emerald-300 hover:scale-[1.02]'
                            }`}
                        >
                            <ClockIcon className="w-6 h-6" />
                            {activeShift ? 'Timbra Uscita' : 'Timbra Entrata'}
                        </button>
                    </div>

                    {/* Today */}
                    <div className="glass-panel rounded-2xl p-5">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-slate-800">Oggi</h3>
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

                    {/* My assigned shifts */}
                    <div className="glass-panel rounded-2xl p-5">
                        <UserShiftsView assignedShifts={assignedShifts} />
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="glass-panel rounded-2xl p-5 h-full">
                        <Calendar shifts={shifts} />
                    </div>
                </div>
            </div>
        </div>
    );
};

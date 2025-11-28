


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

    const getShiftTypeLabel = (type?: ShiftType): string | null => {
        if (!type) return null;
        const labels: Record<ShiftType, string> = {
            standard: 'Standard',
            cassa: 'Cassa',
            macchina_propria: 'Macchina Propria',
            macchina_pizzeria: 'Macchina Pizzeria'
        };
        return labels[type] || null;
    };

    return (
        <div className="flex justify-between items-center bg-slate-800/50 border border-slate-700/50 p-3 rounded-xl hover:bg-slate-800/70 transition-colors">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <ClockIcon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                    <p className="font-semibold text-slate-200">{formatTime(startTime)} - {endTime ? formatTime(endTime) : '...'}</p>
                    {shift.type && (
                        <span className="text-[10px] bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded-full font-medium mt-1 inline-block">
                            {getShiftTypeLabel(shift.type)}
                        </span>
                    )}
                </div>
            </div>
            <p className="text-sm font-mono bg-slate-900/50 px-2 py-1 rounded text-slate-400">{formatDuration(startTime, endTime)}</p>
        </div>
    );
};

const ShiftTypeOption: React.FC<{ label: string; value: ShiftType; selected: boolean; onChange: () => void; disabled: boolean }> = ({ label, selected, onChange, disabled }) => (
    <label className={`flex items-center p-3 rounded-xl transition-all border ${disabled
        ? 'cursor-not-allowed bg-slate-900/50 border-slate-800 text-slate-600'
        : selected
            ? 'bg-indigo-500/20 border-indigo-500/50 cursor-pointer'
            : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 cursor-pointer'
        }`}>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selected ? 'border-indigo-500' : 'border-slate-500'
            }`}>
            {selected && <div className="w-3 h-3 rounded-full bg-indigo-500"></div>}
        </div>
        <input
            type="radio"
            checked={selected}
            onChange={onChange}
            disabled={disabled}
            className="hidden"
        />
        <span className={`ml-3 font-medium ${selected ? 'text-indigo-300' : 'text-slate-300'}`}>{label}</span>
    </label>
);

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ user, shifts, activeShift, assignedShifts, onClock }) => {
    const [selectedShiftType, setSelectedShiftType] = useState<ShiftType | null>(null);

    const getShiftTypeLabel = (type?: ShiftType): string | null => {
        if (!type) return null;
        const labels: Record<ShiftType, string> = {
            standard: 'Standard',
            cassa: 'Cassa',
            macchina_propria: 'Macchina Propria',
            macchina_pizzeria: 'Macchina Pizzeria'
        };
        return labels[type] || null;
    };

    useEffect(() => {
        if (!activeShift) {
            setSelectedShiftType(null);
        }
    }, [activeShift]);

    const handleShiftTypeChange = (type: ShiftType) => {
        setSelectedShiftType(type);
    };

    const handleClockClick = () => {
        if (activeShift) {
            onClock(activeShift.type || 'standard');
        } else if (selectedShiftType) {
            onClock(selectedShiftType);
        }
    };

    const todayShifts = shifts.filter(s => isSameDay(new Date(s.startTime), new Date()));
    const reversedTodayShifts = [...todayShifts].reverse();

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Bentornato, {user.name}</h1>
                <p className="text-slate-400">Ecco il riepilogo della tua attività lavorativa.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 flex flex-col gap-8">
                    {/* Clock Panel */}
                    <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-indigo-500/20"></div>
                        <div className="text-center mb-8 relative z-10">
                            {activeShift ? (
                                <>
                                    <p className="text-slate-400 text-sm uppercase tracking-wider font-medium mb-2">Turno in corso</p>
                                    <p className="text-4xl font-bold text-white tracking-tight">{formatTime(new Date(activeShift.startTime))}</p>
                                    <div className="mt-2 flex flex-col items-center gap-2">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 animate-pulse">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                            ATTIVO
                                        </div>
                                        {activeShift.type && (
                                            <span className="text-xs bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full font-medium">
                                                {getShiftTypeLabel(activeShift.type)}
                                            </span>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="text-slate-400 text-sm uppercase tracking-wider font-medium mb-2">Stato attuale</p>
                                    <p className="text-3xl font-bold text-slate-500">Non in servizio</p>
                                </>
                            )}
                        </div>
                        {!activeShift && (
                            <div className="my-6 space-y-3 relative z-10">
                                <p className="text-sm font-medium text-slate-400 mb-3">Seleziona tipo di turno:</p>
                                <ShiftTypeOption
                                    label="Standard"
                                    value="standard"
                                    selected={selectedShiftType === 'standard'}
                                    onChange={() => handleShiftTypeChange('standard')}
                                    disabled={false}
                                />
                                <ShiftTypeOption
                                    label="Cassa"
                                    value="cassa"
                                    selected={selectedShiftType === 'cassa'}
                                    onChange={() => handleShiftTypeChange('cassa')}
                                    disabled={false}
                                />
                                <ShiftTypeOption
                                    label="Macchina Propria"
                                    value="macchina_propria"
                                    selected={selectedShiftType === 'macchina_propria'}
                                    onChange={() => handleShiftTypeChange('macchina_propria')}
                                    disabled={false}
                                />
                                <ShiftTypeOption
                                    label="Macchina Pizzeria"
                                    value="macchina_pizzeria"
                                    selected={selectedShiftType === 'macchina_pizzeria'}
                                    onChange={() => handleShiftTypeChange('macchina_pizzeria')}
                                    disabled={false}
                                />
                            </div>
                        )}
                        <button
                            onClick={handleClockClick}
                            disabled={!activeShift && !selectedShiftType}
                            className={`w-full flex items-center justify-center gap-3 text-lg font-bold py-4 px-6 rounded-xl transition-all duration-300 transform focus:outline-none focus:ring-4 ${!activeShift && !selectedShiftType
                                ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                                : activeShift
                                    ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-red-500/30 focus:ring-red-400 hover:scale-[1.02] hover:shadow-lg'
                                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-500/30 focus:ring-emerald-400 hover:scale-[1.02] hover:shadow-lg'
                                }`}
                        >
                            <ClockIcon className="w-7 h-7" />
                            {activeShift ? 'Timbra Uscita' : 'Timbra Entrata'}
                        </button>
                    </div>

                    {/* Today's Shifts Panel */}
                    <div className="glass-panel p-6 rounded-3xl">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-white">Oggi</h3>
                            <span className="text-xs font-medium text-slate-400 bg-slate-800 px-2 py-1 rounded-lg">{formatDate(new Date())}</span>
                        </div>
                        <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                            {activeShift && isSameDay(new Date(activeShift.startTime), new Date()) && <ShiftListItem shift={activeShift} />}
                            {reversedTodayShifts.length > 0 ? (
                                reversedTodayShifts.map(s => <ShiftListItem key={s.id} shift={s} />)
                            ) : (!activeShift && <p className="text-slate-500 text-center py-4 text-sm">Nessuna attività registrata oggi.</p>)
                            }
                        </div>
                    </div>

                    {/* My Shifts Panel */}
                    <div className="glass-panel p-6 rounded-3xl">
                        <UserShiftsView assignedShifts={assignedShifts} />
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="glass-panel p-6 rounded-3xl h-full">
                        <Calendar shifts={shifts} />
                    </div>
                </div>
            </div>
        </div>
    );
};
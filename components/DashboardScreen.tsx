


import React, { useState, useEffect } from 'react';
import type { User, Shift, AssignedShift } from '../types';
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
    onClock: (tags: Shift['tags']) => void;
}

const ClockButton: React.FC<{ active: boolean; onClick: () => void }> = ({ active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center justify-center gap-3 text-lg font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 ${active
            ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-red-500/30 focus:ring-red-400'
            : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-500/30 focus:ring-emerald-400'
            }`}
    >
        <ClockIcon className="w-7 h-7" />
        {active ? 'Timbra Uscita' : 'Timbra Entrata'}
    </button>
);

const ShiftListItem: React.FC<{ shift: Shift }> = ({ shift }) => {
    const startTime = new Date(shift.startTime);
    const endTime = shift.endTime ? new Date(shift.endTime) : null;

    return (
        <div className="flex justify-between items-center bg-slate-800/50 border border-slate-700/50 p-3 rounded-xl hover:bg-slate-800/70 transition-colors">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <ClockIcon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                    <p className="font-semibold text-slate-200">{formatTime(startTime)} - {endTime ? formatTime(endTime) : '...'}</p>
                </div>
            </div>
            <p className="text-sm font-mono bg-slate-900/50 px-2 py-1 rounded text-slate-400">{formatDuration(startTime, endTime)}</p>
        </div>
    );
};

const OptionCheckbox: React.FC<{ label: string; checked: boolean; onChange: () => void; disabled: boolean }> = ({ label, checked, onChange, disabled }) => (
    <label className={`flex items-center p-3 rounded-xl transition-all border ${disabled
        ? 'cursor-not-allowed bg-slate-900/50 border-slate-800 text-slate-600'
        : checked
            ? 'bg-indigo-500/20 border-indigo-500/50 cursor-pointer'
            : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 cursor-pointer'
        }`}>
        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${checked ? 'bg-indigo-500 border-indigo-500' : 'bg-transparent border-slate-500'
            }`}>
            {checked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
        </div>
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className="hidden"
        />
        <span className={`ml-3 font-medium ${checked ? 'text-indigo-300' : 'text-slate-300'}`}>{label}</span>
    </label>
);

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ user, shifts, activeShift, assignedShifts, onClock }) => {
    const [tags, setTags] = useState<{ cassa: boolean; macchinaPropria: boolean; macchinaPizzeria: boolean }>({
        cassa: false,
        macchinaPropria: false,
        macchinaPizzeria: false,
    });

    useEffect(() => {
        if (!activeShift) {
            setTags({ cassa: false, macchinaPropria: false, macchinaPizzeria: false });
        }
    }, [activeShift]);

    const handleTagChange = (tag: keyof typeof tags) => {
        setTags(prev => ({ ...prev, [tag]: !prev[tag] }));
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
                                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 animate-pulse">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                        ATTIVO
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="text-slate-400 text-sm uppercase tracking-wider font-medium mb-2">Stato attuale</p>
                                    <p className="text-3xl font-bold text-slate-500">Non in servizio</p>
                                </>
                            )}
                        </div>
                        <div className="my-6 space-y-3 relative z-10">
                            <OptionCheckbox
                                label="Cassa"
                                checked={tags.cassa}
                                onChange={() => handleTagChange('cassa')}
                                disabled={!!activeShift}
                            />
                            <OptionCheckbox
                                label="Macchina Propria"
                                checked={tags.macchinaPropria}
                                onChange={() => handleTagChange('macchinaPropria')}
                                disabled={!!activeShift}
                            />
                            <OptionCheckbox
                                label="Macchina Pizzeria"
                                checked={tags.macchinaPizzeria}
                                onChange={() => handleTagChange('macchinaPizzeria')}
                                disabled={!!activeShift}
                            />
                        </div>
                        <ClockButton active={!!activeShift} onClick={() => onClock(tags)} />
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
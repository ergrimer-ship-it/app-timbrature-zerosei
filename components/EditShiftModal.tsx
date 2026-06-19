import React, { useState, useEffect } from 'react';
import { Shift } from '../types';

interface EditShiftModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (updatedShift: Shift) => void;
    shift: Shift;
    userName?: string;
}

export const EditShiftModal: React.FC<EditShiftModalProps> = ({ isOpen, onClose, onSave, shift, userName }) => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    useEffect(() => {
        if (isOpen && shift) {
            const toLocal = (iso: string) => {
                const d = new Date(iso);
                const pad = (n: number) => n.toString().padStart(2, '0');
                return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
            };
            setStartTime(toLocal(shift.startTime));
            setEndTime(shift.endTime ? toLocal(shift.endTime) : '');
        }
    }, [isOpen, shift]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ ...shift, startTime: new Date(startTime).toISOString(), endTime: endTime ? new Date(endTime).toISOString() : null });
        onClose();
    };

    const getDuration = () => {
        if (!startTime || !endTime) return null;
        const diff = new Date(endTime).getTime() - new Date(startTime).getTime();
        if (diff < 0) return { error: "L'ora di fine è precedente all'inizio" };
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        return { text: `${h}h ${m.toString().padStart(2,'0')}m`, isLong: h >= 24 };
    };

    const duration = getDuration();
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-in" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-bold text-slate-800">
                        ✏️ Modifica Turno {userName ? `di ${userName}` : ''}
                    </h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">✕</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Inizio Turno</label>
                        <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} required
                            className="glass-input w-full px-4 py-3 rounded-xl" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Fine Turno</label>
                        <input type="datetime-local" value={endTime} onChange={e => setEndTime(e.target.value)}
                            className="glass-input w-full px-4 py-3 rounded-xl" />
                        <p className="text-xs text-slate-400 mt-1">Lascia vuoto se ancora in corso.</p>
                    </div>
                    {duration && (
                        <div className={`p-3 rounded-xl text-sm font-semibold flex justify-between ${
                            'error' in duration ? 'bg-red-50 text-red-600 border border-red-200'
                            : duration.isLong ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}>
                            <span>Durata totale</span>
                            <span>{'error' in duration ? duration.error : duration.text}</span>
                        </div>
                    )}
                    <div className="flex gap-3 pt-2">
                        <button type="button" onClick={onClose}
                            className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors">
                            Annulla
                        </button>
                        <button type="submit" disabled={!!(duration && 'error' in duration)}
                            className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-50">
                            💾 Salva
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

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
            // Convert ISO strings to local datetime-local format (YYYY-MM-DDTHH:mm)
            // Note: input type="datetime-local" requires simplified ISO format without Z
            const toLocalISO = (isoString: string) => {
                if (!isoString) return '';
                const date = new Date(isoString);
                // Adjust to local timezone string manually or use a library. 
                // Simple approach: string slice ensuring padding
                const pad = (n: number) => n.toString().padStart(2, '0');
                return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
            };

            setStartTime(toLocalISO(shift.startTime));
            setEndTime(shift.endTime ? toLocalISO(shift.endTime) : '');
        }
    }, [isOpen, shift]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Convert back to ISO string
        const start = new Date(startTime).toISOString();
        const end = endTime ? new Date(endTime).toISOString() : null;

        onSave({
            ...shift,
            startTime: start,
            endTime: end,
        });
        onClose();
    };

    const getDuration = () => {
        if (!startTime || !endTime) return null;
        const start = new Date(startTime);
        const end = new Date(endTime);
        const diffMs = end.getTime() - start.getTime();

        if (diffMs < 0) return { error: 'L\'ora di fine è precedente all\'inizio' };

        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

        return {
            text: `${hours}h ${minutes.toString().padStart(2, '0')}m`,
            isLong: hours >= 24,
            diffMs
        };
    };

    const durationInfo = getDuration();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md border border-slate-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                    Modifica Turno {userName ? `di ${userName}` : ''}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">
                            Inizio Turno
                        </label>
                        <input
                            type="datetime-local"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            required
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">
                            Fine Turno
                        </label>
                        <input
                            type="datetime-local"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <p className="text-xs text-slate-500 mt-1">Lascia vuoto se il turno è ancora in corso.</p>
                    </div>

                    {durationInfo && (
                        <div className={`p-3 rounded-lg border ${durationInfo.error ? 'bg-red-500/10 border-red-500/50 text-red-400' :
                                durationInfo.isLong ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-400' :
                                    'bg-blue-500/10 border-blue-500/50 text-blue-300'
                            }`}>
                            <div className="text-sm font-bold flex justify-between items-center">
                                <span>Durata Totale:</span>
                                <span>{durationInfo.error || durationInfo.text}</span>
                            </div>
                            {durationInfo.isLong && (
                                <p className="text-xs mt-1">⚠️ Attenzione: Il turno dura più di 24 ore. Verifica le date!</p>
                            )}
                        </div>
                    )}

                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                        >
                            Annulla
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!!durationInfo?.error}
                        >
                            Salva Modifiche
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

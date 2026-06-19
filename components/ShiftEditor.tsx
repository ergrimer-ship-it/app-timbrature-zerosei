import React, { useState } from 'react';
import type { Shift, ShiftType } from '../types';

interface ShiftEditorProps {
    shift: Shift;
    onSave: (updatedShift: Shift) => void;
    onCancel: () => void;
}

const toLocalISOString = (isoString: string | null): string => {
    if (!isoString) return '';
    const date = new Date(isoString);
    const offset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - offset).toISOString().slice(0, 16);
};

export const ShiftEditor: React.FC<ShiftEditorProps> = ({ shift, onSave, onCancel }) => {
    const [startTime, setStartTime] = useState(toLocalISOString(shift.startTime));
    const [endTime, setEndTime] = useState(toLocalISOString(shift.endTime));
    const [shiftType, setShiftType] = useState<ShiftType>(shift.type || 'standard');

    const handleSave = () => {
        onSave({
            ...shift,
            startTime: new Date(startTime).toISOString(),
            endTime: endTime ? new Date(endTime).toISOString() : null,
            type: shiftType,
        });
    };

    const typeOptions: { value: ShiftType; label: string }[] = [
        { value: 'standard', label: 'Standard' },
        { value: 'cassa', label: 'Cassa' },
        { value: 'macchina_propria', label: 'Macchina Propria' },
        { value: 'macchina_pizzeria', label: 'Macchina Pizzeria' },
    ];

    return (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Inizio</label>
                    <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)}
                        className="glass-input w-full px-3 py-2 rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Fine</label>
                    <input type="datetime-local" value={endTime} onChange={e => setEndTime(e.target.value)}
                        className="glass-input w-full px-3 py-2 rounded-xl text-sm" />
                </div>
            </div>
            <div className="mb-4 pt-3 border-t border-blue-200">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tipo di Turno</p>
                <div className="flex flex-wrap gap-2">
                    {typeOptions.map(opt => (
                        <label key={opt.value} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm cursor-pointer border transition-all ${
                            shiftType === opt.value ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                        }`}>
                            <input type="radio" checked={shiftType === opt.value} onChange={() => setShiftType(opt.value)} className="hidden" />
                            {opt.label}
                        </label>
                    ))}
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <button onClick={onCancel} className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-colors text-sm">
                    Annulla
                </button>
                <button onClick={handleSave} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors text-sm">
                    💾 Salva
                </button>
            </div>
        </div>
    );
};

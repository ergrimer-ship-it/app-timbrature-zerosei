import React, { useState } from 'react';
import type { Shift } from '../types';
import { formatTime, formatDuration, formatDate } from '../utils/date';
import { ShiftEditor } from './ShiftEditor';

interface ShiftDetailModalProps {
    date: Date;
    shifts: Shift[];
    onClose: () => void;
    isAdminView?: boolean;
    onUpdateShift?: (updatedShift: Shift) => void;
    onDeleteShift?: (shiftId: string) => void;
}

const ShiftDisplay: React.FC<{ shift: Shift; onEdit: () => void; onDelete: () => void; isAdminView: boolean }> = ({ shift, onEdit, onDelete, isAdminView }) => {
    const start = new Date(shift.startTime);
    const end = shift.endTime ? new Date(shift.endTime) : null;
    const labels: Record<string, string> = {
        standard: 'Standard', cassa: 'Cassa',
        macchina_propria: 'Macchina Propria', macchina_pizzeria: 'Macchina Pizzeria'
    };
    return (
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
                        <span>⏱</span>
                        <span className="text-blue-700">{formatTime(start)}</span>
                        <span className="text-slate-400">–</span>
                        <span className="text-blue-700">{end ? formatTime(end) : 'In corso'}</span>
                    </div>
                    <p className="text-slate-500 text-sm mt-1 ml-7">{formatDuration(start, end)}</p>
                </div>
                {isAdminView && (
                    <div className="flex gap-1">
                        <button onClick={onEdit} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">✏️</button>
                        <button onClick={onDelete} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">🗑️</button>
                    </div>
                )}
            </div>
            {shift.type && shift.type !== 'standard' && (
                <div className="pt-3 mt-3 border-t border-slate-200">
                    <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-1 rounded-full font-semibold">{labels[shift.type]}</span>
                </div>
            )}
        </div>
    );
};

export const ShiftDetailModal: React.FC<ShiftDetailModalProps> = ({ date, shifts, onClose, isAdminView = false, onUpdateShift, onDeleteShift }) => {
    const [editingShiftId, setEditingShiftId] = useState<string | null>(null);

    const dayShifts = shifts.filter(shift => {
        const d = new Date(shift.startTime);
        return d.getFullYear() === date.getFullYear() && d.getMonth() === date.getMonth() && d.getDate() === date.getDate();
    }).sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());

    const handleSave = (updatedShift: Shift) => {
        onUpdateShift?.(updatedShift);
        setEditingShiftId(null);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center p-4 z-50" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 animate-fade-in mb-20 sm:mb-0" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-lg font-bold text-slate-800">📅 Dettaglio Turni</h2>
                        <p className="text-blue-600 font-semibold text-sm mt-0.5">{formatDate(date)}</p>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">✕</button>
                </div>
                <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                    {dayShifts.length > 0 ? dayShifts.map(shift => (
                        <div key={shift.id}>
                            {editingShiftId === shift.id ? (
                                <ShiftEditor shift={shift} onSave={handleSave} onCancel={() => setEditingShiftId(null)} />
                            ) : (
                                <ShiftDisplay shift={shift} isAdminView={isAdminView}
                                    onEdit={() => setEditingShiftId(shift.id)}
                                    onDelete={() => { if (window.confirm('Eliminare questo turno?')) onDeleteShift?.(shift.id); }} />
                            )}
                        </div>
                    )) : (
                        <p className="text-slate-400 text-center py-8">Nessun turno completato per questo giorno.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

import React, { useState } from 'react';
import type { Shift } from '../types';
import { formatTime, formatDuration, formatDate } from '../utils/date';
import { ClockIcon, XCircleIcon, EditIcon, TrashIcon } from './icons';
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
    const startTime = new Date(shift.startTime);
    const endTime = shift.endTime ? new Date(shift.endTime) : null;

    const shiftTypeLabel = React.useMemo(() => {
        if (!shift.type) return null;

        const labels: Record<string, string> = {
            standard: 'Standard',
            cassa: 'Cassa',
            macchina_propria: 'Macchina Propria',
            macchina_pizzeria: 'Macchina Pizzeria'
        };

        return labels[shift.type] || null;
    }, [shift.type]);

    return (
        <div className="bg-gray-700/50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 font-semibold text-lg">
                        <ClockIcon className="w-5 h-5 text-blue-400" />
                        <span>{formatTime(startTime)} - {endTime ? formatTime(endTime) : 'In corso'}</span>
                    </div>
                    <span className="ml-7 font-mono text-sm text-gray-400">{formatDuration(startTime, endTime)}</span>
                </div>
                {isAdminView && (
                    <div className="flex items-center gap-2">
                        <button onClick={onEdit} className="p-2 text-gray-400 hover:text-blue-400 transition-colors" aria-label="Modifica turno">
                            <EditIcon className="w-5 h-5" />
                        </button>
                        <button onClick={onDelete} className="p-2 text-gray-400 hover:text-red-400 transition-colors" aria-label="Elimina turno">
                            <TrashIcon className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
            {shiftTypeLabel && (
                <div className="pt-3 mt-3 border-t border-gray-600">
                    <span className="text-xs bg-yellow-600/50 text-yellow-200 px-2 py-1 rounded-full">{shiftTypeLabel}</span>
                </div>
            )}
        </div>
    );
};


export const ShiftDetailModal: React.FC<ShiftDetailModalProps> = ({ date, shifts, onClose, isAdminView = false, onUpdateShift, onDeleteShift }) => {
    const [editingShiftId, setEditingShiftId] = useState<string | null>(null);

    const dayShifts = shifts.filter(shift => {
        const shiftDate = new Date(shift.startTime);
        return shiftDate.getFullYear() === date.getFullYear() &&
            shiftDate.getMonth() === date.getMonth() &&
            shiftDate.getDate() === date.getDate();
    }).sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());

    const handleSave = (updatedShift: Shift) => {
        onUpdateShift?.(updatedShift);
        setEditingShiftId(null);
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <div
                className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg p-6 relative transform transition-all animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <XCircleIcon className="w-8 h-8" />
                </button>
                <h2 className="text-2xl font-bold text-white mb-2">Dettaglio Turni</h2>
                <p className="text-blue-300 font-semibold mb-6">{formatDate(date)}</p>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    {dayShifts.length > 0 ? dayShifts.map(shift => (
                        <div key={shift.id}>
                            {editingShiftId === shift.id ? (
                                <ShiftEditor
                                    shift={shift}
                                    onSave={handleSave}
                                    onCancel={() => setEditingShiftId(null)}
                                />
                            ) : (
                                <ShiftDisplay
                                    shift={shift}
                                    isAdminView={isAdminView}
                                    onEdit={() => setEditingShiftId(shift.id)}
                                    onDelete={() => {
                                        if (window.confirm("Sei sicuro di voler eliminare questo turno? Questa azione è irreversibile.")) {
                                            onDeleteShift?.(shift.id);
                                        }
                                    }}
                                />
                            )}
                        </div>
                    )) : <p className="text-gray-400">Nessun turno completato per questo giorno.</p>}
                </div>
            </div>
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};
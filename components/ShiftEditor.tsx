import React, { useState } from 'react';
import type { Shift, ShiftType } from '../types';
import { SaveIcon } from './icons';

interface ShiftEditorProps {
    shift: Shift;
    onSave: (updatedShift: Shift) => void;
    onCancel: () => void;
}

// Helper to convert ISO string to a format suitable for datetime-local input
const toLocalISOString = (isoString: string | null): string => {
    if (!isoString) return '';
    const date = new Date(isoString);
    // Adjust for timezone offset to display local time in the input
    const timezoneOffset = date.getTimezoneOffset() * 60000;
    const localDate = new Date(date.getTime() - timezoneOffset);
    return localDate.toISOString().slice(0, 16);
};

export const ShiftEditor: React.FC<ShiftEditorProps> = ({ shift, onSave, onCancel }) => {
    const [startTime, setStartTime] = useState(toLocalISOString(shift.startTime));
    const [endTime, setEndTime] = useState(toLocalISOString(shift.endTime));
    const [shiftType, setShiftType] = useState<ShiftType>(shift.type || 'standard');

    const handleSave = () => {
        // Convert local datetime string back to a full ISO string (UTC) for storage
        const updatedShift: Shift = {
            ...shift,
            startTime: new Date(startTime).toISOString(),
            endTime: endTime ? new Date(endTime).toISOString() : null,
            type: shiftType,
        };
        onSave(updatedShift);
    };

    return (
        <div className="bg-gray-700 p-4 rounded-lg border border-blue-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Inizio</label>
                    <input
                        type="datetime-local"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Fine</label>
                    <input
                        type="datetime-local"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="mb-4 pt-4 border-t border-gray-600">
                <p className="text-sm font-medium text-gray-300 mb-2">Tipo di Turno</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex items-center text-gray-200 cursor-pointer">
                        <input
                            type="radio"
                            checked={shiftType === 'standard'}
                            onChange={() => setShiftType('standard')}
                            className="w-4 h-4 text-blue-500 bg-gray-600 border-gray-500 focus:ring-blue-600"
                        />
                        <span className="ml-2">Standard</span>
                    </label>
                    <label className="flex items-center text-gray-200 cursor-pointer">
                        <input
                            type="radio"
                            checked={shiftType === 'cassa'}
                            onChange={() => setShiftType('cassa')}
                            className="w-4 h-4 text-blue-500 bg-gray-600 border-gray-500 focus:ring-blue-600"
                        />
                        <span className="ml-2">Cassa</span>
                    </label>
                    <label className="flex items-center text-gray-200 cursor-pointer">
                        <input
                            type="radio"
                            checked={shiftType === 'macchina_propria'}
                            onChange={() => setShiftType('macchina_propria')}
                            className="w-4 h-4 text-blue-500 bg-gray-600 border-gray-500 focus:ring-blue-600"
                        />
                        <span className="ml-2">Macchina Propria</span>
                    </label>
                    <label className="flex items-center text-gray-200 cursor-pointer">
                        <input
                            type="radio"
                            checked={shiftType === 'macchina_pizzeria'}
                            onChange={() => setShiftType('macchina_pizzeria')}
                            className="w-4 h-4 text-blue-500 bg-gray-600 border-gray-500 focus:ring-blue-600"
                        />
                        <span className="ml-2">Macchina Pizzeria</span>
                    </label>
                </div>
            </div>
            <div className="flex justify-end gap-3">
                <button onClick={onCancel} className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg transition-colors">
                    Annulla
                </button>
                <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                    <SaveIcon className="w-5 h-5" />
                    Salva
                </button>
            </div>
        </div>
    );
};
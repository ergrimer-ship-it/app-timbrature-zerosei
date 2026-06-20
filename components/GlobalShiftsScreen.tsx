import React, { useEffect, useState, useMemo } from 'react';
import { WeeklyCalendar } from './WeeklyCalendar';
import { EditShiftModal } from './EditShiftModal';
import { getShifts, addShift, getAllUsers } from '../services/dbService';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import type { Shift, AssignedShift, User } from '../types';

interface GlobalShiftsScreenProps {
    assignedShifts: AssignedShift[];
}

export const GlobalShiftsScreen: React.FC<GlobalShiftsScreenProps> = ({ assignedShifts }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [allShifts, setAllShifts] = useState<(Shift & { userId: string })[]>([]);

    const [weekStart, setWeekStart] = useState(() => {
        const now = new Date();
        const day = now.getDay();
        const monday = new Date(now);
        monday.setDate(now.getDate() - day + (day === 0 ? -6 : 1));
        monday.setHours(0, 0, 0, 0);
        return monday;
    });

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedShift, setSelectedShift] = useState<Shift | null>(null);
    const [selectedUserForEdit, setSelectedUserForEdit] = useState<User | null>(null);

    useEffect(() => {
        const load = async () => {
            const us = await getAllUsers();
            setUsers(us);
            const arrays = await Promise.all(
                us.filter(u => !u.isAdmin).map(async u => {
                    const s = await getShifts(u.id);
                    return s.map(sh => ({ ...sh, userId: u.id }));
                })
            );
            setAllShifts(arrays.flat());
        };
        load();
    }, []);

    const weekDates = useMemo(() => {
        return Array.from({ length: 7 }, (_, i) => {
            const d = new Date(weekStart);
            d.setDate(d.getDate() + i);
            return d;
        });
    }, [weekStart]);

    const changeWeek = (amount: number) => {
        setWeekStart(prev => {
            const d = new Date(prev);
            d.setDate(d.getDate() + amount * 7);
            return d;
        });
    };

    const handleShiftClick = (user: User, actualShift?: Shift, assignedShift?: AssignedShift) => {
        setSelectedUserForEdit(user);
        if (actualShift) {
            setSelectedShift(actualShift);
        } else if (assignedShift) {
            const [year, month, day] = assignedShift.date.split('-').map(Number);
            const [hours, minutes] = assignedShift.startTime.split(':').map(Number);
            setSelectedShift({
                id: `shift_${Date.now()}`,
                startTime: new Date(year, month - 1, day, hours, minutes).toISOString(),
                endTime: null,
                type: 'standard',
            });
        }
        setIsEditModalOpen(true);
    };

    const handleSaveShift = async (updatedShift: Shift) => {
        if (!selectedUserForEdit) return;
        try {
            await addShift(selectedUserForEdit.id, updatedShift);
            setAllShifts(prev => [
                ...prev.filter(s => s.id !== updatedShift.id),
                { ...updatedShift, userId: selectedUserForEdit.id }
            ]);
            setIsEditModalOpen(false);
            setSelectedShift(null);
            setSelectedUserForEdit(null);
        } catch {
            alert('Errore durante il salvataggio del turno.');
        }
    };

    return (
        <div className="space-y-5">
            {/* Blue header con navigazione settimana integrata */}
            <div className="screen-header rounded-b-3xl">
                <div className="flex items-start justify-between mb-5">
                    <div>
                        <h1 className="text-2xl font-bold">📅 Panoramica Turni</h1>
                        <p className="text-blue-200 text-sm mt-1">Clicca su un turno per modificarlo</p>
                    </div>
                    <span className="text-xs bg-white/15 text-white font-semibold px-3 py-1 rounded-full">
                        {weekDates[0].getDate()} – {weekDates[6].getDate()} {weekDates[0].toLocaleDateString('it-IT', { month: 'short' })}
                    </span>
                </div>
                <div className="flex items-center justify-between bg-white/15 rounded-2xl px-4 py-3">
                    <button onClick={() => changeWeek(-1)} className="text-white hover:text-blue-200 transition p-1">
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <span className="font-bold text-white capitalize">
                        {weekStart.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
                    </span>
                    <button onClick={() => changeWeek(1)} className="text-white hover:text-blue-200 transition p-1">
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <WeeklyCalendar
                shifts={allShifts}
                assignedShifts={assignedShifts}
                users={users}
                onShiftClick={handleShiftClick}
                weekDates={weekDates}
                onChangeWeek={changeWeek}
            />

            {selectedShift && (
                <EditShiftModal
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={handleSaveShift}
                    shift={selectedShift}
                    userName={selectedUserForEdit ? `${selectedUserForEdit.name} ${selectedUserForEdit.surname}` : undefined}
                />
            )}
        </div>
    );
};

import React, { useEffect, useState } from 'react';
import { WeeklyCalendar } from './WeeklyCalendar';
import { EditShiftModal } from './EditShiftModal';
import { getAllUsers, getShifts, addShift } from '../services/dbService';
import type { Shift, User, AssignedShift } from '../types';

interface GlobalShiftsScreenProps {
    assignedShifts: AssignedShift[];
}

export const GlobalShiftsScreen: React.FC<GlobalShiftsScreenProps> = ({ assignedShifts }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [allShifts, setAllShifts] = useState<(Shift & { userId: string })[]>([]);

    // Edit Modal State
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedShift, setSelectedShift] = useState<Shift | null>(null);
    const [selectedUserForEdit, setSelectedUserForEdit] = useState<User | null>(null);

    useEffect(() => {
        const load = async () => {
            const us = await getAllUsers();
            setUsers(us);
            const shiftsPromises = us.map(async u => {
                const userShifts = await getShifts(u.id);
                return userShifts.map(s => ({ ...s, userId: u.id }));
            });
            const shiftsArrays = await Promise.all(shiftsPromises);
            const flat = shiftsArrays.flat();
            setAllShifts(flat);
        };
        load();
    }, []);

    const handleShiftClick = (user: User, actualShift?: Shift, assignedShift?: AssignedShift) => {
        setSelectedUserForEdit(user);

        if (actualShift) {
            // Editing an existing worked shift
            setSelectedShift(actualShift);
        } else if (assignedShift) {
            // Creating a new worked shift from an assigned one
            // We need to construct a valid ISO string date from YYYY-MM-DD + HH:mm
            const [year, month, day] = assignedShift.date.split('-').map(Number);
            const [hours, minutes] = assignedShift.startTime.split(':').map(Number);

            const startDate = new Date(year, month - 1, day, hours, minutes);

            const newShift: Shift = {
                id: `shift_${Date.now()}`, // Temporary ID, will be used for key
                startTime: startDate.toISOString(),
                endTime: null, // User will set this in modal
                type: 'standard', // Default
            };
            setSelectedShift(newShift);
        }

        setIsEditModalOpen(true);
    };

    const handleSaveShift = async (updatedShift: Shift) => {
        if (!selectedUserForEdit) return;

        try {
            // Save to DB
            await addShift(selectedUserForEdit.id, updatedShift);

            // Update local state
            setAllShifts(prev => {
                // Remove old version if exists (by ID)
                const filtered = prev.filter(s => s.id !== updatedShift.id);
                // Add updated version
                return [...filtered, { ...updatedShift, userId: selectedUserForEdit.id }];
            });

            setIsEditModalOpen(false);
            setSelectedShift(null);
            setSelectedUserForEdit(null);
        } catch (error) {
            console.error("Failed to save shift:", error);
            alert("Errore durante il salvataggio del turno.");
        }
    };

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-white mb-2">Panoramica Turni</h1>
                <p className="text-slate-400">Visualizza i turni settimanali di tutti i dipendenti. Clicca su un turno per modificarlo.</p>
            </header>
            <div className="glass-panel p-6 rounded-3xl shadow-lg">
                <WeeklyCalendar
                    shifts={allShifts}
                    assignedShifts={assignedShifts}
                    users={users}
                    onShiftClick={handleShiftClick}
                />
            </div>

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

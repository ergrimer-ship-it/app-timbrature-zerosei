import React, { useEffect, useState } from 'react';
import { WeeklyCalendar } from './WeeklyCalendar';
import { getAllUsers, getShifts } from '../services/dbService';
import type { Shift, User, AssignedShift } from '../types';

interface GlobalShiftsScreenProps {
    assignedShifts: AssignedShift[];
}

export const GlobalShiftsScreen: React.FC<GlobalShiftsScreenProps> = ({ assignedShifts }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [allShifts, setAllShifts] = useState<(Shift & { userId: string })[]>([]);

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

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-white mb-2">Panoramica Turni</h1>
                <p className="text-slate-400">Visualizza i turni settimanali di tutti i dipendenti.</p>
            </header>
            <div className="glass-panel p-6 rounded-3xl shadow-lg">
                <WeeklyCalendar shifts={allShifts} assignedShifts={assignedShifts} users={users} />
            </div>
        </div>
    );
};

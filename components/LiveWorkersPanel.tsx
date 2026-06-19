import React, { useState, useEffect } from 'react';
import type { User, Shift } from '../types';
import { ClockIcon } from './icons';
import { formatTime } from '../utils/date';
import { onActiveShifts } from '../services/dbService';

interface LiveWorkersPanelProps {
    // No props needed - Firebase provides all data
}

interface ActiveWorker {
    user: User;
    shift: Shift;
}

export const LiveWorkersPanel: React.FC<LiveWorkersPanelProps> = () => {
    const [activeWorkers, setActiveWorkers] = useState<ActiveWorker[]>([]);
    const [currentTime, setCurrentTime] = useState(new Date());

    // Listen to real-time active shifts from Firestore
    useEffect(() => {
        const unsubscribe = onActiveShifts((workers) => {
            // Sort by start time (most recent first)
            workers.sort((a, b) => {
                return new Date(b.shift.startTime).getTime() - new Date(a.shift.startTime).getTime();
            });
            setActiveWorkers(workers);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // Aggiorna tempo corrente ogni secondo per durata real-time
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const calculateDuration = (startTime: string): string => {
        const start = new Date(startTime);
        const diff = currentTime.getTime() - start.getTime();

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return `${hours}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
    };

    const getShiftTypeLabel = (shift: Shift): string | null => {
        if (!shift.type) return null;

        const labels: Record<string, string> = {
            standard: 'Standard',
            cassa: 'Cassa',
            macchina_propria: 'Macchina Propria',
            macchina_pizzeria: 'Macchina Pizzeria'
        };

        return labels[shift.type] || null;
    };

    return (
        <div className="space-y-5">
            {/* Blue header */}
            <div className="screen-header rounded-b-3xl">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Live</h1>
                        <p className="text-blue-200 text-sm mt-1">Dipendenti in servizio ora</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-full">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-white text-sm font-semibold">{activeWorkers.length} {activeWorkers.length === 1 ? 'persona' : 'persone'}</span>
                    </div>
                </div>
            </div>

            {activeWorkers.length === 0 ? (
                <div className="glass-panel rounded-2xl py-16 text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ClockIcon className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="font-bold text-slate-600 mb-1">Nessuno in Servizio</h3>
                    <p className="text-slate-400 text-sm">Al momento non ci sono dipendenti al lavoro.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {activeWorkers.map(({ user, shift }) => {
                        const shiftTypeLabel = getShiftTypeLabel(shift);
                        const startTime = new Date(shift.startTime);
                        return (
                            <div key={user.id} className="glass-panel rounded-2xl p-5 border-l-4 border-emerald-500">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
                                        {user.name.charAt(0)}{user.surname.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800">{user.name} {user.surname}</h3>
                                        <div className="flex items-center gap-1 mt-0.5">
                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                            <span className="text-emerald-600 text-xs font-semibold">In Servizio</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Iniziato alle</span>
                                        <span className="font-semibold text-slate-700">{formatTime(startTime)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Durata</span>
                                        <span className="font-mono font-bold text-emerald-600">{calculateDuration(shift.startTime)}</span>
                                    </div>
                                    {shiftTypeLabel && (
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-500">Tipo</span>
                                            <span className="bg-amber-50 text-amber-700 text-xs px-2 py-0.5 rounded-full font-semibold border border-amber-200">{shiftTypeLabel}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

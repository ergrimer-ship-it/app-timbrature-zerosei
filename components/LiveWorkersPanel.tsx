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

    if (activeWorkers.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ClockIcon className="w-10 h-10 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-400 mb-2">Nessuno in Servizio</h3>
                <p className="text-slate-500">Al momento non ci sono dipendenti al lavoro.</p>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                    <ClockIcon className="text-emerald-400" />
                    Dipendenti in Servizio
                </h2>
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-emerald-400 text-sm font-medium">{activeWorkers.length} {activeWorkers.length === 1 ? 'persona' : 'persone'}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {activeWorkers.map(({ user, shift }) => {
                    const shiftTypeLabel = getShiftTypeLabel(shift);
                    const startTime = new Date(shift.startTime);

                    return (
                        <div
                            key={user.id}
                            className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800/60 hover:border-emerald-500/30 transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/20">
                                        {user.name.charAt(0)}{user.surname.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">{user.name} {user.surname}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">In Servizio</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-slate-300">
                                    <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm">Iniziato alle <span className="font-semibold text-white">{formatTime(startTime)}</span></span>
                                </div>

                                <div className="flex items-center gap-2 text-slate-300">
                                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span className="text-sm">Durata: <span className="font-mono font-semibold text-emerald-400">{calculateDuration(shift.startTime)}</span></span>
                                </div>

                                {shiftTypeLabel && (
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <svg className="w-4 h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        <span className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs px-2 py-0.5 rounded-full font-medium">
                                            {shiftTypeLabel}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

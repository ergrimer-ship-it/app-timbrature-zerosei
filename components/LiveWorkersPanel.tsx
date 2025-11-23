import React, { useState, useEffect } from 'react';
import type { User, Shift } from '../types';
import { ClockIcon } from './icons';
import { formatTime } from '../utils/date';

interface LiveWorkersPanelProps {
    allUsers: User[];
}

interface ActiveWorker {
    user: User;
    shift: Shift;
}

export const LiveWorkersPanel: React.FC<LiveWorkersPanelProps> = ({ allUsers }) => {
    const [activeWorkers, setActiveWorkers] = useState<ActiveWorker[]>([]);
    const [currentTime, setCurrentTime] = useState(new Date());

    // Recupera turni attivi da localStorage
    useEffect(() => {
        const updateActiveWorkers = () => {
            const workers: ActiveWorker[] = [];

            allUsers.forEach(user => {
                const activeShiftStr = localStorage.getItem(`activeShift_${user.id}`);
                if (activeShiftStr) {
                    try {
                        const shift = JSON.parse(activeShiftStr) as Shift;
                        workers.push({ user, shift });
                    } catch (error) {
                        console.error(`Error parsing active shift for user ${user.id}`, error);
                    }
                }
            });

            // Ordina per orario di inizio (più recenti prima)
            workers.sort((a, b) => {
                return new Date(b.shift.startTime).getTime() - new Date(a.shift.startTime).getTime();
            });

            setActiveWorkers(workers);
        };

        updateActiveWorkers();

        // Aggiorna ogni 5 secondi per rilevare nuovi turni
        const interval = setInterval(updateActiveWorkers, 5000);

        // Ascolta cambiamenti localStorage da altre tab/finestre
        const handleStorageChange = (e: StorageEvent) => {
            // Se cambia un activeShift, aggiorna immediatamente
            if (e.key && e.key.startsWith('activeShift_')) {
                updateActiveWorkers();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            clearInterval(interval);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [allUsers]);

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

    const getTags = (shift: Shift): string[] => {
        const tags: string[] = [];
        if (shift.tags?.cassa) tags.push('Cassa');
        if (shift.tags?.macchinaPropria) tags.push('Macchina Propria');
        if (shift.tags?.macchinaPizzeria) tags.push('Macchina Pizzeria');
        return tags;
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
                    const tags = getTags(shift);
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

                                {tags.length > 0 && (
                                    <div className="flex items-start gap-2 text-slate-300">
                                        <svg className="w-4 h-4 text-yellow-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        <div className="flex flex-wrap gap-1.5">
                                            {tags.map(tag => (
                                                <span key={tag} className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs px-2 py-0.5 rounded-full font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
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

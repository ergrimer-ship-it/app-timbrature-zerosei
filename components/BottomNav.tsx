import React from 'react';
import type { User } from '../types';

interface BottomNavProps {
    user: User;
    currentSection: string;
    onNavigate: (section: string) => void;
    onLogout: () => void;
}

interface NavItem { id: string; label: string; icon: string; }

export const BottomNav: React.FC<BottomNavProps> = ({ user, currentSection, onNavigate, onLogout }) => {
    const adminItems: NavItem[] = [
        { id: 'live',         label: 'Live',      icon: '📡' },
        { id: 'users',        label: 'Utenti',    icon: '👥' },
        { id: 'planner',      label: 'Turni',     icon: '📅' },
        { id: 'leaveSummary', label: 'Permessi',  icon: '🏖️' },
        { id: 'documents',    label: 'Documenti', icon: '📄' },
    ];

    const employeeItems: NavItem[] = [
        { id: 'dashboard',     label: 'Timbra',    icon: '⏱' },
        { id: 'globalShifts',  label: 'Turni',     icon: '📅' },
        { id: 'employeeNotes', label: 'Richieste', icon: '📝' },
        { id: 'documents',     label: 'Documenti', icon: '📄' },
        { id: 'profile',       label: 'Profilo',   icon: '👤' },
    ];

    const items = user.isAdmin ? adminItems : employeeItems;

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 flex shadow-[0_-2px_16px_rgba(0,0,0,0.07)]">
            {items.map(item => {
                const active = currentSection === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2 transition-colors ${
                            active ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                        }`}
                    >
                        <div className={`text-xl leading-none p-1.5 rounded-xl ${active ? 'bg-blue-50' : ''}`}>
                            {item.icon}
                        </div>
                        <span className={`text-[10px] font-semibold leading-none ${active ? 'text-blue-600' : 'text-slate-400'}`}>
                            {item.label}
                        </span>
                    </button>
                );
            })}
            <button
                onClick={onLogout}
                className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-red-400 hover:text-red-500 transition-colors"
            >
                <div className="text-xl leading-none p-1.5 rounded-xl">🚪</div>
                <span className="text-[10px] font-semibold leading-none">Esci</span>
            </button>
        </nav>
    );
};

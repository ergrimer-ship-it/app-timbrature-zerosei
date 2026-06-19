import React from 'react';
import { ClockIcon, UsersIcon, CalendarIcon, FileTextIcon, DocumentIcon, CogIcon, ClipboardListIcon } from './icons';
import type { User } from '../types';

interface BottomNavProps {
    user: User;
    currentSection: string;
    onNavigate: (section: string) => void;
    onLogout: () => void;
}

interface NavItem { id: string; label: string; icon: React.ReactNode; }

export const BottomNav: React.FC<BottomNavProps> = ({ user, currentSection, onNavigate }) => {
    const adminItems: NavItem[] = [
        { id: 'live',         label: 'Live',      icon: <ClockIcon className="w-5 h-5" /> },
        { id: 'users',        label: 'Utenti',    icon: <UsersIcon className="w-5 h-5" /> },
        { id: 'planner',      label: 'Turni',     icon: <ClipboardListIcon className="w-5 h-5" /> },
        { id: 'leaveSummary', label: 'Permessi',  icon: <FileTextIcon className="w-5 h-5" /> },
        { id: 'documents',    label: 'Documenti', icon: <DocumentIcon className="w-5 h-5" /> },
    ];

    const employeeItems: NavItem[] = [
        { id: 'dashboard',     label: 'Timbra',    icon: <ClockIcon className="w-5 h-5" /> },
        { id: 'globalShifts',  label: 'Turni',     icon: <CalendarIcon className="w-5 h-5" /> },
        { id: 'employeeNotes', label: 'Richieste', icon: <FileTextIcon className="w-5 h-5" /> },
        { id: 'documents',     label: 'Documenti', icon: <DocumentIcon className="w-5 h-5" /> },
        { id: 'profile',       label: 'Profilo',   icon: <CogIcon className="w-5 h-5" /> },
    ];

    const items = user.isAdmin ? adminItems : employeeItems;

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 flex safe-area-pb shadow-[0_-2px_16px_rgba(0,0,0,0.07)]">
            {items.map(item => {
                const active = currentSection === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 transition-colors ${
                            active ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                        }`}
                    >
                        <div className={`p-1.5 rounded-xl transition-colors ${active ? 'bg-blue-50' : ''}`}>
                            {item.icon}
                        </div>
                        <span className={`text-[10px] font-semibold leading-none ${active ? 'text-blue-600' : ''}`}>
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
};

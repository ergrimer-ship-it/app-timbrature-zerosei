import React, { useState } from 'react';
import { UsersIcon, CalendarIcon, CogIcon, MenuIcon, XIcon, LogoutIcon, ClipboardListIcon, ClockIcon, DocumentIcon, FileTextIcon } from './icons';
import type { User } from '../types';

interface SidebarProps {
    user: User | null;
    currentSection: string;
    onNavigate: (section: string) => void;
    onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ user, currentSection, onNavigate, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isAdmin = user?.isAdmin;

    const menuItems = [
        ...(isAdmin
            ? [
                { id: 'live', label: 'Live', icon: <ClockIcon className="w-5 h-5" /> },
                { id: 'users', label: 'Utenti', icon: <UsersIcon className="w-5 h-5" /> },
                { id: 'planner', label: 'Pianificazione', icon: <ClipboardListIcon className="w-5 h-5" /> },
            ]
            : [
                { id: 'dashboard', label: 'Timbratrice', icon: <ClockIcon className="w-5 h-5" /> },
                { id: 'employeeNotes', label: 'Note e Richieste', icon: <FileTextIcon className="w-5 h-5" /> },
            ]),
        { id: 'globalShifts', label: 'Panoramica Turni', icon: <CalendarIcon className="w-5 h-5" /> },
        { id: 'documents', label: 'Documenti', icon: <DocumentIcon className="w-5 h-5" /> },
        { id: 'profile', label: 'Profilo', icon: <CogIcon className="w-5 h-5" /> },
    ];

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Mobile Hamburger */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-slate-800/50 text-white backdrop-blur-sm border border-slate-700/50"
            >
                {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 
                bg-slate-900/95 backdrop-blur-xl border-r border-slate-800/50
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                lg:translate-x-0 lg:block
            `}>
                <div className="flex flex-col h-full p-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3 px-2 mb-10">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <span className="text-white font-bold text-xl">Z</span>
                        </div>
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            ZeroSei
                        </h1>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-2">
                        {menuItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    onNavigate(item.id);
                                    setIsOpen(false);
                                }}
                                className={`
                                    w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                                    ${currentSection === item.id
                                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:translate-x-1'}
                                `}
                            >
                                {item.icon}
                                <span className="font-medium">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    {/* User Profile & Logout */}
                    {user && (
                        <div className="pt-6 border-t border-slate-800/50 mt-auto">
                            <div className="flex items-center gap-3 px-2 mb-4">
                                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold border border-slate-600">
                                    {user.name.charAt(0)}{user.surname.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate">
                                        {user.name} {user.surname}
                                    </p>
                                    <p className="text-xs text-slate-500 truncate">
                                        {isAdmin ? 'Amministratore' : 'Dipendente'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onLogout}
                                className="w-full flex items-center gap-2 text-red-400 hover:bg-red-500/10 px-4 py-2 rounded-lg transition-colors text-sm font-medium group"
                            >
                                <LogoutIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
};

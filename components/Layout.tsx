import React from 'react';
import { Sidebar } from './Sidebar';
import type { User } from '../types';

interface LayoutProps {
    children: React.ReactNode;
    user: User | null;
    currentSection: string;
    onNavigate: (section: string) => void;
    onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, user, currentSection, onNavigate, onLogout }) => {
    return (
        <div className="flex min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-black text-slate-200 font-sans">
            {user && (
                <Sidebar
                    user={user}
                    currentSection={currentSection}
                    onNavigate={onNavigate}
                    onLogout={onLogout}
                />
            )}
            <main className={`flex-1 overflow-auto transition-all duration-300 ${user ? 'lg:ml-72' : ''} p-4 lg:p-8`}>
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

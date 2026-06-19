import React from 'react';
import { BottomNav } from './BottomNav';
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
        <div className="min-h-screen bg-[#f0f4ff] font-sans">
            <main className={`max-w-4xl mx-auto p-4 lg:p-8 ${user ? 'pb-24' : ''}`}>
                {children}
            </main>
            {user && (
                <BottomNav
                    user={user}
                    currentSection={currentSection}
                    onNavigate={onNavigate}
                    onLogout={onLogout}
                />
            )}
        </div>
    );
};

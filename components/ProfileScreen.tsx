import React, { useState } from 'react';
import { updatePassword } from '../authService';
import type { User } from '../types';

interface ProfileScreenProps {
    user: User | null;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ user }) => {
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);

    const handleChangePassword = async () => {
        if (!user || !newPassword.trim()) return;
        try {
            await updatePassword(user.email, newPassword);
            setMessage('Password aggiornata con successo');
            setIsError(false);
            setNewPassword('');
        } catch {
            setMessage('Errore aggiornamento password');
            setIsError(true);
        }
    };

    return (
        <div className="space-y-5">
            <div className="screen-header rounded-b-3xl">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl font-bold">
                        {user ? `${user.name.charAt(0)}${user.surname.charAt(0)}` : '👤'}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">👤 Profilo</h1>
                        {user && <p className="text-blue-200 text-sm mt-0.5">{user.name} {user.surname}</p>}
                    </div>
                </div>
            </div>

            {user && (
                <div className="glass-panel rounded-2xl p-5 space-y-4">
                    <h2 className="font-bold text-slate-800 mb-4">Informazioni</h2>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                        <span className="text-slate-500 text-sm">Nome</span>
                        <span className="font-semibold text-slate-800">{user.name}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                        <span className="text-slate-500 text-sm">Cognome</span>
                        <span className="font-semibold text-slate-800">{user.surname}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                        <span className="text-slate-500 text-sm">Ruolo</span>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${user.isAdmin ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
                            {user.isAdmin ? 'Amministratore' : 'Dipendente'}
                        </span>
                    </div>
                </div>
            )}

            <div className="glass-panel rounded-2xl p-5">
                <h2 className="font-bold text-slate-800 mb-4">🔐 Cambia Password</h2>
                <input
                    type="password"
                    placeholder="Nuova password"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    className="glass-input w-full px-4 py-3 rounded-xl mb-3"
                />
                <button
                    onClick={handleChangePassword}
                    disabled={!newPassword.trim()}
                    className="glass-button w-full py-3 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Aggiorna Password
                </button>
                {message && (
                    <p className={`text-sm text-center mt-3 font-medium ${isError ? 'text-red-500' : 'text-emerald-600'}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

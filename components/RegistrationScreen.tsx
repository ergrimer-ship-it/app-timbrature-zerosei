import React, { useState } from 'react';
import { UserPlusIcon } from './icons';

interface RegistrationScreenProps {
    onRegister: (name: string, surname: string, password: string) => void;
    onSwitchToLogin: () => void;
    error: string | null;
}

export const RegistrationScreen: React.FC<RegistrationScreenProps> = ({ onRegister, onSwitchToLogin, error }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() && surname.trim() && password.trim()) {
            onRegister(name.trim(), surname.trim(), password.trim());
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
            <div className="w-full max-w-md glass-panel rounded-2xl p-8 transform transition-all hover:scale-[1.02] duration-300">
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl mb-4 shadow-lg shadow-emerald-500/30">
                        <UserPlusIcon className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Crea Profilo</h1>
                    <p className="text-slate-400 mt-2 font-light">Inserisci i tuoi dati per iniziare</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2 ml-1">
                            Nome
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="es. Mario"
                            className="w-full px-4 py-3 glass-input rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                            autoComplete="given-name"
                        />
                    </div>
                    <div>
                        <label htmlFor="surname" className="block text-slate-300 text-sm font-medium mb-2 ml-1">
                            Cognome
                        </label>
                        <input
                            id="surname"
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder="es. Rossi"
                            className="w-full px-4 py-3 glass-input rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                            autoComplete="family-name"
                        />
                    </div>
                    <div>
                        <label htmlFor="reg-password" className="block text-slate-300 text-sm font-medium mb-2 ml-1">
                            Password
                        </label>
                        <input
                            id="reg-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            className="w-full px-4 py-3 glass-input rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                            autoComplete="new-password"
                        />
                    </div>
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                            <p className="text-red-400 text-sm text-center">{error}</p>
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={!name.trim() || !surname.trim() || !password.trim()}
                        className="w-full glass-button text-white font-bold py-3.5 px-4 rounded-xl focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                        style={{ background: 'linear-gradient(135deg, var(--color-success), #059669)' }}
                    >
                        <UserPlusIcon />
                        Crea Profilo
                    </button>
                </form>
                <p className="text-center text-slate-400 text-sm mt-8">
                    Hai già un account?{' '}
                    <button type="button" onClick={onSwitchToLogin} className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none">
                        Accedi
                    </button>
                </p>
            </div>
        </div>
    );
};
import React, { useState } from 'react';

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
        <div className="min-h-screen flex flex-col bg-[#f0f4ff]">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 px-6 pt-16 pb-16 text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">👤</div>
                <h1 className="text-2xl font-bold">Crea Profilo</h1>
                <p className="text-emerald-100 text-sm mt-1">Inserisci i tuoi dati per iniziare</p>
            </div>
            <div className="flex-1 -mt-6 bg-white rounded-t-3xl px-6 pt-8 pb-10 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
                <form onSubmit={handleSubmit} className="space-y-5 max-w-sm mx-auto">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Nome</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="es. Mario"
                            className="glass-input w-full px-4 py-3 rounded-xl" autoComplete="given-name" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Cognome</label>
                        <input type="text" value={surname} onChange={e => setSurname(e.target.value)} placeholder="es. Rossi"
                            className="glass-input w-full px-4 py-3 rounded-xl" autoComplete="family-name" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••"
                            className="glass-input w-full px-4 py-3 rounded-xl" autoComplete="new-password" />
                    </div>
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        </div>
                    )}
                    <button type="submit" disabled={!name.trim() || !surname.trim() || !password.trim()}
                        className="w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ background: 'linear-gradient(135deg,#10b981,#059669)', boxShadow: '0 4px 15px rgba(16,185,129,0.35)' }}>
                        👤 Crea Profilo
                    </button>
                </form>
                <p className="text-center text-slate-400 text-sm mt-8">
                    Hai già un account?{' '}
                    <button type="button" onClick={onSwitchToLogin} className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">Accedi</button>
                </p>
            </div>
        </div>
    );
};

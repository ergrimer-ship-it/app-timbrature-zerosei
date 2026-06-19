import React, { useState, useEffect } from 'react';
import { LoginIcon } from './icons';

interface LoginScreenProps {
    onLogin: (name: string, surname: string, password: string, rememberMe: boolean) => void;
    onSwitchToRegister: () => void;
    error: string | null;
    successMessage?: string | null;
    rememberedCredentials: { name: string; surname: string; password?: string; } | null;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
    onLogin,
    onSwitchToRegister,
    error,
    successMessage,
    rememberedCredentials,
}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        if (rememberedCredentials) {
            setName(rememberedCredentials.name || '');
            setSurname(rememberedCredentials.surname || '');
            setPassword(rememberedCredentials.password || '');
            setRememberMe(true);
        }
    }, [rememberedCredentials]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() && surname.trim() && password.trim()) {
            onLogin(name.trim(), surname.trim(), password.trim(), rememberMe);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#f0f4ff]">
            {/* Blue header */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-6 pt-16 pb-16 text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">⏱</div>
                <h1 className="text-2xl font-bold">ZeroSei Timbrature</h1>
                <p className="text-blue-200 text-sm mt-1">Accedi al tuo account</p>
            </div>

            {/* White form card */}
            <div className="flex-1 -mt-6 bg-white rounded-t-3xl px-6 pt-8 pb-10 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
                <form onSubmit={handleSubmit} className="space-y-5 max-w-sm mx-auto">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Nome</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="es. Mario"
                            className="glass-input w-full px-4 py-3 rounded-xl"
                            autoComplete="given-name"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Cognome</label>
                        <input
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder="es. Rossi"
                            className="glass-input w-full px-4 py-3 rounded-xl"
                            autoComplete="family-name"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="glass-input w-full px-4 py-3 rounded-xl"
                            autoComplete="current-password"
                        />
                    </div>

                    <label className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500"
                        />
                        Ricorda dati di accesso
                    </label>

                    {successMessage && (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 animate-fade-in">
                            <p className="text-emerald-600 text-sm text-center font-medium">{successMessage}</p>
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={!name.trim() || !surname.trim() || !password.trim()}
                        className="glass-button w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <LoginIcon />
                        Accedi
                    </button>
                </form>

                <p className="text-center text-slate-400 text-sm mt-8">
                    Non hai un account?{' '}
                    <button type="button" onClick={onSwitchToRegister} className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                        Crea un profilo
                    </button>
                </p>
            </div>
        </div>
    );
};

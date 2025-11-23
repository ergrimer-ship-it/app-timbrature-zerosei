import React, { useState, useEffect } from 'react';
import { UserIcon, LoginIcon } from './icons';

interface LoginScreenProps {
    onLogin: (name: string, surname: string, password: string, rememberMe: boolean) => void;
    onSwitchToRegister: () => void;
    error: string | null;
    rememberedCredentials: { name: string; surname: string; password?: string; } | null;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
    onLogin,
    onSwitchToRegister,
    error,
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
        <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
            <div className="w-full max-w-md glass-panel rounded-2xl p-8 transform transition-all hover:scale-[1.02] duration-300">
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-gradient-to-br from-indigo-500 to-violet-500 p-4 rounded-2xl mb-4 shadow-lg shadow-indigo-500/30">
                        <UserIcon className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Area Personale</h1>
                    <p className="text-slate-400 mt-2 font-light">Accedi per timbrare il tuo turno</p>
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
                            className="w-full px-4 py-3 glass-input rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
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
                            className="w-full px-4 py-3 glass-input rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
                            autoComplete="family-name"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-slate-300 text-sm font-medium mb-2 ml-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            className="w-full px-4 py-3 glass-input rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
                            autoComplete="current-password"
                        />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <label htmlFor="rememberMe" className="flex items-center text-sm text-slate-400 cursor-pointer hover:text-slate-300 transition-colors">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 text-indigo-600 bg-slate-800 border-slate-600 rounded focus:ring-indigo-500"
                            />
                            <span className="ml-2">Ricorda dati di accesso</span>
                        </label>
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
                    >
                        <LoginIcon />
                        Accedi
                    </button>
                </form>
                <p className="text-center text-slate-400 text-sm mt-8">
                    Non hai un account?{' '}
                    <button type="button" onClick={onSwitchToRegister} className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none">
                        Crea un profilo
                    </button>
                </p>
            </div>
        </div>
    );
};

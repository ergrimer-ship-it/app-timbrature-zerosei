import React, { useState } from 'react';
import { updatePassword } from '../authService';
import type { User } from '../types';

interface ProfileScreenProps {
    user: User | null;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ user }) => {
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState<string | null>(null);

    const handleChangePassword = async () => {
        if (!user) return;
        try {
            await updatePassword(user.email, newPassword);
            setMessage('Password aggiornata con successo');
        } catch (e) {
            setMessage('Errore aggiornamento password');
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Profilo</h2>
            {user && (
                <div className="mb-4 text-gray-200">
                    <p><strong>Nome:</strong> {user.name} {user.surname}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            )}
            <div className="mb-4">
                <input
                    type="password"
                    placeholder="Nuova password"
                    className="w-full p-2 bg-gray-700 text-white rounded"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                />
                <button
                    className="mt-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded"
                    onClick={handleChangePassword}
                >
                    Cambia password
                </button>
            </div>
            {message && <p className="text-green-400">{message}</p>}
        </div>
    );
};

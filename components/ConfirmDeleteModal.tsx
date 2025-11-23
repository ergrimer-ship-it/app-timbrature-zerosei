import React from 'react';

interface ConfirmDeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    userName: string;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ isOpen, onClose, onConfirm, userName }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <div 
                className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-6 relative transform transition-all animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-bold text-white mb-2">Conferma Eliminazione</h2>
                <p className="text-gray-300 mb-6">
                    Sei sicuro di voler eliminare l'utente <span className="font-bold text-yellow-400">{userName}</span>? 
                    Questa azione è irreversibile e cancellerà tutti i dati associati.
                </p>
                <div className="flex justify-end gap-4">
                    <button 
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg transition-colors"
                    >
                        Annulla
                    </button>
                    <button 
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                    >
                        Elimina Utente
                    </button>
                </div>
            </div>
             <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};
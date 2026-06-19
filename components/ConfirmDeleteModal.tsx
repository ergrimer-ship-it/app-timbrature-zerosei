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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-fade-in" onClick={e => e.stopPropagation()}>
                <div className="text-4xl text-center mb-3">⚠️</div>
                <h2 className="text-lg font-bold text-slate-800 text-center mb-2">Conferma Eliminazione</h2>
                <p className="text-slate-500 text-sm text-center mb-6">
                    Sei sicuro di voler eliminare <span className="font-bold text-slate-800">{userName}</span>?
                    Questa azione è irreversibile.
                </p>
                <div className="flex gap-3">
                    <button onClick={onClose}
                        className="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors">
                        Annulla
                    </button>
                    <button onClick={onConfirm}
                        className="flex-1 px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-colors">
                        Elimina
                    </button>
                </div>
            </div>
        </div>
    );
};

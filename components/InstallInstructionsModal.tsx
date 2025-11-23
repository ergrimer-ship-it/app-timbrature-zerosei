import React, { useMemo } from 'react';
import { XCircleIcon, ShareIosIcon, InstallIcon, ThreeDotsIcon } from './icons';

interface InstallInstructionsModalProps {
    onClose: () => void;
}

export const InstallInstructionsModal: React.FC<InstallInstructionsModalProps> = ({ onClose }) => {
    // fix: Cast window to any to access the non-standard MSStream property for iOS detection.
    const isIos = useMemo(() => /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream, []);

    const instructions = isIos ? (
        <>
            <p className="mb-4">Per installare l'app sul tuo dispositivo Apple, segui questi semplici passaggi:</p>
            <ol className="list-decimal list-inside space-y-3 text-left">
                <li>Tocca l'icona di **Condivisione** nella barra del browser Safari. <ShareIosIcon className="w-6 h-6 inline-block mx-1" /></li>
                <li>Scorri verso il basso e seleziona **"Aggiungi a schermata Home"**.</li>
                <li>Tocca **"Aggiungi"** in alto a destra per confermare.</li>
            </ol>
        </>
    ) : (
        <>
            <p className="mb-4">Per installare l'app sul tuo dispositivo, cerca l'opzione nel menu del tuo browser:</p>
            <ol className="list-decimal list-inside space-y-3 text-left">
                <li>Tocca l'icona del **Menu** (di solito tre puntini) in alto a destra. <ThreeDotsIcon className="w-6 h-6 inline-block mx-1" /></li>
                <li>Cerca e seleziona l'opzione **"Installa app"** o **"Aggiungi a schermata Home"**. <InstallIcon className="w-5 h-5 inline-block mx-1" /></li>
                <li>Segui le istruzioni per completare l'installazione.</li>
            </ol>
        </>
    );

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-6 relative transform transition-all animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    aria-label="Chiudi modale"
                >
                    <XCircleIcon className="w-8 h-8" />
                </button>
                <h2 className="text-2xl font-bold text-white mb-4">Come Installare l'App</h2>
                <div className="text-gray-300 text-center">
                    {instructions}
                </div>
                <button
                    onClick={onClose}
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300"
                >
                    Ho capito
                </button>
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

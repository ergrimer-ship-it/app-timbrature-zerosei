import React, { useState, useEffect } from 'react';
import type { User, Document } from '../types';
import { DocumentIcon, UploadIcon, DownloadIcon, TrashIcon, UsersIcon } from './icons';
import { addUserDocumentLink, getUserDocuments, deleteUserDocument } from '../services/dbService';
import { createNotification } from '../services/localNotificationService';

interface DocumentsScreenProps {
    user: User;
    allUsers?: User[]; // Only for admin
}

export const DocumentsScreen: React.FC<DocumentsScreenProps> = ({ user, allUsers }) => {
    const [selectedUser, setSelectedUser] = useState<User | null>(user.isAdmin ? null : user);
    const [documents, setDocuments] = useState<Document[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    // Form state for adding document link
    const [documentName, setDocumentName] = useState('');
    const [documentUrl, setDocumentUrl] = useState('');

    // If not admin, always select self
    useEffect(() => {
        if (!user.isAdmin) {
            setSelectedUser(user);
        }
    }, [user]);

    // Load documents when a user is selected
    useEffect(() => {
        if (selectedUser) {
            loadDocuments(selectedUser.id);
        } else {
            setDocuments([]);
        }
    }, [selectedUser]);

    const loadDocuments = async (userId: string) => {
        try {
            const docs = await getUserDocuments(userId);
            setDocuments(docs);
        } catch (error) {
            console.error("Error loading documents:", error);
        }
    };

    const handleAddDocument = async () => {
        if (!selectedUser || !documentName.trim() || !documentUrl.trim()) {
            setUploadError("Inserisci sia il nome che il link del documento.");
            return;
        }

        setUploadError(null);

        try {
            await addUserDocumentLink(selectedUser.id, documentName.trim(), documentUrl.trim(), user.id);
            await loadDocuments(selectedUser.id); // Refresh list

            // Send notification to user
            await createNotification(
                'document_upload',
                selectedUser.id,
                `${selectedUser.name} ${selectedUser.surname}`,
                `Nuovo documento disponibile: ${documentName.trim()}`
            );

            setDocumentName('');
            setDocumentUrl('');
            setIsAdding(false);
        } catch (error: any) {
            console.error("Add failed:", error);
            setUploadError("Errore durante l'aggiunta del documento.");
        }
    };

    const handleDelete = async (docId: string) => {
        if (!selectedUser || !confirm("Sei sicuro di voler eliminare questo documento?")) return;

        try {
            await deleteUserDocument(selectedUser.id, docId);
            setDocuments(prev => prev.filter(d => d.id !== docId));
        } catch (error) {
            console.error("Delete failed:", error);
            alert("Errore durante l'eliminazione.");
        }
    };

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-white mb-2">Documenti</h1>
                <p className="text-slate-400">
                    {user.isAdmin
                        ? "Aggiungi link ai documenti dei dipendenti (es. buste paga su Google Drive)."
                        : "Visualizza e scarica i tuoi documenti."}
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Admin: User Selection List */}
                {user.isAdmin && allUsers && (
                    <div className="lg:col-span-1 glass-panel p-6 rounded-3xl shadow-lg h-fit">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                            <UsersIcon className="text-indigo-400" /> Dipendenti
                        </h2>
                        <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
                            {allUsers.map(u => (
                                <div
                                    key={u.id}
                                    onClick={() => setSelectedUser(u)}
                                    className={`p-3 rounded-xl cursor-pointer transition-all flex items-center gap-3 border ${selectedUser?.id === u.id
                                        ? 'bg-indigo-500/20 border-indigo-500/50 text-white'
                                        : 'bg-slate-800/40 border-slate-700/50 text-slate-300 hover:bg-slate-800/80'
                                        }`}
                                >
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">
                                        {u.name.charAt(0)}{u.surname.charAt(0)}
                                    </div>
                                    <span className="truncate font-medium">{u.name} {u.surname}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Documents List & Add */}
                <div className={`${user.isAdmin ? 'lg:col-span-2' : 'lg:col-span-3'} glass-panel p-6 rounded-3xl shadow-lg`}>
                    {selectedUser ? (
                        <>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                                <div>
                                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                        <DocumentIcon className="text-indigo-400" />
                                        Documenti di {selectedUser.name}
                                    </h2>
                                </div>

                                {/* Admin Add Button */}
                                {user.isAdmin && !isAdding && (
                                    <button
                                        onClick={() => setIsAdding(true)}
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 transition-all"
                                    >
                                        <UploadIcon className="w-5 h-5" /> Aggiungi Documento
                                    </button>
                                )}
                            </div>

                            {/* Add Document Form */}
                            {isAdding && user.isAdmin && (
                                <div className="mb-6 p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Nome Documento</label>
                                        <input
                                            type="text"
                                            value={documentName}
                                            onChange={(e) => setDocumentName(e.target.value)}
                                            placeholder="es. Busta Paga Novembre 2024"
                                            className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Link Documento</label>
                                        <input
                                            type="url"
                                            value={documentUrl}
                                            onChange={(e) => setDocumentUrl(e.target.value)}
                                            placeholder="https://drive.google.com/file/d/..."
                                            className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleAddDocument}
                                            className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors"
                                        >
                                            Salva
                                        </button>
                                        <button
                                            onClick={() => {
                                                setIsAdding(false);
                                                setDocumentName('');
                                                setDocumentUrl('');
                                                setUploadError(null);
                                            }}
                                            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors"
                                        >
                                            Annulla
                                        </button>
                                    </div>
                                </div>
                            )}

                            {uploadError && (
                                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                    {uploadError}
                                </div>
                            )}

                            <div className="space-y-3">
                                {documents.length > 0 ? (
                                    documents.map(doc => (
                                        <div key={doc.id} className="flex items-center justify-between p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:bg-slate-800/60 transition-colors group">
                                            <div className="flex items-center gap-4 overflow-hidden">
                                                <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-indigo-400">
                                                    <DocumentIcon className="w-6 h-6" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="font-medium text-slate-200 truncate">{doc.fileName}</p>
                                                    <p className="text-xs text-slate-500">
                                                        Aggiunto il {new Date(doc.uploadDate).toLocaleDateString('it-IT')}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <a
                                                    href={doc.fileUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-colors"
                                                    title="Apri"
                                                >
                                                    <DownloadIcon className="w-5 h-5" />
                                                </a>

                                                {user.isAdmin && (
                                                    <button
                                                        onClick={() => handleDelete(doc.id)}
                                                        className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                                        title="Elimina"
                                                    >
                                                        <TrashIcon className="w-5 h-5" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-12 text-slate-500">
                                        <DocumentIcon className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                        <p>Nessun documento presente.</p>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-20 text-slate-500">
                            <UsersIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                            <p className="text-lg">Seleziona un dipendente per gestire i documenti.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

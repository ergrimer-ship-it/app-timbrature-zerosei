import React, { useState, useEffect } from 'react';
import type { User, Document } from '../types';
import { addUserDocumentLink, getUserDocuments, deleteUserDocument } from '../services/dbService';
import { createNotification } from '../services/localNotificationService';

interface DocumentsScreenProps {
    user: User;
    allUsers?: User[];
}

const AVATAR_GRADIENTS = [
    'from-blue-500 to-indigo-600', 'from-emerald-500 to-teal-600',
    'from-violet-500 to-purple-600', 'from-orange-500 to-amber-500',
    'from-rose-500 to-pink-600', 'from-cyan-500 to-sky-600',
];

export const DocumentsScreen: React.FC<DocumentsScreenProps> = ({ user, allUsers }) => {
    const [selectedUser, setSelectedUser] = useState<User | null>(user.isAdmin ? null : user);
    const [documents, setDocuments] = useState<Document[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [documentName, setDocumentName] = useState('');
    const [documentUrl, setDocumentUrl] = useState('');

    useEffect(() => { if (!user.isAdmin) setSelectedUser(user); }, [user]);
    useEffect(() => { if (selectedUser) loadDocuments(selectedUser.id); else setDocuments([]); }, [selectedUser]);

    const loadDocuments = async (userId: string) => {
        try { setDocuments(await getUserDocuments(userId)); } catch { console.error('Error loading documents'); }
    };

    const handleAddDocument = async () => {
        if (!selectedUser || !documentName.trim() || !documentUrl.trim()) {
            setUploadError('Inserisci sia il nome che il link del documento.'); return;
        }
        setUploadError(null);
        try {
            await addUserDocumentLink(selectedUser.id, documentName.trim(), documentUrl.trim(), user.id);
            await loadDocuments(selectedUser.id);
            await createNotification('document_upload', selectedUser.id, `${selectedUser.name} ${selectedUser.surname}`, `Nuovo documento: ${documentName.trim()}`);
            setDocumentName(''); setDocumentUrl(''); setIsAdding(false);
        } catch { setUploadError("Errore durante l'aggiunta del documento."); }
    };

    const handleDelete = async (docId: string) => {
        if (!selectedUser || !confirm('Eliminare questo documento?')) return;
        try { await deleteUserDocument(selectedUser.id, docId); setDocuments(prev => prev.filter(d => d.id !== docId)); }
        catch { alert("Errore durante l'eliminazione."); }
    };

    const sortedUsers = allUsers ? [...allUsers].sort((a, b) =>
        `${a.surname} ${a.name}`.localeCompare(`${b.surname} ${b.name}`, 'it')
    ) : [];

    return (
        <div className="space-y-5">
            <div className="screen-header rounded-b-3xl">
                <h1 className="text-2xl font-bold">📄 Documenti</h1>
                <p className="text-blue-200 text-sm mt-1">
                    {user.isAdmin ? 'Gestisci i documenti dei dipendenti' : 'I tuoi documenti'}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Admin user list */}
                {user.isAdmin && allUsers && (
                    <div className="glass-panel rounded-2xl overflow-hidden h-fit">
                        <div className="px-4 py-3 border-b border-slate-100">
                            <h2 className="font-bold text-slate-800 text-sm">👥 Dipendenti</h2>
                        </div>
                        <div className="divide-y divide-slate-100 max-h-96 overflow-y-auto">
                            {sortedUsers.map((u, i) => (
                                <div key={u.id} onClick={() => setSelectedUser(u)}
                                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
                                        selectedUser?.id === u.id ? 'bg-blue-50' : 'hover:bg-slate-50'
                                    }`}>
                                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                                        {u.name.charAt(0)}{u.surname.charAt(0)}
                                    </div>
                                    <span className={`text-sm font-medium truncate ${selectedUser?.id === u.id ? 'text-blue-700 font-semibold' : 'text-slate-700'}`}>
                                        {u.name} {u.surname}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Documents panel */}
                <div className={`${user.isAdmin ? 'lg:col-span-2' : 'lg:col-span-3'} glass-panel rounded-2xl p-5`}>
                    {selectedUser ? (
                        <>
                            <div className="flex items-center justify-between mb-5">
                                <h2 className="font-bold text-slate-800">
                                    📄 Documenti di {selectedUser.name}
                                </h2>
                                {user.isAdmin && !isAdding && (
                                    <button onClick={() => setIsAdding(true)}
                                        className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors">
                                        ⬆️ Aggiungi
                                    </button>
                                )}
                            </div>

                            {isAdding && user.isAdmin && (
                                <div className="mb-5 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Nuovo Documento</p>
                                    <div>
                                        <label className="text-xs text-slate-500 block mb-1">Nome Documento</label>
                                        <input type="text" value={documentName} onChange={e => setDocumentName(e.target.value)}
                                            placeholder="es. Busta Paga Novembre 2024"
                                            className="glass-input w-full px-3 py-2 rounded-xl text-sm" />
                                    </div>
                                    <div>
                                        <label className="text-xs text-slate-500 block mb-1">Link Documento</label>
                                        <input type="url" value={documentUrl} onChange={e => setDocumentUrl(e.target.value)}
                                            placeholder="https://drive.google.com/..."
                                            className="glass-input w-full px-3 py-2 rounded-xl text-sm" />
                                        <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-700">
                                            <p className="font-semibold mb-1">💡 Google Drive — come condividere:</p>
                                            <ol className="list-decimal ml-4 space-y-0.5 text-blue-600">
                                                <li>Click destro sul file → "Condividi"</li>
                                                <li>Imposta "Chiunque con il link può visualizzare"</li>
                                                <li>Copia il link e incollalo qui</li>
                                            </ol>
                                        </div>
                                    </div>
                                    {uploadError && <p className="text-red-500 text-xs">{uploadError}</p>}
                                    <div className="flex gap-2">
                                        <button onClick={handleAddDocument}
                                            className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors">
                                            💾 Salva
                                        </button>
                                        <button onClick={() => { setIsAdding(false); setDocumentName(''); setDocumentUrl(''); setUploadError(null); }}
                                            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-xl text-sm transition-colors">
                                            Annulla
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                {documents.length > 0 ? documents.map(doc => (
                                    <div key={doc.id} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-colors">
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">📄</div>
                                            <div className="min-w-0">
                                                <p className="font-semibold text-slate-800 text-sm truncate">{doc.fileName}</p>
                                                <p className="text-xs text-slate-400">
                                                    Aggiunto il {new Date(doc.uploadDate).toLocaleDateString('it-IT')}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                                            <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer"
                                                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors text-lg">
                                                🔗
                                            </a>
                                            {user.isAdmin && (
                                                <button onClick={() => handleDelete(doc.id)}
                                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors text-lg">
                                                    🗑️
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )) : (
                                    <div className="text-center py-12">
                                        <div className="text-5xl mb-3">📄</div>
                                        <p className="text-slate-400">Nessun documento presente.</p>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-5xl mb-3">👥</div>
                            <p className="text-slate-500">Seleziona un dipendente per gestire i documenti.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

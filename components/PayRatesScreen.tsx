import React, { useState, useEffect } from 'react';
import type { PayRateRule } from '../types';
import { getPayRates, savePayRates } from '../services/dbService';

const DEFAULT_RULES: PayRateRule[] = [
    { id: 'consegnatore_macchina_pizzeria', role: 'Consegnatore', shiftType: 'macchina_pizzeria', dayBracket: 'all', rate: 8 },
    { id: 'consegnatore_macchina_propria', role: 'Consegnatore', shiftType: 'macchina_propria', dayBracket: 'all', rate: 10 },
    { id: 'banchista_cassa_weekday', role: 'Banchista', shiftType: 'cassa', dayBracket: 'weekday', rate: 9 },
    { id: 'banchista_cassa_weekend', role: 'Banchista', shiftType: 'cassa', dayBracket: 'weekend', rate: 10 },
    { id: 'banchista_standard', role: 'Banchista', shiftType: 'standard', dayBracket: 'all', rate: 8 },
    { id: 'pizzaiolo_standard', role: 'Pizzaiolo', shiftType: 'standard', dayBracket: 'all', rate: 7 },
];

const SHIFT_TYPE_LABELS: Record<string, string> = {
    standard: 'Standard',
    cassa: 'Cassa',
    macchina_propria: 'Macchina Propria',
    macchina_pizzeria: 'Macchina Pizzeria',
};

const DAY_BRACKET_LABELS: Record<string, string> = {
    all: 'Tutti i giorni',
    weekday: 'Lun–Ven',
    weekend: 'Sab–Dom',
};

export const PayRatesScreen: React.FC = () => {
    const [rules, setRules] = useState<PayRateRule[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const existing = await getPayRates();
                setRules(existing.length > 0 ? existing : DEFAULT_RULES);
            } finally { setLoading(false); }
        };
        load();
    }, []);

    const handleRateChange = (id: string, value: string) => {
        const rate = parseFloat(value);
        setRules(prev => prev.map(r => r.id === id ? { ...r, rate: isNaN(rate) ? 0 : rate } : r));
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await savePayRates(rules);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch {
            alert('Errore durante il salvataggio delle tariffe.');
        } finally { setSaving(false); }
    };

    if (loading) return <div className="text-center py-12 text-slate-400 animate-pulse">Caricamento...</div>;

    return (
        <div className="space-y-5">
            <div className="screen-header rounded-b-3xl">
                <h1 className="text-2xl font-bold">💶 Tariffe Orarie</h1>
                <p className="text-blue-200 text-sm mt-1">Paga per ruolo, tipo timbratura e giorno</p>
            </div>

            <div className="glass-panel rounded-2xl p-5 space-y-3">
                {rules.map(rule => (
                    <div key={rule.id} className="flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3">
                        <div>
                            <p className="font-semibold text-slate-800 text-sm">{rule.role} · {SHIFT_TYPE_LABELS[rule.shiftType] ?? rule.shiftType}</p>
                            <p className="text-xs text-slate-400">{DAY_BRACKET_LABELS[rule.dayBracket] ?? rule.dayBracket}</p>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                            <input
                                type="number"
                                min="0"
                                step="0.5"
                                value={rule.rate}
                                onChange={e => handleRateChange(rule.id, e.target.value)}
                                className="w-20 px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <span className="text-sm text-slate-500 font-semibold">€/h</span>
                        </div>
                    </div>
                ))}

                {saved && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2 text-emerald-700 text-sm text-center font-semibold">
                        ✅ Tariffe salvate!
                    </div>
                )}

                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="w-full py-2.5 rounded-xl font-bold text-white text-sm glass-button disabled:opacity-50"
                >
                    {saving ? 'Salvataggio...' : '💾 Salva Tariffe'}
                </button>

                <p className="text-xs text-slate-400 text-center pt-2">
                    Le modifiche valgono solo per i turni completati da questo momento in poi — i turni già chiusi mantengono la tariffa con cui sono stati calcolati.
                </p>
            </div>
        </div>
    );
};

# App Timbrature Dipendenti

Questa è un'applicazione web completa progettata per la gestione delle presenze dei dipendenti. Consente ai dipendenti di timbrare l'inizio e la fine dei loro turni e agli amministratori di gestire gli utenti, pianificare i turni e modificare le timbrature esistenti.

L'applicazione è costruita come una Single Page Application (SPA) utilizzando **React** e **TypeScript**, con uno stile moderno realizzato con **Tailwind CSS**. Tutti i dati vengono salvati localmente nel browser utilizzando `localStorage`, rendendola una soluzione front-end autonoma senza la necessità di un database o di un back-end.

## Funzionalità Principali

### Per i Dipendenti
- **Autenticazione Sicura**: Sistema di registrazione e login basato su nome, cognome e password.
- **Ricorda Dati**: Funzione per salvare le credenziali di accesso per un login più rapido.
- **Dashboard Intuitiva**: Una schermata principale che mostra lo stato attuale del turno.
- **Timbratura Semplice**: Un singolo pulsante per timbrare l'entrata e l'uscita.
- **Note di Turno**: Possibilità di aggiungere note specifiche (es. "Cassa", "Macchina Propria") all'inizio di un turno.
- **Calendario Interattivo**: Visualizzazione mensile delle ore lavorate, con totali giornalieri e mensili.
- **Dettaglio Turni**: Cliccando su un giorno nel calendario, è possibile visualizzare i dettagli di tutti i turni di quella giornata.
- **Visualizzazione Turni Assegnati**: Una sezione dedicata per consultare i turni pianificati dall'amministratore.

### Per l'Amministratore
- **Pannello di Amministrazione**: Un'area riservata accessibile tramite credenziali di amministratore.
- **Gestione Utenti**: Visualizzazione di tutti gli utenti registrati, con la possibilità di eliminare i loro profili.
- **Visualizzazione Dati Utente**: Accesso in sola lettura al calendario di ogni dipendente.
- **Modifica delle Timbrature**: Possibilità di modificare o eliminare le singole timbrature dei dipendenti per correggere errori.
- **Pianificazione Turni**: Un'interfaccia visiva per assegnare turni ai dipendenti per ogni giorno del mese.

### Installazione come App (PWA - Progressive Web App)
- **Supporto Offline**: L'applicazione continua a funzionare anche senza una connessione a internet grazie a un Service Worker che mette in cache le risorse.
- **Installabile**: Può essere "installata" sulla schermata principale di smartphone, tablet e computer desktop per un accesso rapido, comportandosi come un'app nativa.
- **Look & Feel Nativo**: Una volta installata, si apre in una finestra dedicata senza la barra degli indirizzi del browser.

## Stack Tecnologico
- **Libreria UI**: [React](https://react.dev/)
- **Linguaggio**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Storage**: Browser `localStorage`

---

## Per Iniziare (Eseguire l'App in Locale)

Prima di pubblicare l'app, puoi eseguirla sul tuo computer per testarla.

**Prerequisiti:**
- [Node.js](https://nodejs.org/) (versione 18 o superiore)
- [Git](https://git-scm.com/)

**Passaggi:**
1.  **Clona il repository** o scarica i file in una cartella sul tuo computer.
2.  **Apri il terminale** in quella cartella.
3.  **Installa le dipendenze** con il comando:
    ```bash
    npm install
    ```
4.  **Avvia l'applicazione** in modalità sviluppo:
    ```bash
    npm run dev
    ```
5.  Apri il link che appare nel terminale (di solito `http://localhost:5173`) nel tuo browser.

---

## Credenziali di Accesso Admin

Per accedere al pannello di amministrazione (sia in locale che online), utilizza le seguenti credenziali di default:

- **Nome:** `Andrea`
- **Cognome:** `Grimaldi`
- **Password:** `2marzo2021`

*Puoi modificare queste credenziali direttamente nel file `App.tsx` all'interno dell'array `MOCK_USERS_WITH_PASSWORDS`.*

---

## Pubblicazione su GitHub Pages (Metodo Automatico)

Per mettere la tua applicazione online, il processo è quasi completamente automatico grazie al file di workflow (`.github/workflows/deploy.yml`) già presente nel progetto.

Segui questi 3 semplici passaggi:

### Passaggio 1: Configura il Nome del Tuo Repository (Obbligatorio)

Questo è **l'unico passaggio di configurazione manuale** che devi fare.
1.  Apri il file `vite.config.ts`.
2.  Trova la riga `base: '/gestionale-dipendenti/'`.
3.  **Sostituisci `gestionale-dipendenti` con il nome esatto del tuo repository su GitHub.** Il nome deve iniziare e finire con una barra `/`.

    *Esempio:* Se l'URL del tuo repository è `https://github.com/MarioRossi/app-pizzeria`, la riga dovrà diventare:
    ```typescript
    base: '/app-pizzeria/',
    ```
4.  Salva il file.

### Passaggio 2: Carica il Progetto su GitHub

Se non l'hai già fatto, carica tutti i file del progetto sul tuo repository GitHub. Usa i comandi Git dal tuo terminale:
```bash
# Aggiunge tutti i file
git add .

# Salva le modifiche con un messaggio
git commit -m "Configuro e carico il progetto per la pubblicazione"

# Carica i file su GitHub
git push
```
**Questo `push` avvierà automaticamente il processo di pubblicazione.**

### Passaggio 3: Trova la Tua App Online

1.  Vai sul tuo repository GitHub e clicca sulla scheda **"Actions"**. Vedrai un processo (chiamato "workflow") in esecuzione con un'icona gialla.
2.  Attendi che il processo finisca (l'icona diventerà una spunta verde ✔️). Potrebbe richiedere 1-2 minuti.
3.  Una volta completato, vai su **"Settings" > "Pages"**.
4.  Troverai un banner con il link alla tua app pubblicata! Cliccalo per vederla online.

È tutto! D'ora in poi, ogni volta che caricherai nuove modifiche con `git push`, l'app si aggiornerà online automaticamente.
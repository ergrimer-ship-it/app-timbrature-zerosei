
export type UserRole = 'Banchista' | 'Pizzaiolo' | 'Consegnatore';

export const USER_ROLES: UserRole[] = ['Banchista', 'Pizzaiolo', 'Consegnatore'];

export const ROLE_COLORS: Record<UserRole, { bg: string; text: string; border: string }> = {
    Banchista:    { bg: 'bg-blue-100',   text: 'text-blue-700',   border: 'border-blue-300' },
    Pizzaiolo:    { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' },
    Consegnatore: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300' },
};

export interface User {
  id: string;
  name: string; // First Name
  surname: string; // Last Name
  email: string;
  password?: string;
  isAdmin?: boolean;
  fcmToken?: string;
  role?: UserRole;
}

export interface PublicUser {
  id: string;
  name: string;
  surname: string;
}

export type ShiftType = 'standard' | 'cassa' | 'macchina_propria' | 'macchina_pizzeria';

export interface Shift {
  id: string;
  startTime: string;
  endTime: string | null;
  tags?: string[];
  type?: ShiftType; // Optional for backward compatibility
}

// fix: Added AssignedShift interface for the shift planner feature
export interface AssignedShift {
  id: string;
  date: string; // YYYY-MM-DD format
  userId: string;
  startTime: string; // HH:mm format
  endTime?: string;  // HH:mm format
}

export interface Document {
  id: string;
  userId: string;
  fileName: string;
  fileUrl: string;
  uploadDate: string; // ISO string
  uploadedBy: string; // Admin ID
}

// Anticipo sullo stipendio
export interface SalaryAdvance {
  id: string;
  userId: string;
  amount: number;
  date: string; // ISO string
  notes: string;
  createdAt: string; // ISO string
}

// Permesso futuro confermato
export interface FutureLeave {
  id: string;
  userId: string;
  startDate: string; // YYYY-MM-DD
  endDate?: string;  // YYYY-MM-DD - opzionale per permessi di un solo giorno
  createdAt: string; // ISO string
}

// Richiesta permesso (inviata dal dipendente, in attesa di approvazione)
export interface LeaveRequest {
  id: string;
  userId: string;
  userName: string; // "Nome Cognome" — usato nelle notifiche
  startDate: string; // YYYY-MM-DD
  endDate?: string;  // YYYY-MM-DD
  notes?: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: string; // ISO string
  reviewedAt?: string; // ISO string
}

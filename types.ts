
export interface User {
  id: string;
  name: string; // First Name
  surname: string; // Last Name
  email: string;
  password: string;
  // fix: Added optional isAdmin property for admin user checks
  isAdmin?: boolean;
  // FCM token for push notifications
  fcmToken?: string;
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

// Permesso futuro
export interface FutureLeave {
  id: string;
  userId: string;
  startDate: string; // ISO string (YYYY-MM-DD)
  endDate?: string; // ISO string (YYYY-MM-DD) - opzionale per permessi di un solo giorno
  createdAt: string; // ISO string
}

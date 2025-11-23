
export interface User {
  id: string;
  name: string; // First Name
  surname: string; // Last Name
  password?: string;
  // fix: Added optional isAdmin property for admin user checks
  isAdmin?: boolean;
}

export interface Shift {
  id: string;
  startTime: string; // ISO 8601 string format
  endTime: string | null; // ISO 8601 string format or null
  tags?: {
    cassa?: boolean;
    macchinaPropria?: boolean;
    macchinaPizzeria?: boolean;
  };
}

// fix: Added AssignedShift interface for the shift planner feature
export interface AssignedShift {
  id: string;
  date: string; // YYYY-MM-DD format
  userId: string;
  startTime: string; // HH:mm format
}

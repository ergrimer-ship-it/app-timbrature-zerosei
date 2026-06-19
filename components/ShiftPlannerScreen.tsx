import React from 'react';
import { ShiftPlanner } from './ShiftPlanner';
import type { User, AssignedShift } from '../types';

interface ShiftPlannerScreenProps {
    allUsers: User[];
    assignedShifts: AssignedShift[];
    onSaveShifts: (shifts: AssignedShift[]) => void;
}

export const ShiftPlannerScreen: React.FC<ShiftPlannerScreenProps> = ({ allUsers, assignedShifts, onSaveShifts }) => {
    return (
        <ShiftPlanner
            allUsers={allUsers}
            assignedShifts={assignedShifts}
            onSaveShifts={onSaveShifts}
        />
    );
};

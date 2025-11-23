
export const formatDuration = (start: Date, end: Date | null): string => {
  if (!end) return "In corso...";
  const diffMs = end.getTime() - start.getTime();
  if (diffMs < 0) return "N/A";

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m`;
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
};

export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export const isSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
};

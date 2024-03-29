import moment from "moment";


export function formatDate(date: string, type: 'long' | 'short' = 'long') {
  const dateToFormat = new Date(date);

  return Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: type,
    year: 'numeric',
  }).format(dateToFormat);
}

export function formatDistance(date: string) {
  return moment(new Date(date)).fromNow();
}

export function getMonthName(month: number) {
  return moment(month+1, 'M').format('MMMM');
}

export function formatFromDate(date: Date) {
  return Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(date);
}

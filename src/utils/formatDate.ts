export function formatDate(date: string) {
  const dateToFormat = new Date(date);

  return Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(dateToFormat);
}

export function formatFromDate(date: Date) {
  return Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(date);
}

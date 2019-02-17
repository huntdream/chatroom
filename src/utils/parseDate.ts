export default function parseDate(locale: string, date: string) {
  const d = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return d.toLocaleDateString(locale, options);
}

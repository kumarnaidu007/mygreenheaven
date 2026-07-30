export function cn(...values) {
  return values.filter(Boolean).join(' ')
}

export function formatDate(value, locale = 'en-IN') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(value))
}

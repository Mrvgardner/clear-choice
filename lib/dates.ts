const DATE_ONLY_PATTERN = /^\d{4}-\d{2}-\d{2}$/

export function parseContentDate(value?: string): Date | null {
  if (!value) return null

  const date = new Date(DATE_ONLY_PATTERN.test(value) ? `${value}T12:00:00` : value)
  return Number.isNaN(date.getTime()) ? null : date
}

export function formatContentDate(value?: string): string {
  const date = parseContentDate(value)
  if (!date) return ''

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

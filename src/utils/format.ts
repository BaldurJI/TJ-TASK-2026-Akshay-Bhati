/**
 * Formats large numbers into a compact, readable form (1234 -> "1.2k").
 */
export function formatCount(value: number): string {
  if (!Number.isFinite(value)) {
    return '0';
  }

  if (value >= 1_000_000) {
    return `${trimTrailingZero(value / 1_000_000)}M`;
  }

  if (value >= 1_000) {
    return `${trimTrailingZero(value / 1_000)}k`;
  }

  return String(value);
}

/**
 * Formats an ISO date string (e.g. "2011-01-25T18:44:36Z") into a readable date.
 */
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);

  if (Number.isNaN(date.getTime())) {
    return 'Unknown';
  }

  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function trimTrailingZero(value: number): string {
  return value.toFixed(1).replace(/\.0$/, '');
}

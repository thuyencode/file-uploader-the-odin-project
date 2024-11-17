const MILLISECONDS_PER_MINUTE = 1000

export const monthsToMilliseconds = (months: number): number =>
  MILLISECONDS_PER_MINUTE * 60 * 24 * months

const MILLISECONDS_PER_MINUTE = 1000

export const monthsToMilliseconds = (months: number) => {
  return MILLISECONDS_PER_MINUTE * 60 * 24 * months
}

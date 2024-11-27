export const capitalize = (str: string): string =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`

export const bytesToMB = (bytes: number): number => bytes / (1024 * 1024)

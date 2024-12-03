import type { UploadedFile } from '@prisma/client'

export const capitalize = (str: string): string =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`

export const bytesToMB = (bytes: number): number => bytes / (1024 * 1024)

/**
 * Get the type and subtype from a mime type string.
 * Check this [docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types#structure_of_a_mime_type).
 *
 * @param {string} mimetype
 * @returns {(string | null)}
 */
export const getTypeAndSubtype = (mimetype: string): string[] =>
  mimetype.split('/')

export const getFileSharingURL = (fileId: UploadedFile['id']): string =>
  `${document.location.protocol}//${document.location.host}/files/${fileId}`

export const getFileDownloadURL = (fileId: UploadedFile['id']): string =>
  `${document.location.protocol}//${document.location.host}/api/files/${fileId}/download`

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

const MIME_TYPE_ICONS: Record<string, string> = {
  application: 'clarity:application-line',
  audio: 'material-symbols:audio-file-outline',
  font: 'bi:file-earmark-font',
  image: 'mdi:file-image-outline',
  model: 'tabler:file-3d',
  text: 'mdi:file-text-outline',
  video: 'material-symbols:video-file-outline'
}

export const getMimeTypeIcon = (type: string): string =>
  MIME_TYPE_ICONS[type] ? MIME_TYPE_ICONS[type] : 'mdi:file-outline'

export const lineClamp = (text: string): string =>
  text.length > 40 ? `${text.slice(0, 41)}...` : text

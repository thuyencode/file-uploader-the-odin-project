import type { UploadedFile } from '@/server/db/UploadedFile.db'

export const checkIfDownloadable = (
  file: UploadedFile,
  user?: Express.User
): boolean => !(!file.shareable || (user && user.id !== file.userId))

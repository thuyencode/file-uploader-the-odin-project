import type { UploadedFile } from '@prisma/client'

export const checkIfDownloadable = (
  file: UploadedFile,
  user?: Express.User
): boolean => (user && user.id === file.userId) ?? file.shareable

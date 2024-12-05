import type { UploadedFile } from '@prisma/client'

export const checkIfDownloadable = (
  file: UploadedFile,
  user?: Express.User
): boolean => file.shareable || user?.id === file.userId

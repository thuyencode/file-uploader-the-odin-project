import type { UploadedFile } from '@prisma/client'
import type { FileConfigurationInput } from '../types/file'
import prisma from './client'

const findById = async (id: string): Promise<UploadedFile | null> =>
  await prisma.uploadedFile.findUnique({ where: { id } })

const findByUserId = async (userId: string): Promise<UploadedFile[]> =>
  await prisma.uploadedFile.findMany({
    where: { userId }
  })

const insert = async (
  newUploadedFile: Omit<UploadedFile, 'id' | 'created_date' | 'updated_date'>
): Promise<UploadedFile> =>
  await prisma.uploadedFile.create({ data: newUploadedFile })

const updateById = async (
  id: string,
  fileConfiguration: FileConfigurationInput
): Promise<UploadedFile> =>
  await prisma.uploadedFile.update({
    where: { id },
    data: fileConfiguration
  })

export const UploadedFileDB = {
  findById,
  findByUserId,
  insert,
  updateById
}

import type { FileConfigurationInput } from '@/server/types/file'
import type { UploadedFile } from '@prisma/client'
import baseApi from './base-api'

const getFiles = async (signal?: AbortSignal): Promise<UploadedFile[]> =>
  (await baseApi.get<UploadedFile[]>('/files', { signal })).data

const postFileConfig = async (
  id: UploadedFile['id'],
  fileConfigurationInput: FileConfigurationInput
): Promise<UploadedFile> =>
  (await baseApi.post<UploadedFile>(`/files/${id}`, fileConfigurationInput))
    .data

const getFile = async (
  id: UploadedFile['id'],
  signal?: AbortSignal
): Promise<UploadedFile> =>
  (await baseApi.get<UploadedFile>(`/files/${id}`, { signal })).data

const FilesApi = { getFiles, postFileConfig, getFile }

export default FilesApi

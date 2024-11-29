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

const FilesApi = { getFiles, postFileConfig }

export default FilesApi

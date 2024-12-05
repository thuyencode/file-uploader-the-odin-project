import type { FileConfigurationInput } from '@/server/types/file'
import type { UploadedFile } from '@prisma/client'
import baseApi from './base-api'

const getFiles = async (signal?: AbortSignal): Promise<UploadedFile[]> =>
  (await baseApi.get<UploadedFile[]>('/api/files', { signal })).data

const postFileConfig = async (
  id: UploadedFile['id'],
  fileConfigurationInput: FileConfigurationInput
): Promise<UploadedFile> =>
  (await baseApi.post<UploadedFile>(`/api/files/${id}`, fileConfigurationInput))
    .data

const getFile = async (
  id: UploadedFile['id'],
  signal?: AbortSignal
): Promise<UploadedFile> =>
  (await baseApi.get<UploadedFile>(`/api/files/${id}`, { signal })).data

const postFileUpload = async (
  formData: FormData,
  progressCallback?: (progress: number) => void,
  signal?: AbortSignal
): Promise<UploadedFile> =>
  (
    await baseApi.post<UploadedFile>(`/api/files/upload`, formData, {
      signal,
      onUploadProgress(progressEvent) {
        if (!progressCallback) {
          return
        }

        const progress = progressEvent.total
          ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
          : 0

        progressCallback(progress)
      }
    })
  ).data

const FilesApi = { getFiles, postFileConfig, getFile, postFileUpload }

export default FilesApi

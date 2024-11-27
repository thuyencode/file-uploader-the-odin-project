import type { UploadedFile } from '@prisma/client'
import baseApi from './base-api'

const getFiles = async (signal?: AbortSignal): Promise<UploadedFile[]> =>
  (await baseApi.get<UploadedFile[]>('/files', { signal })).data

const FilesApi = { getFiles }

export default FilesApi

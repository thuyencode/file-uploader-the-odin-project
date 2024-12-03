/* eslint-disable @typescript-eslint/explicit-function-return-type -- This is ok */
import FilesApi from '@/client/apis/files.api'
import { QUERY_KEYS } from '@/client/libs/constants'
import type { UploadedFile } from '@prisma/client'
import { queryOptions } from '@tanstack/react-query'

export const filesQueryOptions = queryOptions({
  queryKey: [QUERY_KEYS.FILES],
  queryFn: async ({ signal }) => await FilesApi.getFiles(signal)
})

export const fileIdQueryOptions = (id: UploadedFile['id']) =>
  queryOptions({
    queryKey: [QUERY_KEYS.FILES, id],
    queryFn: async ({ signal }) => await FilesApi.getFile(id, signal)
  })

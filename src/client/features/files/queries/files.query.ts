/* eslint-disable @typescript-eslint/explicit-function-return-type -- This is ok */
import FilesApi from '@/client/apis/files.api'
import { QUERY_KEYS } from '@/client/libs/constants'
import queryClient from '@/client/query-client'
import type { HttpError } from '@/shared/errors'
import type { UploadedFile } from '@prisma/client'
import { queryOptions } from '@tanstack/react-query'
import { HttpStatusCode, isAxiosError } from 'axios'

export const filesQueryOptions = queryOptions({
  queryKey: [QUERY_KEYS.FILES],
  queryFn: async ({ signal }) => {
    try {
      return await FilesApi.getFiles(signal)
    } catch (error) {
      if (
        isAxiosError<HttpError>(error) &&
        error.response?.status === HttpStatusCode.Unauthorized
      ) {
        queryClient.setQueryData([QUERY_KEYS.AUTH_STATUS], null)
        return []
      }

      throw error
    }
  }
})

export const fileIdQueryOptions = (id: UploadedFile['id']) =>
  queryOptions({
    queryKey: [QUERY_KEYS.FILES, id],
    queryFn: async ({ signal }) => await FilesApi.getFile(id, signal)
  })

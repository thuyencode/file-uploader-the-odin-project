import type { HttpError } from '@/shared/errors'
import type { UploadedFile } from '@prisma/client'
import { useSuspenseQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useMemo } from 'react'
import { filesQueryOptions } from '../queries'

interface UseFiles {
  files: UploadedFile[]
  error: AxiosError<HttpError> | null
}

const useFiles = (): UseFiles => {
  const { data, error } = useSuspenseQuery(filesQueryOptions)

  const files = useMemo(
    () =>
      data.map((file) => ({
        ...file,
        created_date: new Date(file.created_date),
        updated_date: new Date(file.updated_date)
      })),
    [data]
  )

  return { files, error }
}

export default useFiles

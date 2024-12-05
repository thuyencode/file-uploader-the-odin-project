import type { UploadedFile } from '@prisma/client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { filesQueryOptions } from '../queries'

interface UseFiles {
  files: UploadedFile[]
}

const useFiles = (): UseFiles => {
  const { data } = useSuspenseQuery(filesQueryOptions)

  const files = useMemo(
    () =>
      data.map((file) => ({
        ...file,
        created_date: new Date(file.created_date),
        updated_date: new Date(file.updated_date)
      })),
    [data]
  )

  return { files }
}

export default useFiles

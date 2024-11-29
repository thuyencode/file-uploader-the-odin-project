import type { UploadedFile } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { redirect } from '@tanstack/react-router'
import { HttpStatus } from 'http-status-ts'
import { useMemo } from 'react'
import filesQueryOptions from '../queries/files.query'

interface UseFiles {
  files: UploadedFile[]
}

const useFiles = (): UseFiles => {
  const { data, error } = useQuery(filesQueryOptions)

  if (error && error.response?.data.statusCode === HttpStatus.UNAUTHORIZED) {
    throw redirect({ to: '/sign-in' })
  }

  const files = useMemo(() => {
    if (!data) {
      return []
    }

    return data.map((file) => ({
      ...file,
      created_date: new Date(file.created_date),
      updated_date: new Date(file.updated_date)
    }))
  }, [data])

  return { files }
}

export default useFiles

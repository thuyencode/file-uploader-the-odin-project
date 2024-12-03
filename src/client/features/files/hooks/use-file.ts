import type { UploadedFile } from '@prisma/client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { fileIdQueryOptions } from '../queries'

interface UseFile {
  file: UploadedFile
}

const useFile = (id: UploadedFile['id']): UseFile => {
  const { data: file } = useSuspenseQuery(fileIdQueryOptions(id))

  return { file }
}

export default useFile

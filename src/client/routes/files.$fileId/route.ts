import { fileIdQueryOptions } from '@/client/features/files/queries'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/files/$fileId')({
  loader: async ({ context: { queryClient }, params: { fileId } }) => {
    await queryClient.ensureQueryData(fileIdQueryOptions(fileId))
  }
})

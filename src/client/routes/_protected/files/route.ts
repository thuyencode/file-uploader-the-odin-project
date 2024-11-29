import { filesQueryOptions } from '@/client/features/files/queries'
import queryClient from '@/client/query-client'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/files')({
  beforeLoad: async ({ context: { isAuthed } }) => {
    if (isAuthed) {
      await queryClient.ensureQueryData(filesQueryOptions)
    }
  }
})

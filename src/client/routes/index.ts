import { createFileRoute } from '@tanstack/react-router'
import { filesQueryOptions } from '../features/files/queries'

export const Route = createFileRoute('/')({
  loader: async ({ context: { isAuthed, queryClient } }) => {
    if (isAuthed) {
      await queryClient.ensureQueryData(filesQueryOptions)
    }
  }
})

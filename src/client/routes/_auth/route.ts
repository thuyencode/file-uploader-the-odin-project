import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  beforeLoad({ context: { isAuthed } }) {
    if (isAuthed) {
      throw redirect({ to: '/files' })
    }
  }
})

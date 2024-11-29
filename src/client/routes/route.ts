import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad({ context: { isAuthed } }) {
    if (isAuthed) {
      throw redirect({ to: '/files' })
    }
  }
})

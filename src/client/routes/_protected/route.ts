import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected')({
  beforeLoad({ context: { isAuthed } }) {
    if (!isAuthed) {
      throw redirect({ to: '/sign-in' })
    }
  },
})

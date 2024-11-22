import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  beforeLoad: ({ context: { isAuthed }, location }) => {
    if (isAuthed) {
      return redirect({ to: '/', search: { redirect: location.href } })
    }
  },
})

import { SignInPage } from '@/client/features/auth/pages'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/sign-in')({
  component: SignInPage
})

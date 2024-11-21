import SignInPage from '@/client/features/sign-in/sign-in.page'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/sign-in/')({
  component: SignInPage,
})

import SignInPage from '@/client/features/sign-in'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/sign-in/')({
  component: SignInPage
})

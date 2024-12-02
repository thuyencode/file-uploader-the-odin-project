import { createLazyFileRoute } from '@tanstack/react-router'
import { UnauthorizedPage } from '../components/pages/errors'

export const Route = createLazyFileRoute('/401')({
  component: UnauthorizedPage
})

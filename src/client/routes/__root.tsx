import { createRootRoute } from '@tanstack/react-router'
import AuthedLayout from '../components/layout/authed'

export const Route = createRootRoute({
  component: AuthedLayout
})

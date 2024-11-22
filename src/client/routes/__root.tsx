import type { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext } from '@tanstack/react-router'
import Layout from '../components/layout'

interface RouterContext {
  queryClient: QueryClient
  isAuthed?: boolean
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Layout
})

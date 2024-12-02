import { createRouter } from '@tanstack/react-router'
import { ErrorHandler } from './components/dev-tools'
import { NotFoundPage } from './components/pages/errors'
import queryClient from './query-client'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  context: { queryClient, isAuthed: undefined },
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  defaultNotFoundComponent: NotFoundPage,
  defaultErrorComponent: ErrorHandler
})

// Register things for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default router

import { routeTree } from '@/client/routeTree.gen'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import { useAuthStatus } from './hooks/auth'
import queryClient from './query-client'

const router = createRouter({
  routeTree,
  context: { queryClient, isAuthed: undefined },
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0
})

// Register things for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const RouterProviderWithContext = (): ReactElement => {
  const { isAuthed } = useAuthStatus()

  return <RouterProvider router={router} context={{ isAuthed }} />
}

const App = (): ReactElement => (
  <QueryClientProvider client={queryClient}>
    <RouterProviderWithContext />
    <ReactQueryDevtools />
  </QueryClientProvider>
)

export default App

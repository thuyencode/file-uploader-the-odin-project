import { routeTree } from '@/client/routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import type { ReactElement } from 'react'

const router = createRouter({
  routeTree,
  context: {},
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

const RouterProviderWithContext = (): ReactElement => (
  <RouterProvider router={router} context={{}} />
)

const App = (): ReactElement => (
  <>
    <RouterProviderWithContext />
  </>
)

export default App

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import { useAuthStatus } from './hooks/auth'
import queryClient from './query-client'
import router from './router'

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

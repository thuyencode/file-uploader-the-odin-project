import { lazy } from 'react'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : lazy(
        async () =>
          // Lazy load in development
          await import('@tanstack/router-devtools').then((res) => ({
            default: res.TanStackRouterDevtools
            // For Embedded Mode
            // default: res.TanStackRouterDevtoolsPanel
          }))
      )

export default TanStackRouterDevtools

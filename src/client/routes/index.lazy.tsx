import { createLazyFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'

const RouteComponent = (): ReactNode => 'Hello /!'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent
})

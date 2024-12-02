import { createLazyFileRoute } from '@tanstack/react-router'
import { NotFoundPage } from '../components/pages/errors'

export const Route = createLazyFileRoute('/404')({
  component: NotFoundPage
})

import { createLazyFileRoute } from '@tanstack/react-router'
import { InternalServerErrorPage } from '../components/pages/errors'

export const Route = createLazyFileRoute('/500')({
  component: InternalServerErrorPage
})

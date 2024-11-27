import { createLazyFileRoute } from '@tanstack/react-router'
import { HomePage } from '../components/pages'

export const Route = createLazyFileRoute('/')({
  component: HomePage
})

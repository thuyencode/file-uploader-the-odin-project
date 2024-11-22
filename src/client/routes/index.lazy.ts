import { createLazyFileRoute } from '@tanstack/react-router'
import HomePage from '../features/home'

export const Route = createLazyFileRoute('/')({
  component: HomePage
})

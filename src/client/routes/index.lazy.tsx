import { createLazyFileRoute } from '@tanstack/react-router'
import HomePage from '../components/pages/home'

export const Route = createLazyFileRoute('/')({
  component: HomePage
})

import FilesPage from '@/client/features/files'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_protected/files/')({
  component: FilesPage,
})

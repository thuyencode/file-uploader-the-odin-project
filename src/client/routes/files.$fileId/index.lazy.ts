import { FileIdPage } from '@/client/features/files/pages'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/files/$fileId/')({
  component: FileIdPage
})

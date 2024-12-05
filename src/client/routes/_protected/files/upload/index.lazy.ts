import { UploadFilePage } from '@/client/features/files/pages'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_protected/files/upload/')({
  component: UploadFilePage
})

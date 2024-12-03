import { cn } from '@/client/libs/utils/tailwind'
import { Icon } from '@iconify/react/dist/iconify.js'
import type { ComponentProps, FunctionComponent } from 'react'

interface DownloadButtonProps extends Omit<ComponentProps<'a'>, 'href'> {
  downloadURL: string
}

const DownloadButton: FunctionComponent<DownloadButtonProps> = ({
  downloadURL,
  className,
  ...props
}) => (
  <a
    className={cn('btn btn-outline btn-secondary gap-1', className)}
    href={downloadURL}
    target='_blank'
    rel='noopener noreferrer'
    {...props}
  >
    <Icon className='text-xl' icon='mdi:download' /> Download
  </a>
)

export default DownloadButton

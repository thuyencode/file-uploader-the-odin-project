import { Icon } from '@iconify/react'
import type { UploadedFile } from '@prisma/client'
import type { FunctionComponent } from 'react'
import FileRowSharingAction from './file-row-sharing-action'

interface FileRowActionsProps {
  file: UploadedFile
}

const FileRowActions: FunctionComponent<FileRowActionsProps> = ({ file }) => (
  <td className='inline-flex items-center gap-2 font-medium'>
    <a
      className='link-hover link link-primary inline-flex items-center gap-1'
      href={`/api/files/${file.id}/download`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Icon className='text-xl' icon='mdi:download' /> Download
    </a>
    <FileRowSharingAction file={file} />
  </td>
)

export default FileRowActions

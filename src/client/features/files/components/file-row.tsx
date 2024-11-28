import { bytesToMB } from '@/client/libs/utils'
import { Icon } from '@iconify/react/dist/iconify.js'
import type { UploadedFile } from '@prisma/client'
import type { FunctionComponent } from 'react'

interface FileRowProps {
  file: UploadedFile
  id: number
}

const FileRow: FunctionComponent<FileRowProps> = ({ file, id }) => {
  const checkboxId = `shareable-${file.filename}`

  return (
    <tr className='hover'>
      <th>{id}</th>
      <td>{file.originalname}</td>
      <td>{file.updated_date.toDateString()}</td>
      <td>{file.mimetype}</td>
      <td>{bytesToMB(file.size).toFixed(2)} MB</td>

      <td>
        <label htmlFor={checkboxId}>
          <input
            className='checkbox'
            type='checkbox'
            id={checkboxId}
            defaultChecked={file.shareable}
          />
        </label>
      </td>

      <td>
        <a
          className='link-hover link link-primary inline-flex items-center gap-1 font-medium'
          href={`/api/files/${file.id}/download`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon className='text-xl' icon='mdi:link' /> Open
        </a>
      </td>
    </tr>
  )
}

export default FileRow

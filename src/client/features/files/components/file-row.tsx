import { bytesToMB } from '@/client/libs/utils'
import type { UploadedFile } from '@prisma/client'
import { Link } from '@tanstack/react-router'
import type { FunctionComponent } from 'react'
import FileRowActions from './file-row-actions'
import FileRowShareableCheckbox from './file-row-shareable-checkbox'

interface FileRowProps {
  file: UploadedFile
  id: number
}

const FileRow: FunctionComponent<FileRowProps> = ({ file, id }) => (
  <tr className='hover'>
    <th>{id}</th>

    <td>
      <Link
        className='link-hover link'
        to='/files/$fileId'
        params={{ fileId: file.id }}
      >
        {file.originalname}
      </Link>
    </td>

    <td className='max-md:hidden'>
      {file.updated_date.toLocaleDateString()}{' '}
      {file.updated_date.toLocaleTimeString()}
    </td>
    <td className='max-md:hidden'>{file.mimetype}</td>
    <td className='max-md:hidden'>{bytesToMB(file.size).toFixed(2)} MB</td>

    <FileRowShareableCheckbox file={file} />

    <FileRowActions file={file} />
  </tr>
)

export default FileRow

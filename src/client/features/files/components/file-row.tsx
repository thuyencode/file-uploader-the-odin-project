import { bytesToMB } from '@/client/libs/utils'
import type { UploadedFile } from '@prisma/client'
import type { FunctionComponent } from 'react'
import FileRowActions from './file-row-actions'
import FileRowSharableCheckbox from './file-row-sharable-checkbox'

interface FileRowProps {
  file: UploadedFile
  id: number
}

const FileRow: FunctionComponent<FileRowProps> = ({ file, id }) => (
  <tr className='hover'>
    <th>{id}</th>
    <td>{file.originalname}</td>
    <td>
      {file.updated_date.toLocaleDateString()}{' '}
      {file.updated_date.toLocaleTimeString()}
    </td>
    <td>{file.mimetype}</td>
    <td>{bytesToMB(file.size).toFixed(2)} MB</td>

    <FileRowSharableCheckbox file={file} />

    <FileRowActions file={file} />
  </tr>
)

export default FileRow

import { bytesToMB } from '@/client/libs/utils'
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
    </tr>
  )
}

export default FileRow

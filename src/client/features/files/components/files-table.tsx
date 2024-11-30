import type { UploadedFile } from '@prisma/client'
import type { FunctionComponent } from 'react'
import FileRow from './file-row'

interface FilesTableProps {
  files: UploadedFile[]
}

const FilesTable: FunctionComponent<FilesTableProps> = ({ files }) => (
  <div className='h-full overflow-x-auto'>
    <table className='table table-zebra max-xl:table-sm max-lg:table-xs'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Last Updated</th>
          <th>Mimetype</th>
          <th>Size</th>
          <th>Sharable</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {files.map((file, index) => (
          <FileRow file={file} id={index + 1} key={file.filename} />
        ))}
      </tbody>
    </table>
  </div>
)

export default FilesTable

import type { UploadedFile } from '@prisma/client'
import type { FunctionComponent } from 'react'
import FileRow from './file-row'

interface FilesTableProps {
  files: UploadedFile[]
}

const FilesTable: FunctionComponent<FilesTableProps> = ({ files }) => (
  <div className='size-full overflow-x-auto'>
    <table className='table table-zebra max-xl:table-sm max-lg:table-xs'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th className='max-lg:hidden'>Last Updated</th>
          <th className='max-lg:hidden'>Mimetype</th>
          <th className='max-lg:hidden'>Size</th>
          <th>Shareable</th>
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

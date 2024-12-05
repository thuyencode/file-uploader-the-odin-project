import type { ReactElement } from 'react'
import { FilesTable } from '../components'
import { useFiles } from '../hooks'

const FilesPage = (): ReactElement => {
  const { files } = useFiles()

  if (files.length === 0) {
    return <h2 className='mt-36 text-center'>There's no file.</h2>
  }

  return <FilesTable files={files} />
}

export default FilesPage

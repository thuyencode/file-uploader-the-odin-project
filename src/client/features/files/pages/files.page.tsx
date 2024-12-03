import type { ReactElement } from 'react'
import { FilesTable } from '../components'
import { useFiles } from '../hooks'

const FilesPage = (): ReactElement => {
  const { files } = useFiles()

  if (files.length === 0) {
    return <div>There's no file.</div>
  }

  return <FilesTable files={files} />
}

export default FilesPage

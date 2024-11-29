import type { UploadedFile } from '@prisma/client'
import type { FunctionComponent } from 'react'
import useFile from '../hooks/use-file'

interface FileRowSharableCheckbox {
  file: UploadedFile
}

const FileRowSharableCheckbox: FunctionComponent<FileRowSharableCheckbox> = ({
  file
}) => {
  const { configFile } = useFile(file.id)

  const checkboxId = `shareable-${file.filename}`

  const handleOnChange = async (): Promise<void> => {
    await configFile({ shareable: !file.shareable })
  }

  return (
    <td>
      <label htmlFor={checkboxId}>
        <input
          className='checkbox'
          type='checkbox'
          id={checkboxId}
          checked={file.shareable}
          onChange={() => {
            void handleOnChange()
          }}
        />
      </label>
    </td>
  )
}

export default FileRowSharableCheckbox

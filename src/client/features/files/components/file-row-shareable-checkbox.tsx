import type { UploadedFile } from '@prisma/client'
import type { FunctionComponent } from 'react'
import { useFileConfig } from '../hooks'

interface FileRowShareableCheckbox {
  file: UploadedFile
}

const FileRowShareableCheckbox: FunctionComponent<FileRowShareableCheckbox> = ({
  file
}) => {
  const { configFile } = useFileConfig(file.id)

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

export default FileRowShareableCheckbox

import { Icon } from '@iconify/react'
import type { UploadedFile } from '@prisma/client'
import type { FunctionComponent } from 'react'
import { useState } from 'react'

interface FileRowShareActionProps {
  fileId: UploadedFile['id']
}

const FileRowSharingAction: FunctionComponent<FileRowShareActionProps> = ({
  fileId
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleOnClick = async (): Promise<void> => {
    if (isCopied) {
      return
    }

    setIsCopied(true)

    await Promise.all([
      navigator.clipboard.writeText(
        `${document.location.host}/files/${fileId}`
      ),
      new Promise((resolve) => {
        setTimeout(resolve, 2000)
      })
    ])

    setIsCopied(false)
  }

  return (
    <button
      className={`btn ${isCopied ? 'btn-success' : 'btn-neutral'} btn-sm gap-1`}
      onClick={() => {
        void handleOnClick()
      }}
    >
      <Icon
        className='text-xl'
        icon={isCopied ? 'mdi:checkbox-multiple-marked' : 'mdi:content-copy'}
      />{' '}
      {isCopied ? 'Copied' : 'Share'}
    </button>
  )
}

export default FileRowSharingAction

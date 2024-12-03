import { useCloseDialogElement } from '@/client/hooks'
import { getFileDownloadURL, getFileSharingURL } from '@/client/libs/utils'
import { Icon } from '@iconify/react'
import type { UploadedFile } from '@prisma/client'
import { Link } from '@tanstack/react-router'
import { QRCodeSVG } from 'qrcode.react'
import { useState, type FunctionComponent } from 'react'

interface FileRowActionsProps {
  file: UploadedFile
}

const FileRowActions: FunctionComponent<FileRowActionsProps> = ({ file }) => {
  const ref = useCloseDialogElement()

  const fileSharingURL = getFileSharingURL(file.id)
  const fileDownloadURL = getFileDownloadURL(file.id)

  return (
    <td className='inline-flex items-center gap-2 font-medium'>
      <details className='dropdown dropdown-end' ref={ref}>
        <summary className='btn btn-neutral btn-sm gap-1' role='button'>
          <Icon
            className='text-xl'
            icon='mdi:hamburger-menu'
            aria-label='action menu'
          />
        </summary>

        <div className='card dropdown-content card-compact z-[1] mt-2 w-52 border border-base-content/50 bg-base-100 shadow'>
          {file.shareable ? (
            <figure className='mt-4'>
              <div className='border border-neutral-content/50'>
                <QRCodeSVG value={fileSharingURL} size={180} />
              </div>
            </figure>
          ) : null}

          <div className='card-body'>
            <div className='card-actions'>
              {file.shareable ? <CopyButton url={fileSharingURL} /> : null}

              <a
                className='btn btn-outline btn-secondary btn-sm btn-block gap-1'
                href={fileDownloadURL}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon className='text-xl' icon='mdi:download' /> Download
              </a>

              <Link
                className='btn btn-info btn-sm btn-block gap-1'
                to='/files/$fileId'
                params={{ fileId: file.id }}
              >
                <Icon className='text-xl' icon='mdi:arrow-right' />
                Go to file
              </Link>
            </div>
          </div>
        </div>
      </details>
    </td>
  )
}

interface CopyButtonProps {
  url: string
}

const CopyButton: FunctionComponent<CopyButtonProps> = ({ url }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleOnClick = async (): Promise<void> => {
    if (isCopied) {
      return
    }

    setIsCopied(true)

    await Promise.all([
      navigator.clipboard.writeText(url),
      new Promise((resolve) => {
        setTimeout(resolve, 2000)
      })
    ])

    setIsCopied(false)
  }

  return (
    <button
      className={`btn ${isCopied ? 'btn-success' : 'btn-outline'} btn-sm btn-block gap-1`}
      onClick={() => {
        void handleOnClick()
      }}
    >
      <Icon
        className='text-xl'
        icon={isCopied ? 'mdi:checkbox-multiple-marked' : 'mdi:content-copy'}
      />
      {isCopied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default FileRowActions

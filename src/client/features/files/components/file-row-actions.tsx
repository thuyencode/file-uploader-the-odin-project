import { useCloseDialogElement } from '@/client/hooks'
import { getFileDownloadURL, getFileSharingURL } from '@/client/libs/utils'
import { Icon } from '@iconify/react'
import type { UploadedFile } from '@prisma/client'
import { Link } from '@tanstack/react-router'
import { QRCodeSVG } from 'qrcode.react'
import type { FunctionComponent } from 'react'
import { CopyButton, DownloadButton } from './ui'

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
              {file.shareable ? (
                <CopyButton
                  className='btn-sm btn-block'
                  text={fileSharingURL}
                />
              ) : null}

              <DownloadButton
                className='btn-sm btn-block'
                downloadURL={fileDownloadURL}
              />

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

export default FileRowActions

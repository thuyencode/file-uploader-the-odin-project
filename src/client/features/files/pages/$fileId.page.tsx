import {
  bytesToMB,
  getFileDownloadURL,
  getFileSharingURL,
  getMimeTypeIcon,
  getTypeAndSubtype,
  lineClamp
} from '@/client/libs/utils'
import { Icon } from '@iconify/react'
import { useParams } from '@tanstack/react-router'
import { QRCodeSVG } from 'qrcode.react'
import type { ReactElement, ReactNode } from 'react'
import { CopyButton, DownloadButton } from '../components/ui'
import { useFile } from '../hooks'

const FileIdPage = (): ReactElement => {
  const { fileId } = useParams({ from: '/files/$fileId' })
  const { file } = useFile(fileId)

  const [type, subtype] = getTypeAndSubtype(file.mimetype)
  const sizeInMB = bytesToMB(file.size).toFixed(2)
  const fileIcon = getMimeTypeIcon(type)
  const fileSharingURL = getFileSharingURL(fileId)
  const fileDownloadURL = getFileDownloadURL(fileId)

  const renderSharingActions = (): ReactNode => {
    if (file.shareable) {
      return (
        <>
          <h4>Scan to share!</h4>

          <figure className='w-min rounded-md border border-neutral-content bg-primary/50 p-2.5'>
            <QRCodeSVG value={fileSharingURL} size={180} />
          </figure>

          <CopyButton className='btn-block' text={fileSharingURL} />
        </>
      )
    }

    return null
  }

  return (
    <div className='mt-36 flex w-full items-center justify-center gap-5 text-center'>
      <div className='space-y-2.5'>
        <figure className='pb-2.5'>
          <Icon className='mx-auto size-36' icon={fileIcon} />

          <figcaption className='uppercase'>
            <h3>{subtype}</h3>
          </figcaption>
        </figure>

        <p className='tooltip font-medium' data-tip={file.originalname}>
          Name: {lineClamp(file.originalname)}
        </p>

        <p className='font-medium'>Size: {sizeInMB} MB</p>
      </div>

      <div className='divider divider-secondary divider-horizontal' />

      <div>
        <div className='w-min min-w-[202px] space-y-2.5'>
          {renderSharingActions()}

          <DownloadButton className='btn-block' url={fileDownloadURL} />
        </div>
      </div>
    </div>
  )
}
export default FileIdPage

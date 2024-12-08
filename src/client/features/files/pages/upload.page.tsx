import { bytesToMB } from '@/client/libs/utils'
import { memo, type ReactElement } from 'react'
import { useFileUpload, type UseFileUpload } from '../hooks'

const UploadFilePage = (): ReactElement => {
  const {
    uploadProgress,
    uploadStatus,
    handleFileInput,
    handleFileUpload,
    handleFileUploadCancellation,
    file
  } = useFileUpload()

  return (
    <div className='mt-36 flex w-full items-center justify-center gap-5'>
      <div className='space-y-2.5'>
        <FileUploadProgress
          uploadProgress={uploadProgress}
          uploadStatus={uploadStatus}
        />

        <FileUploadStatus uploadStatus={uploadStatus} />

        <FileUploadInput handleFileInput={handleFileInput} />

        <FileUploadActions
          file={file}
          uploadStatus={uploadStatus}
          handleFileUpload={handleFileUpload}
          handleFileUploadCancellation={handleFileUploadCancellation}
        />
      </div>

      {file ? (
        <div className='divider divider-secondary divider-horizontal' />
      ) : null}

      <FileInfo file={file} />
    </div>
  )
}

type FileUploadProgressProps = Pick<
  UseFileUpload,
  'uploadProgress' | 'uploadStatus'
>

const FileUploadProgress = memo<FileUploadProgressProps>(
  ({ uploadProgress, uploadStatus }) => {
    if (uploadStatus === 'uploading') {
      return (
        <div className='text-center'>
          <p>{uploadProgress}%</p>
          <progress
            className='progress w-56'
            value={uploadProgress}
            max='100'
          />
        </div>
      )
    }

    return null
  }
)

type FileUploadStatusProps = Pick<UseFileUpload, 'uploadStatus'>

const FileUploadStatus = memo<FileUploadStatusProps>(({ uploadStatus }) => {
  switch (uploadStatus) {
    case 'success':
      return (
        <p className='text-center text-success'>File uploaded successfully!</p>
      )

    case 'error':
      return <p className='text-center text-error'>Something went wrong!</p>

    default:
      return null
  }
})

type FileUploadInputProps = Pick<UseFileUpload, 'handleFileInput'>

const FileUploadInput = memo<FileUploadInputProps>(({ handleFileInput }) => (
  <input
    className='file-input file-input-bordered w-full max-w-sm'
    type='file'
    name='file'
    id='file'
    onChange={handleFileInput}
  />
))

type FileUploadActionsProps = Pick<
  UseFileUpload,
  'file' | 'uploadStatus' | 'handleFileUpload' | 'handleFileUploadCancellation'
>

const FileUploadActions = memo<FileUploadActionsProps>(
  ({ file, uploadStatus, handleFileUpload, handleFileUploadCancellation }) => (
    <div className='grid grid-cols-2 gap-2.5'>
      <button
        className={`btn btn-primary ${uploadStatus !== 'uploading' && 'col-span-2'}`}
        disabled={!(file && uploadStatus !== 'uploading')}
        onClick={() => {
          void handleFileUpload()
        }}
      >
        Upload
      </button>

      {uploadStatus === 'uploading' ? (
        <button
          className='btn btn-error'
          onClick={handleFileUploadCancellation}
        >
          Cancel
        </button>
      ) : null}
    </div>
  )
)

type FileInfoProps = Pick<UseFileUpload, 'file'>

const FileInfo = memo<FileInfoProps>(({ file }) => {
  if (file) {
    return (
      <div className='font-medium'>
        <p>File name: {file.name}</p>
        <p>Size: {bytesToMB(file.size).toFixed(5)} MB</p>
        <p>Type: {file.type || 'unknown'}</p>
      </div>
    )
  }

  return null
})

export default UploadFilePage

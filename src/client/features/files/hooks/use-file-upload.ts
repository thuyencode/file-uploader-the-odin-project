import FilesApi from '@/client/apis/files.api'
import { useNavigate } from '@tanstack/react-router'
import { isCancel } from 'axios'
import { useCallback, useRef, useState, type ChangeEvent } from 'react'

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error'

export interface UseFileUpload {
  uploadProgress: number
  uploadStatus: UploadStatus
  handleFileInput: (e: ChangeEvent<HTMLInputElement>) => void
  handleFileUpload: () => Promise<void>
  handleFileUploadCancellation: () => void
  file: File | null
}

const useFileUpload = (): UseFileUpload => {
  const navigate = useNavigate()
  const [file, setFile] = useState<File | null>(null)
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle')
  const [uploadProgress, setUploadProgress] = useState(0)
  const abortController = useRef<AbortController | null>(null)

  const handleFileInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files }
    } = e

    if (files) {
      setFile(files[0])
    }
  }, [])

  const handleFileUpload = useCallback(async () => {
    if (!file) return

    abortController.current = new AbortController()

    setUploadStatus('uploading')
    setUploadProgress(0)

    const formData = new FormData()

    formData.append('file', file)

    try {
      const uploadedFile = await FilesApi.postFileUpload(
        formData,
        setUploadProgress,
        abortController.current.signal
      )

      setUploadStatus('success')
      setUploadProgress(100)

      await navigate({
        to: '/files/$fileId',
        params: { fileId: uploadedFile.id }
      })
    } catch (error) {
      if (!isCancel(error)) {
        setUploadStatus('error')
      }

      setUploadProgress(0)
    }
  }, [file, navigate])

  const handleFileUploadCancellation = useCallback(() => {
    abortController.current?.abort()

    setUploadProgress(0)
    setUploadStatus('idle')
  }, [])

  return {
    uploadProgress,
    uploadStatus,
    handleFileInput,
    handleFileUpload,
    handleFileUploadCancellation,
    file
  }
}

export default useFileUpload

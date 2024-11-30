import FilesApi from '@/client/apis/files.api'
import { MUTATIONS_KEYS, QUERY_KEYS } from '@/client/libs/constants'
import queryClient from '@/client/query-client'
import type { FileConfigurationInput } from '@/server/types/file'
import type { HttpError } from '@/shared/errors'
import type { UploadedFile } from '@prisma/client'
import { useMutation, type UseMutateAsyncFunction } from '@tanstack/react-query'
import { redirect } from '@tanstack/react-router'
import { HttpStatusCode, type AxiosError } from 'axios'

interface UseFileConfig {
  configFile: UseMutateAsyncFunction<
    UploadedFile,
    AxiosError<HttpError>,
    FileConfigurationInput
  >
}

const useFileConfig = (id: UploadedFile['id']): UseFileConfig => {
  const { mutateAsync: configFile } = useMutation({
    mutationKey: [MUTATIONS_KEYS.FILES, id],
    mutationFn: async (fileConfig: FileConfigurationInput) =>
      await FilesApi.postFileConfig(id, fileConfig),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FILES] })
    },
    onError(error) {
      if (error.response?.data.statusCode === HttpStatusCode.Unauthorized) {
        queryClient.setQueryData([QUERY_KEYS.AUTH_STATUS], null)

        throw redirect({ to: '/sign-in' })
      }
    }
  })

  return { configFile }
}

export default useFileConfig

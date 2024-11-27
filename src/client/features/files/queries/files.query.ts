import FilesApi from '@/client/apis/files.api'
import { QUERY_KEYS } from '@/client/libs/constants'
import { queryOptions } from '@tanstack/react-query'

const filesQueryOptions = queryOptions({
  queryKey: [QUERY_KEYS.FILES],
  queryFn: async ({ signal }) => await FilesApi.getFiles(signal)
})

export default filesQueryOptions

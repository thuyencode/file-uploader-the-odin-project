import AuthApi from '@/client/apis/auth.api'
import { QUERY_KEYS } from '@/client/libs/constants'
import { useSuspenseQuery } from '@tanstack/react-query'

interface UseAuthStatus {
  isAuthed: boolean
  user: Express.User | null
}

const useAuthStatus = (): UseAuthStatus => {
  const { data: user } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.AUTH_STATUS],
    queryFn: async ({ signal }) => {
      try {
        return await AuthApi.getAuthStatusApi(signal)
      } catch (error) {
        return null
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })

  const isAuthed = Boolean(user)

  return { isAuthed, user }
}

export default useAuthStatus

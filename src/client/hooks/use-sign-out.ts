import type { HttpError } from '@/shared/errors'
import { useMutation, type UseMutateAsyncFunction } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import type { AxiosError } from 'axios'
import AuthApi from '../apis/auth.api'
import { MUTATIONS_KEYS, QUERY_KEYS } from '../libs/constants'
import queryClient from '../query-client'

interface UseSignOut {
  signOut: UseMutateAsyncFunction
  error: AxiosError<HttpError> | null
  isError: boolean
}

const useSignOut = (): UseSignOut => {
  const navigate = useNavigate()

  const {
    mutateAsync: signOut,
    error,
    isError
  } = useMutation({
    mutationKey: [MUTATIONS_KEYS.SIGN_OUT],
    mutationFn: async () => {
      queryClient.setQueryData([QUERY_KEYS.AUTH_STATUS], null)

      await Promise.all([navigate({ to: '/' }), AuthApi.postSignOut()])
    }
  })

  return { signOut, error, isError }
}

export default useSignOut

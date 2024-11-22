import AuthApi from '@/client/apis/auth.api'
import { MUTATIONS_KEYS, QUERY_KEYS } from '@/client/libs/constants'
import queryClient from '@/client/query-client'
import type { HttpError } from '@/shared/errors'
import type { SignInInput } from '@/shared/types/auth.type'
import { useMutation, type UseMutateAsyncFunction } from '@tanstack/react-query'
import { useNavigate, useRouter } from '@tanstack/react-router'
import type { AxiosError } from 'axios'

interface UseSignIn {
  signIn: UseMutateAsyncFunction<Express.User, AxiosError, SignInInput>
  error: AxiosError<HttpError> | null
  isError: boolean
}

const useSignIn = (): UseSignIn => {
  const router = useRouter()
  const navigate = useNavigate()

  const {
    mutateAsync: signIn,
    error,
    isError
  } = useMutation({
    mutationKey: [MUTATIONS_KEYS.SIGN_IN],
    mutationFn: async (signInInput: SignInInput) =>
      await AuthApi.postSignInApi(signInInput),
    onSuccess: async (data) => {
      queryClient.setQueryData([QUERY_KEYS.AUTH_STATUS], data)
      await navigate({ to: '/' })
      await router.invalidate()
    },
    onError() {
      queryClient.setQueryData([QUERY_KEYS.AUTH_STATUS], null)
    }
  })

  return { signIn, error, isError }
}

export default useSignIn

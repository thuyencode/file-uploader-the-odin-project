import AuthApi from '@/client/apis/auth.api'
import { MUTATIONS_KEYS } from '@/client/libs/constants'
import type { HttpError } from '@/shared/errors'
import type { SignInInput } from '@/shared/types/auth.type'
import { useMutation, type UseMutateAsyncFunction } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { authMutationOptions } from '../mutations'

export interface UseSignIn {
  signIn: UseMutateAsyncFunction<Express.User, AxiosError, SignInInput>
  error: AxiosError<HttpError> | null
  isError: boolean
}

const useSignIn = (): UseSignIn => {
  const {
    mutateAsync: signIn,
    error,
    isError
  } = useMutation({
    mutationKey: [MUTATIONS_KEYS.SIGN_IN],
    mutationFn: async (signInInput: SignInInput) =>
      await AuthApi.postSignInApi(signInInput),
    ...authMutationOptions
  })

  return { signIn, error, isError }
}

export default useSignIn

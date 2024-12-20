import AuthApi from '@/client/apis/auth.api'
import { MUTATIONS_KEYS } from '@/client/libs/constants'
import type { HttpError } from '@/shared/errors'
import type { SignUpInput } from '@/shared/types/auth.type'
import { type UseMutateAsyncFunction, useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { authMutationOptions } from '../mutations'

export interface UseSignUp {
  signUp: UseMutateAsyncFunction<
    Express.User,
    AxiosError<HttpError>,
    SignUpInput
  >
  error: AxiosError<HttpError> | null
  isError: boolean
}

const useSignUp = (): UseSignUp => {
  const {
    mutateAsync: signUp,
    error,
    isError
  } = useMutation({
    mutationKey: [MUTATIONS_KEYS.SIGN_UP],
    mutationFn: async (signUpInput: SignUpInput) =>
      await AuthApi.postSignUp(signUpInput),
    ...authMutationOptions
  })

  return { signUp, error, isError }
}

export default useSignUp

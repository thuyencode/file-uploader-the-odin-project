import { QUERY_KEYS } from '@/client/libs/constants'
import queryClient from '@/client/query-client'
import type { HttpError } from '@/shared/errors'
import type { SignInInput, SignUpInput } from '@/shared/types/auth.type'
import type { UseMutationOptions } from '@tanstack/react-query'
import { redirect } from '@tanstack/react-router'
import type { AxiosError } from 'axios'

const authMutationOptions: UseMutationOptions<
  Express.User,
  AxiosError<HttpError>,
  SignInInput | SignUpInput
> = {
  onSuccess: (data) => {
    queryClient.setQueryData([QUERY_KEYS.AUTH_STATUS], data)

    redirect({ to: '/files' })
  },
  onError() {
    queryClient.setQueryData([QUERY_KEYS.AUTH_STATUS], null)
  }
}

export default authMutationOptions

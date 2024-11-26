import { QUERY_KEYS } from '@/client/libs/constants'
import queryClient from '@/client/query-client'
import router from '@/client/router'
import type { HttpError } from '@/shared/errors'
import type { SignInInput, SignUpInput } from '@/shared/types/auth.type'
import type { UseMutationOptions } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

const authMutationOptions: UseMutationOptions<
  Express.User,
  AxiosError<HttpError>,
  SignInInput | SignUpInput
> = {
  onSuccess: async (data) => {
    queryClient.setQueryData([QUERY_KEYS.AUTH_STATUS], data)

    await router.navigate({ to: '/' })
    await router.invalidate()
  },
  onError() {
    queryClient.setQueryData([QUERY_KEYS.AUTH_STATUS], null)
  }
}

export default authMutationOptions

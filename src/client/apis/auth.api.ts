import type { SignInInput, SignUpInput } from '@/shared/types/auth.type'
import type { AxiosResponse } from 'axios'
import baseApi from './base-api'

const getAuthStatus = async (signal?: AbortSignal): Promise<Express.User> =>
  (await baseApi.get<Express.User>('/api/auth/status', { signal })).data

const postSignIn = async (signInInput: SignInInput): Promise<Express.User> =>
  (await baseApi.post<Express.User>('/api/auth/sign-in', signInInput)).data

const postSignUp = async (signUpInput: SignUpInput): Promise<Express.User> =>
  (await baseApi.post<Express.User>('/api/auth/sign-up', signUpInput)).data

const postSignOut = async (): Promise<AxiosResponse> =>
  await baseApi.post('/api/auth/sign-out')

const AuthApi = {
  getAuthStatus,
  postSignIn,
  postSignUp,
  postSignOut
}

export default AuthApi

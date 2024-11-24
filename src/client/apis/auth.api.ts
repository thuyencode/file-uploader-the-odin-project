import type { SignInInput, SignUpInput } from '@/shared/types/auth.type'
import baseApi from './base-api'

const getAuthStatus = async (signal?: AbortSignal): Promise<Express.User> =>
  (await baseApi.get<Express.User>('/auth/status', { signal })).data

const postSignIn = async (signInInput: SignInInput): Promise<Express.User> =>
  (await baseApi.post<Express.User>('/auth/sign-in', signInInput)).data

const postSignUp = async (signUpInput: SignUpInput): Promise<Express.User> =>
  (await baseApi.post<Express.User>('/auth/sign-up', signUpInput)).data

const AuthApi = {
  getAuthStatus,
  postSignIn,
  postSignUp
}

export default AuthApi

import type { SignInInput } from '@/shared/types/auth.type'
import baseApi from './base-api'

const getAuthStatusApi = async (signal?: AbortSignal): Promise<Express.User> =>
  (await baseApi.get<Express.User>('/auth/status', { signal })).data

const postSignInApi = async (signInInput: SignInInput): Promise<Express.User> =>
  (await baseApi.post<Express.User>('/auth/sign-in', signInInput)).data

const AuthApi = {
  getAuthStatusApi,
  postSignInApi
}

export default AuthApi

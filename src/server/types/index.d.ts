import type { User as UserModelType } from '@/server/db/User.db'
import type { Env as TypeSafeEnv } from '@/server/utils/env'

declare module 'bun' {
  interface Env extends TypeSafeEnv {}
}

declare global {
  namespace Express {
    export interface User extends Omit<UserModelType, 'salted_hash'> {}
  }
}

export {}

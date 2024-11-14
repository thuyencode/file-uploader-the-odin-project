/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { Env as TypeSafeEnv } from './utils/env'

declare module 'bun' {
  interface Env extends TypeSafeEnv {}
}

export {}

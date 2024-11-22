/* eslint-disable @typescript-eslint/triple-slash-reference -- https://vite.dev/guide/features.html#client-types */
/// <reference types="vite/client" />

import type { ClientEnv } from './libs/utils/env'

declare global {
  interface ImportMetaEnv extends Readonly<ClientEnv> {}

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

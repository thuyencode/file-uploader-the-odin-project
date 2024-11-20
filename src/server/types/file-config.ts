import type v from '../validation'
import type { FileConfigurationSchema } from '../validation/file-config.schema'

export type FileConfigurationInput = v.InferInput<
  typeof FileConfigurationSchema
>

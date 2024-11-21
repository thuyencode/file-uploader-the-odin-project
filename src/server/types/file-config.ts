import type v from '../../shared/validation'
import type { FileConfigurationSchema } from '../../shared/validation/file-config.schema'

export type FileConfigurationInput = v.InferInput<
  typeof FileConfigurationSchema
>

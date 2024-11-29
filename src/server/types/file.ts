import type v from '../../shared/validation'
import type { FileConfigurationSchema } from '../../shared/validation/file.schema'

export type FileConfigurationInput = v.InferInput<
  typeof FileConfigurationSchema
>

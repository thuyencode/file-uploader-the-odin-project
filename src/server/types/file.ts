import type { UploadedFile } from '@prisma/client'
import type v from '../../shared/validation'
import type { FileConfigurationSchema } from '../../shared/validation/file.schema'
import type { FilterBySchema, OrderBySchema } from '../validation/file.schema'

export type FileConfigurationInput = v.InferInput<
  typeof FileConfigurationSchema
>

export type OrderByFields = keyof Pick<
  UploadedFile,
  'created_date' | 'updated_date' | 'size'
>

export type FilterByFields = keyof Pick<
  UploadedFile,
  | 'encoding'
  | 'mimetype'
  | 'destination'
  | 'originalname'
  | 'userId'
  | 'id'
  | 'shareable'
>

export type OrderByInput = v.InferInput<typeof OrderBySchema>

export type FilterByInput = v.InferInput<typeof FilterBySchema>

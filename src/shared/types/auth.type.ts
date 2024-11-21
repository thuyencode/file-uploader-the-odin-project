import type v from '../validation'
import type { SignInSchema, SignUpSchema } from '../validation/auth.schema'

export type SignUpInput = v.InferInput<typeof SignUpSchema>
export type SignInInput = v.InferInput<typeof SignInSchema>

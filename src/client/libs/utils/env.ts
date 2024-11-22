import v from '@/shared/validation'

const ClientEnvSchema = v.object({
  VITE_PORT: v.pipe(
    v.string(),
    v.nonEmpty(),
    v.transform((input) => Number(input)),
    v.integer()
  )
})

export const clientEnv = {
  ...import.meta.env,
  ...v.parse(ClientEnvSchema, import.meta.env)
}

export type ClientEnv = v.InferInput<typeof ClientEnvSchema>

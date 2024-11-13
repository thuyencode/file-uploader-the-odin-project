import * as v from 'valibot'

const EnvSchema = v.object({
  PORT: v.pipe(
    v.string(),
    v.nonEmpty(),
    v.transform((input) => Number(input)),
    v.integer()
  ),
  COOKIE_SECRET_KEY: v.pipe(v.string(), v.nonEmpty(), v.minLength(15)),
  SESSION_SECRET_KEY: v.pipe(v.string(), v.nonEmpty(), v.minLength(15)),
  PGHOST: v.pipe(v.string(), v.nonEmpty(), v.minLength(9)),
  PGPORT: v.pipe(
    v.string(),
    v.nonEmpty(),
    v.transform((input) => Number(input)),
    v.integer()
  ),
  PGUSER: v.pipe(v.string(), v.nonEmpty()),
  PGPASSWORD: v.pipe(v.string(), v.nonEmpty(), v.minLength(15)),
  PGDATABASE: v.pipe(v.string(), v.nonEmpty()),
  POSTGRESQL_CONNECTION_URL: v.pipe(
    v.string(),
    v.url(),
    v.startsWith('postgresql')
  )
})

export const env = { ...process.env, ...v.parse(EnvSchema, process.env) }

export type Env = v.InferInput<typeof EnvSchema>
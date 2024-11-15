import * as v from '@valibot/valibot'

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
  DATABASE_URL: v.pipe(v.string(), v.url(), v.startsWith('postgresql'))
})

export const env = { ...Bun.env, ...v.parse(EnvSchema, process.env) }

export type Env = v.InferInput<typeof EnvSchema>

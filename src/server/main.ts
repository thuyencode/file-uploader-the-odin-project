import e from 'express'
import ViteExpress from 'vite-express'
import { env } from './utils/env'

const PORT = env.PORT

const app = e()

app.get('/hello', (_, res) => {
  res.send('Hello Vite + React + TypeScript!')
})

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on port ${PORT}...`)
)

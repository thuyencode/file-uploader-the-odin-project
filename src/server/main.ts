import compression from 'compression'
import cookieParser from 'cookie-parser'
import e from 'express'
import helmet from 'helmet'
import ViteExpress from 'vite-express'
import { env } from './utils/env'

const PORT = env.PORT

const app = e()

app.use(compression())

app.use(
  helmet({
    contentSecurityPolicy: false
  })
)

app.use(e.json())
app.use(e.urlencoded({ extended: true }))

app.use(cookieParser(env.COOKIE_SECRET_KEY))

app.get('/hello', (_, res) => {
  res.send('Hello Vite + React + TypeScript!')
})

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on port ${PORT}...`)
)

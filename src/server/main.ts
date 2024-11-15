import compression from 'compression'
import cookieParser from 'cookie-parser'
import e from 'express'
import session from 'express-session'
import helmet from 'helmet'
import passport from 'passport'
import ViteExpress from 'vite-express'
import api_routes from './api'
import './configs/passport/local.strategy'
import NotFound from './errors/NotFound'
import errorHandler from './middlewares/error-handler'
import errorResponser from './middlewares/error-responser'
import internalServerErrorLogger from './middlewares/internal-server-error-logger'
import { monthsToMilliseconds } from './utils'
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
app.use(
  session({
    secret: env.SESSION_SECRET_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: monthsToMilliseconds(1),
      httpOnly: true
    }
  })
)
app.use(passport.session())

app.get('/hello', (_, res) => {
  res.send('Hello Vite + React + TypeScript!')
})

app.use('/api', api_routes)

app.all('*', () => {
  throw new NotFound()
})

app.use(errorHandler)
app.use(internalServerErrorLogger)
app.use(errorResponser)

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on port ${PORT}...`)
)

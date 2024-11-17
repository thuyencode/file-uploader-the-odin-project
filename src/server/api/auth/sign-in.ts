import { InternalServerError } from '@/server/errors'
import { validateReqBody } from '@/server/middlewares'
import type { SignInInput } from '@/server/types/auth'
import { SignInSchema } from '@/server/validation/auth.schema'
import e from 'express'
import passport from 'passport'

const signInRoutes = e.Router()

signInRoutes.post(
  '/',
  validateReqBody<SignInInput>(SignInSchema),
  passport.authenticate('local', { authInfo: true }),
  (req, res) => {
    throw new InternalServerError('Test')
  }
)

export default signInRoutes

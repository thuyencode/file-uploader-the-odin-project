import { validateReqBody } from '@/server/middlewares'
import type { SignInInput } from '@/server/types/auth'
import { SignInSchema } from '@/server/validation/auth.schema'
import e from 'express'
import passport from 'passport'

const signInRoutes = e.Router()

signInRoutes.post(
  // Handle the POST requests for signing in
  '/',
  validateReqBody<SignInInput>(SignInSchema),
  passport.authenticate('local', { authInfo: true }),
  (req, res) => {
    res.send(req.user)
  }
)

export default signInRoutes

import { validateReqBody } from '@/server/middlewares/validation'
import type { SignInInput } from '@/server/types/auth'
import { SignInSchema } from '@/server/validation/auth.schema'
import e from 'express'
import passport from 'passport'

const sign_in_routes = e.Router()

sign_in_routes.post(
  '/',
  validateReqBody<SignInInput>(SignInSchema),
  passport.authenticate('local', { authInfo: true }),
  (req, res) => {
    res.send(req.user)
  }
)

export default sign_in_routes

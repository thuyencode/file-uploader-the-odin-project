import { UserDB } from '@/server/db/user.db'
import BadRequest from '@/server/errors/BadRequest'
import { validateReqBody } from '@/server/middlewares/validation'
import type { SignUpInput } from '@/server/types/auth'
import { hashPassword } from '@/server/utils/password'
import { SignUpSchema } from '@/server/validation/auth.schema'
import { omit } from '@std/collections'
import e from 'express'
import expressAsyncHandler from 'express-async-handler'
import { HttpStatus } from 'http-status-ts'

const sign_up_routes = e.Router()

sign_up_routes.post(
  '/',
  validateReqBody<SignUpInput>(SignUpSchema),
  expressAsyncHandler<unknown, unknown, SignUpInput>(async (req, res) => {
    const { username, name, password } = req.body
    const existedUser = await UserDB.findByUsername(username)

    if (existedUser) {
      throw new BadRequest(`Username '${username} is already existed'`)
    }

    const salted_hash = await hashPassword(password)
    const newUser = await UserDB.insert({ username, name, salted_hash })

    req.logIn(newUser, (err) => {
      if (err) {
        throw err
      }

      res.status(HttpStatus.CREATED).send(omit(newUser, ['salted_hash']))
    })
  })
)

export default sign_up_routes

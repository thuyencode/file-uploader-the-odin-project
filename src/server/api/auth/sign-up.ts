/* eslint-disable @typescript-eslint/only-throw-error -- This is ok */
import { UserDB } from '@/server/db/User.db'
import BadRequest from '@/server/errors/BadRequest'
import { validateReqBody } from '@/server/middlewares'
import { hashPassword } from '@/server/utils/password'
import type { SignUpInput } from '@/shared/types/auth.type'
import { SignUpSchema } from '@/shared/validation/auth.schema'
import e from 'express'
import expressAsyncHandler from 'express-async-handler'
import { HttpStatus } from 'http-status-ts'

const signUpRoutes = e.Router()

signUpRoutes.post(
  // Handle the POST requests for creating new users
  '/',
  validateReqBody<SignUpInput>(SignUpSchema),
  expressAsyncHandler<unknown, unknown, SignUpInput>(async (req, res) => {
    const {
      body: { username, name, password }
    } = req

    const existedUser = await UserDB.findByUsername(username)

    if (existedUser !== null) {
      throw new BadRequest(`Username '${username} is already existed'`)
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention -- This is for convince
    const { salted_hash, ...newUser } = await UserDB.insert({
      username,
      name,
      salted_hash: await hashPassword(password)
    })

    req.logIn(newUser, (error) => {
      if (error) {
        throw error
      }

      res.status(HttpStatus.CREATED).send(newUser)
    })
  })
)

export default signUpRoutes

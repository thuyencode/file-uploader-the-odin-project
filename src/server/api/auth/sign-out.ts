/* eslint-disable @typescript-eslint/only-throw-error -- This is ok */
import { unauthedReqHandler } from '@/server/middlewares'
import e from 'express'

const signOutRoutes = e.Router()

signOutRoutes.post('/', unauthedReqHandler, (req, res) => {
  req.logOut((error) => {
    if (error) {
      throw error
    }

    res.status(200).send({ message: 'Signed out successfully' })
  })
})

export default signOutRoutes

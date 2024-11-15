import { unauthedReqHandler } from '@/server/middlewares'
import e from 'express'

const sign_out_routes = e.Router()

sign_out_routes.post('/', unauthedReqHandler, (req, res) => {
  req.logOut((error) => {
    if (error) {
      throw error
    }

    res.status(200).send({ message: 'Signed out successfully' })
  })
})

export default sign_out_routes

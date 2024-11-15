import unauthedReqHandler from '@/server/middlewares/unauthed-req-handler'
import e from 'express'

const sign_out_routes = e.Router()

sign_out_routes.get('/', unauthedReqHandler, (req, res) => {
  req.logOut((error) => {
    if (error) {
      throw error
    }

    res.status(200).send({ message: 'Logout successfully' })
  })
})

export default sign_out_routes

import { unauthedReqHandler } from '@/server/middlewares'
import e from 'express'

const statusRoutes = e.Router()

// Handle the GET requests for checking auth status
statusRoutes.get('/', unauthedReqHandler, (req, res) => {
  res.send(req.user)
})

export default statusRoutes

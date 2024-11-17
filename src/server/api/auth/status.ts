import { unauthedReqHandler } from '@/server/middlewares'
import e from 'express'

const statusRoutes = e.Router()

statusRoutes.get('/', unauthedReqHandler, (req, res) => {
  res.send(req.user)
})

export default statusRoutes

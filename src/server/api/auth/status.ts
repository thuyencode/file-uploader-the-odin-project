import { unauthedReqHandler } from '@/server/middlewares'
import e from 'express'

const status_routes = e.Router()

status_routes.get('/', unauthedReqHandler, (req, res) => {
  res.send(req.user)
})

export default status_routes

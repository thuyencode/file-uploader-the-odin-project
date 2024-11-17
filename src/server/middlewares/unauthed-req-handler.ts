import type e from 'express'
import { Unauthorized } from '../errors'

const unauthedReqHandler: e.RequestHandler = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
    return
  }

  next(new Unauthorized())
}

export default unauthedReqHandler

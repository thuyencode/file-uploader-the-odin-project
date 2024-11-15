import { typeLog, types } from '@hikyu/log'
import type e from 'express'
import InternalServerError from '../errors/InternalServerError'

const internalServerErrorLogger: e.ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  if (err instanceof InternalServerError) {
    typeLog(types.ERROR, err)
  }

  next(err)
}

export default internalServerErrorLogger

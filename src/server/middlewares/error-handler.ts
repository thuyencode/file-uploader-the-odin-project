import type { ErrorRequestHandler } from 'express'
import { ValiError } from 'valibot'
import BadRequest from '../errors/BadRequest'
import HttpError from '../errors/HttpError'
import InternalServerError from '../errors/InternalServerError'
import v from '../validation'

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.constructor.name === 'BadRequestError') {
    return next(new BadRequest(err.message))
  }

  if (err instanceof ValiError) {
    const issues = v.flatten(err.issues).nested

    return next(new BadRequest(issues))
  }

  if (!(err instanceof HttpError)) {
    return next(new InternalServerError(err))
  }

  next(err)
}

export default errorHandler

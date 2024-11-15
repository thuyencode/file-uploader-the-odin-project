import { ValiError } from '@valibot/valibot'
import type { ErrorRequestHandler } from 'express'
import { BadRequest, HttpError, InternalServerError } from '../errors'
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

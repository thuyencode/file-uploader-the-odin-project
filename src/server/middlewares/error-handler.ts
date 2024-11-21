import { ValiError } from '@valibot/valibot'
import type { ErrorRequestHandler } from 'express'
import v from '../../shared/validation'
import { BadRequest, HttpError, InternalServerError } from '../errors'

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.constructor.name === 'BadRequestError') {
    next(new BadRequest(err.message))
    return
  }

  if (err instanceof ValiError) {
    const { nested: issues } = v.flatten(err.issues)

    next(new BadRequest(issues))
    return
  }

  if (!(err instanceof HttpError)) {
    next(new InternalServerError(err))
    return
  }

  next(err)
}

export default errorHandler

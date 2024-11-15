/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ErrorRequestHandler } from 'express'
import { type HttpError, InternalServerError } from '../errors'

const errorResponser: ErrorRequestHandler = (
  err: HttpError,
  req,
  res,
  next
) => {
  const error = {
    statusCode: err.statusCode,
    message: err.message,
    cause: err.cause
  }

  if (err instanceof InternalServerError) {
    const { cause, ...rest } = error

    return res.status(err.statusCode).json({
      error: rest
    })
  }

  res.status(err.statusCode).json({ error })
}

export default errorResponser

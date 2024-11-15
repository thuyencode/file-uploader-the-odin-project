import type { HttpStatus } from 'http-status-ts'

/**
 * Custom HTTP error extends from this class
 *
 * @class HttpError
 * @typedef {HttpError}
 * @extends {Error}
 */
class HttpError extends Error {
  statusCode: HttpStatus
  cause?: Error | string | unknown

  constructor(
    message: string,
    statusCode: HttpStatus,
    cause?: Error | string | unknown
  ) {
    super(message)
    this.statusCode = statusCode
    this.cause = cause
  }
}

export default HttpError

import type { HttpStatus } from 'http-status-ts'

/**
 * The base class representing HTTP response status codes
 *
 * @class HttpError
 * @typedef {HttpError}
 * @extends {Error}
 */
class HttpError extends Error {
  statusCode: HttpStatus
  cause?: unknown

  constructor(message: string, statusCode: HttpStatus, cause?: unknown) {
    super(message)
    this.statusCode = statusCode
    this.cause = cause
  }
}

export default HttpError

import { HttpStatus, httpStatusTextByCode } from 'http-status-ts'
import HttpError from './HttpError'

/**
 * Internal Server Error
 *
 * @class InternalServerError
 * @typedef {InternalServerError}
 * @extends {HttpError}
 */
class InternalServerError extends HttpError {
  constructor(cause: Error | string) {
    super(
      httpStatusTextByCode(HttpStatus.INTERNAL_SERVER_ERROR),
      HttpStatus.INTERNAL_SERVER_ERROR,
      cause
    )
  }
}

export default InternalServerError

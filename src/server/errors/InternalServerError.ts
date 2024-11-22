import { HttpError } from '@/shared/errors'
import { HttpStatus, httpStatusTextByCode } from 'http-status-ts'

/**
 * Used to create objects representing HTTP status code `500 Internal Server Error`
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

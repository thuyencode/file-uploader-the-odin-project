import { HttpError } from '@/shared/errors'
import { HttpStatus, httpStatusTextByCode } from 'http-status-ts'

/**
 * Used to create objects representing HTTP status code `400 Bad Request`
 *
 * @class BadRequest
 * @typedef {BadRequest}
 * @extends {HttpError}
 */
class BadRequest extends HttpError {
  constructor(cause: unknown) {
    super(
      httpStatusTextByCode(HttpStatus.BAD_REQUEST),
      HttpStatus.BAD_REQUEST,
      cause
    )
  }
}

export default BadRequest

import { HttpStatus, httpStatusTextByCode } from 'http-status-ts'
import HttpError from './HttpError'

/**
 * Bad Request error
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

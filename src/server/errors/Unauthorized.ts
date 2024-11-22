import { HttpError } from '@/shared/errors'
import { HttpStatus, httpStatusTextByCode } from 'http-status-ts'

/**
 * Unauthorized error
 *
 * @class Unauthorized
 * @typedef {Unauthorized}
 * @extends {HttpError}
 */
class Unauthorized extends HttpError {
  constructor(
    cause:
      | Error
      | string = `${httpStatusTextByCode(HttpStatus.UNAUTHORIZED)} request`
  ) {
    super(
      httpStatusTextByCode(HttpStatus.UNAUTHORIZED),
      HttpStatus.UNAUTHORIZED,
      cause
    )
  }
}

export default Unauthorized

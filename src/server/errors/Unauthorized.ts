import { HttpError } from '@/shared/errors'
import { HttpStatusCode } from 'axios'
import { httpStatusTextByCode } from '../utils'

/**
 * Used to create objects representing HTTP status code `401 Unauthorized`
 *
 * @class Unauthorized
 * @typedef {Unauthorized}
 * @extends {HttpError}
 */
class Unauthorized extends HttpError {
  constructor(
    cause:
      | Error
      | string = `${httpStatusTextByCode(HttpStatusCode.Unauthorized)} request`
  ) {
    super(
      httpStatusTextByCode(HttpStatusCode.Unauthorized),
      HttpStatusCode.Unauthorized,
      cause
    )
  }
}

export default Unauthorized

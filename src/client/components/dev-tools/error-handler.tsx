import type { HttpError } from '@/shared/errors'
import { ErrorComponent } from '@tanstack/react-router'
import { HttpStatusCode, isAxiosError } from 'axios'
import type { FunctionComponent } from 'react'
import {
  InternalServerErrorPage,
  NotFoundPage,
  UnauthorizedPage
} from '../pages/errors'

interface ErrorHandlerProps {
  error: Error
}

const ErrorHandler: FunctionComponent<ErrorHandlerProps> = ({ error }) => {
  if (isAxiosError<HttpError>(error)) {
    const statusCode = error.response?.status

    switch (statusCode) {
      case HttpStatusCode.NotFound:
        return <NotFoundPage />

      case HttpStatusCode.Unauthorized:
        return <UnauthorizedPage />

      case HttpStatusCode.InternalServerError:
        return <InternalServerErrorPage />

      default:
        return <ErrorComponent error={error} />
    }
  }

  return <ErrorComponent error={error} />
}

export default ErrorHandler

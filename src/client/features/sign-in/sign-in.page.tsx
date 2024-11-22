import { InputField } from '@/client/components/ui'
import type { HttpError } from '@/shared/errors'
import type { SignInInput } from '@/shared/types/auth.type'
import { SignInSchema } from '@/shared/validation/auth.schema'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { Link } from '@tanstack/react-router'
import { isAxiosError } from 'axios'
import type { ReactElement } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useSignIn } from './hooks/auth'

const SignInPage = (): ReactElement => {
  const { signIn } = useSignIn()
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors }
  } = useForm<SignInInput>({
    resolver: valibotResolver(SignInSchema)
  })

  const onSubmit: SubmitHandler<SignInInput> = async (values) => {
    try {
      await signIn(values)
    } catch (error) {
      if (isAxiosError<HttpError>(error)) {
        setError('root', { message: String(error.response?.data.cause) })
      }
    }
  }

  return (
    <form
      className='mx-auto max-w-96 space-y-10 text-center'
      onSubmit={(event) => {
        void handleSubmit(onSubmit)(event)
      }}
    >
      <h2>Sign in to your account</h2>

      {errors.root && (
        <div className='-my-2 text-error'>{errors.root.message}!</div>
      )}

      <div className='space-y-2.5'>
        <InputField
          {...register('username')}
          placeholder='Username'
          icon='mdi:alternate-email'
          type='text'
          error={errors.username}
          minLength={2}
          maxLength={25}
          required
        />

        <InputField
          {...register('password')}
          placeholder='Password'
          icon='mdi:key'
          type='password'
          error={errors.password}
          minLength={8}
          maxLength={30}
          required
        />
      </div>

      <div className='inline-block space-x-5'>
        <button
          className='btn btn-primary'
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing' : 'Sign'} In
        </button>

        <Link className='font-medium hover:link' to='/sign-up'>
          I don't have an account
        </Link>
      </div>
    </form>
  )
}

export default SignInPage

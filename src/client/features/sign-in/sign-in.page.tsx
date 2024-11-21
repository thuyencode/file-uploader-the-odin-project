import { InputField } from '@/client/components/ui'
import type { SignInInput } from '@/shared/types/auth.type'
import { SignInSchema } from '@/shared/validation/auth.schema'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'

const SignInPage = (): ReactElement => {
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
      await new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })

      console.log(values)
    } catch (error) {
      if (error instanceof Error) {
        setError('root', { message: error.message })
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

import { InputField } from '@/client/components/ui'
import type { SignUpInput } from '@/shared/types/auth.type'
import { SignUpSchema } from '@/shared/validation/auth.schema'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'

const SignUpPage = (): ReactElement => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors }
  } = useForm<SignUpInput>({
    resolver: valibotResolver(SignUpSchema)
  })

  const onSubmit: SubmitHandler<SignUpInput> = async (values) => {
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
      <h2>Sign up to your account</h2>

      <div className='space-y-2.5'>
        <InputField
          {...register('name')}
          placeholder='Name'
          icon='mdi:user'
          type='text'
          error={errors.name}
          minLength={2}
          maxLength={200}
          required
        />

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
          {isSubmitting ? 'Signing' : 'Sign'} Up
        </button>

        <Link className='font-medium hover:link' to='/sign-in'>
          I have an account already
        </Link>
      </div>
    </form>
  )
}

export default SignUpPage

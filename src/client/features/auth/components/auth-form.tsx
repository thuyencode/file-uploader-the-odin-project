import type { HttpError } from '@/shared/errors'
import type { SignInInput, SignUpInput } from '@/shared/types/auth.type'
import type {
  SignInSchema,
  SignUpSchema
} from '@/shared/validation/auth.schema'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { isAxiosError } from 'axios'
import type { FunctionComponent } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { UseSignIn, UseSignUp } from '../hooks'
import { InputField } from './ui'

const FORM_TEXTS = {
  'sign-in': {
    title: 'Sign in to your account',
    submit_btn: 'In',
    second_choice: "I don't have an account"
  },
  'sign-up': {
    title: 'Create a new account',
    submit_btn: 'Up',
    second_choice: 'I have an account already'
  }
} as const

type AuthFormProps =
  | {
      type: 'sign-in'
      onSubmitAction: UseSignIn['signIn']
      schema: typeof SignInSchema
    }
  | {
      type: 'sign-up'
      onSubmitAction: UseSignUp['signUp']
      schema: typeof SignUpSchema
    }

const AuthForm: FunctionComponent<AuthFormProps> = ({
  type,
  onSubmitAction,
  schema
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors }
  } = useForm<SignInInput & SignUpInput>({
    resolver: valibotResolver(schema)
  })

  const onSubmit: SubmitHandler<SignInInput & SignUpInput> = async (values) => {
    try {
      await onSubmitAction(values)
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
      <h2>{FORM_TEXTS[type].title}</h2>

      {errors.root && (
        <div className='alert alert-error !-mb-5 !mt-5' role='alert'>
          <Icon icon='mdi:alert-circle-outline' />
          {errors.root.message}!
        </div>
      )}

      <div className='space-y-2.5'>
        {type === 'sign-up' ? (
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
        ) : null}

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
          {isSubmitting ? 'Signing' : 'Sign'} {FORM_TEXTS[type].submit_btn}
        </button>

        <Link className='font-medium hover:link' to='/sign-in'>
          {FORM_TEXTS[type].second_choice}
        </Link>
      </div>
    </form>
  )
}

export default AuthForm

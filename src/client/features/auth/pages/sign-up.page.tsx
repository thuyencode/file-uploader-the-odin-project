import { SignUpSchema } from '@/shared/validation/auth.schema'
import type { ReactElement } from 'react'
import { AuthForm } from '../components'
import { useSignUp } from '../hooks'

const SignUpPage = (): ReactElement => {
  const { signUp } = useSignUp()

  return (
    <AuthForm type='sign-up' onSubmitAction={signUp} schema={SignUpSchema} />
  )
}

export default SignUpPage

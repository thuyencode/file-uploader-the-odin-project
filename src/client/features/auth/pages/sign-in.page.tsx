import { SignInSchema } from '@/shared/validation/auth.schema'
import type { ReactElement } from 'react'
import { AuthForm } from '../components'
import { useSignIn } from '../hooks'

const SignInPage = (): ReactElement => {
  const { signIn } = useSignIn()

  return (
    <AuthForm type='sign-in' onSubmitAction={signIn} schema={SignInSchema} />
  )
}

export default SignInPage

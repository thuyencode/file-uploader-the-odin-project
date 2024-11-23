import AuthForm from '@/client/components/form/auth'
import { useSignIn } from '@/client/hooks/auth'
import { SignInSchema } from '@/shared/validation/auth.schema'
import type { ReactElement } from 'react'

const SignInPage = (): ReactElement => {
  const { signIn } = useSignIn()

  return (
    <AuthForm type='sign-in' onSubmitAction={signIn} schema={SignInSchema} />
  )
}

export default SignInPage

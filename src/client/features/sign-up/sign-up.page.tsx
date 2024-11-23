import AuthForm from '@/client/components/form/auth'
import { useSignUp } from '@/client/hooks/auth'
import { SignUpSchema } from '@/shared/validation/auth.schema'
import type { ReactElement } from 'react'

const SignUpPage = (): ReactElement => {
  const { signUp } = useSignUp()

  return (
    <AuthForm type='sign-up' onSubmitAction={signUp} schema={SignUpSchema} />
  )
}

export default SignUpPage

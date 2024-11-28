import { SignUpSchema } from '@/shared/validation/auth.schema'
import type { ReactElement } from 'react'
import { AuthForm } from '../components'
import { useSignUp } from '../hooks'

const SignUpPage = (): ReactElement => {
  const { signUp } = useSignUp()

  return (
    <div className='mt-36'>
      <AuthForm type='sign-up' onSubmitAction={signUp} schema={SignUpSchema} />
    </div>
  )
}

export default SignUpPage

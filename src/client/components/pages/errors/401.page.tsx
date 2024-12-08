import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

const UnauthorizedPage = (): ReactElement => (
  <div className='mx-1 space-y-9 text-center md:mt-36'>
    <h1 className='text-error'>401</h1>
    <h2>You're not authorized to access this resource</h2>

    <Link className='btn btn-primary gap-1' to='/sign-in'>
      <Icon className='text-xl' icon='lets-icons:back' /> Return to sign-in page
    </Link>
  </div>
)

export default UnauthorizedPage

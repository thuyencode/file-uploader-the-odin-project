import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

const InternalServerErrorPage = (): ReactElement => (
  <div className='mx-1 space-y-9 text-center md:mt-36'>
    <h1 className='text-error'>500</h1>
    <h2>Internal Server Error</h2>

    <Link className='btn btn-primary gap-1' to='/'>
      <Icon className='text-xl' icon='lets-icons:back' /> Return to home page
    </Link>
  </div>
)

export default InternalServerErrorPage

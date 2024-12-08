import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

const NotFoundPage = (): ReactElement => (
  <div className='mx-1 space-y-9 text-center md:mt-36'>
    <h1 className='text-error'>404</h1>
    <h2>Not Found</h2>

    <Link className='btn btn-primary gap-1' to='/' replace>
      <Icon className='text-xl' icon='lets-icons:back' /> Return to home page
    </Link>
  </div>
)

export default NotFoundPage

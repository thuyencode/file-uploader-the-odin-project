import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

const HomePage = (): ReactElement => (
  <div className='mt-36 space-y-9 text-center'>
    <h1 className='flex items-center justify-center'>
      Let's start sharing your files
      <Icon
        className='ml-2 text-4xl'
        icon={'mdi:file-arrow-left-right-outline'}
      />
      <Icon className='text-4xl' icon={'mdi:world'} />
    </h1>

    <div className='inline-flex w-fit flex-col gap-3'>
      <Link className='btn btn-primary btn-lg' to='/sign-in' role='button'>
        Sign in
        <Icon className='text-2xl' icon={'mdi:user-check'} />
      </Link>

      <Link
        className='btn btn-outline btn-secondary btn-lg'
        to='/sign-up'
        role='button'
      >
        Sign up
        <Icon className='text-2xl' icon={'mdi:user-add-outline'} />
      </Link>
    </div>
  </div>
)

export default HomePage

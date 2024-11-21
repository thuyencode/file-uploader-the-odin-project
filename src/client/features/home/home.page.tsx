import { Icon } from '@iconify/react/dist/iconify.js'
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
      <button className='btn btn-primary btn-lg'>
        Sign in
        <Icon className='text-2xl' icon={'mdi:user-check'} />
      </button>
      <button className='btn btn-outline btn-secondary btn-lg'>
        Sign up
        <Icon className='text-2xl' icon={'mdi:user-add-outline'} />
      </button>
    </div>
  </div>
)

export default HomePage

import useSignOut from '@/client/hooks/use-sign-out'
import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import type { FunctionComponent } from 'react'
import { createPortal } from 'react-dom'

const sidebarElement = document.getElementById('sidebar')

if (!sidebarElement) {
  throw new Error("There's no element with id 'sidebar'")
}

const Sidebar: FunctionComponent = () => {
  const { signOut } = useSignOut()

  const onClickSignOut = (): void => {
    void signOut()
  }

  return createPortal(
    <div className='flex min-h-full w-80 flex-row border-r border-r-base-content/50 bg-base-200 pl-1 max-lg:pr-4'>
      <ul className='menu flex-1 font-medium'>
        <li className='menu-title text-base-content focus:bg-none'>
          <h4 className='inline-flex items-center gap-1 font-bold'>
            File Uploader
            <Icon className='text-2xl' icon={'mdi:file-upload'} />
          </h4>{' '}
        </li>

        <li>
          <Link className='link-primary' to='/files'>
            <Icon className='text-xl' icon={'mdi:folder-open-outline'} />
            Files
          </Link>
        </li>

        <li className='lg:hidden'>
          <a>
            <Icon className='text-xl' icon={'mdi:cloud-upload-outline'} />
            Upload File
          </a>
        </li>

        <li>
          <span onClick={onClickSignOut}>
            <Icon className='text-xl' icon={'mdi:user-remove-outline'} />
            Sign Out
          </span>
        </li>
      </ul>

      <label
        htmlFor='sidebar-toggle'
        className='btn btn-outline btn-error btn-sm mt-3.5 lg:hidden'
        aria-label='open sidebar'
      >
        <Icon className='text-xl' icon={'mdi:hamburger-open'} />
      </label>
    </div>,
    sidebarElement
  )
}

export default Sidebar

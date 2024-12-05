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
    <div className='min-h-full w-80 border-r border-r-base-content/50 bg-base-200'>
      <div className='flex items-center justify-between p-2 pt-3.5 text-base-content'>
        <h4 className='inline-flex items-center gap-1 font-bold'>
          File Uploader
          <Icon className='text-2xl' icon={'mdi:file-upload'} />
        </h4>

        <label
          htmlFor='sidebar-toggle'
          className='btn btn-outline btn-error btn-sm xl:hidden'
          aria-label='open sidebar'
        >
          <Icon className='text-xl' icon={'mdi:hamburger-open'} />
        </label>
      </div>

      <ul className='menu flex-1 font-medium'>
        <li>
          <Link
            className='link-primary'
            to='/files'
            activeOptions={{ exact: true }}
          >
            <Icon className='text-xl' icon={'mdi:folder-open-outline'} />
            Files
          </Link>
        </li>

        <li className='xl:hidden'>
          <Link to='/files/upload'>
            <Icon className='text-xl' icon={'mdi:cloud-upload-outline'} />
            Upload File
          </Link>
        </li>

        <li>
          <span onClick={onClickSignOut}>
            <Icon className='text-xl' icon={'mdi:user-remove-outline'} />
            Sign Out
          </span>
        </li>
      </ul>
    </div>,
    sidebarElement
  )
}

export default Sidebar

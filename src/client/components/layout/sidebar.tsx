import { Icon } from '@iconify/react'
import type { FunctionComponent } from 'react'
import { createPortal } from 'react-dom'

const sidebarElement = document.getElementById('sidebar')

if (!sidebarElement) {
  throw new Error("There's no element with id 'sidebar'")
}

const Sidebar: FunctionComponent = () =>
  createPortal(
    <div className='flex min-h-full w-80 flex-row border-r border-r-base-content/50 bg-base-200 pr-5'>
      <ul className='menu flex-1 font-medium'>
        <li className='menu-title text-base-content focus:bg-none'>
          <h4 className='font-bold'>File Uploader</h4>
        </li>

        <li>
          <a className='link link-primary no-underline'>Sign in</a>
        </li>

        <li>
          <a className=''>Sign up</a>
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

export default Sidebar

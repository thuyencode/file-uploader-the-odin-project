import { Icon } from '@iconify/react'
import type { ReactElement } from 'react'
import ThemeToggle from './theme-toggle'

const Header = (): ReactElement => (
  <header
    className='navbar border-b border-b-base-content/50 bg-base-100 px-5 py-1'
    role='navigation'
  >
    <div className='navbar-start gap-1'>
      <label
        htmlFor='sidebar-toggle'
        className='btn btn-ghost drawer-button lg:hidden'
        aria-label='open sidebar'
      >
        <Icon className='text-xl' icon={'mdi:hamburger-close'} />
      </label>

      <a className='btn btn-primary font-medium'>
        Upload Files
        <Icon className='text-xl' icon={'mdi:cloud-upload-outline'} />
      </a>
    </div>

    <div className='navbar-end'>
      <ul className='menu menu-horizontal items-center'>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  </header>
)

export default Header

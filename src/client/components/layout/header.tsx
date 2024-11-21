import { Icon } from '@iconify/react'
import type { ReactElement } from 'react'
import RenderWhenAuthed from '../render-when-auth'
import ThemeToggle from './theme-toggle'

const Header = (): ReactElement => (
  <header
    className='navbar border-b border-b-base-content/50 bg-base-100 px-5 py-1'
    role='navigation'
  >
    <div className='navbar-start gap-1'>
      <RenderWhenAuthed
        whenAuthed={
          <>
            <label
              htmlFor='sidebar-toggle'
              className='btn btn-ghost drawer-button lg:hidden'
              aria-label='open sidebar'
            >
              <Icon className='text-xl' icon={'mdi:hamburger-close'} />
            </label>

            <a className='btn btn-primary max-lg:hidden'>
              Upload Files
              <Icon className='text-xl' icon={'mdi:cloud-upload-outline'} />
            </a>
          </>
        }
        whenNot={
          <h4 className='inline-flex items-center gap-1 font-bold'>
            File Uploader
            <Icon className='text-2xl' icon={'mdi:file-upload'} />
          </h4>
        }
      />
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

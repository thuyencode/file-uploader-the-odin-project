import { Outlet } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import { TanStackRouterDevtools } from '../dev-tools'
import { RenderWhenAuthed } from '../ui'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'

const Layout = (): ReactElement => (
  <>
    <Header />
    <RenderWhenAuthed whenAuthed={<Sidebar />} />

    <div className='flex flex-1 max-md:items-center'>
      <Outlet />
    </div>

    <Footer />

    <TanStackRouterDevtools />
  </>
)

export default Layout

import { Outlet } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import TanStackRouterDevtools from '../dev-tools/tanstack-router'
import { RenderWhenAuthed } from '../ui'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'

const Layout = (): ReactElement => (
  <>
    <Header />
    <RenderWhenAuthed whenAuthed={<Sidebar />} />

    <div className='flex-1 p-5 lg:py-10'>
      <Outlet />
    </div>

    <TanStackRouterDevtools />

    <Footer />
  </>
)

export default Layout

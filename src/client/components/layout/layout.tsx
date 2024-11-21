import { Outlet } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import RenderWhenAuthed from '../render-when-auth'
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

    <Footer />
  </>
)

export default Layout

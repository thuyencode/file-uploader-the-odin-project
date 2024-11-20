import { Outlet } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'

const AuthedLayout = (): ReactElement => (
  <>
    <Header />
    <Sidebar />

    <div className='container flex-1 p-10'>
      <Outlet />
    </div>

    <Footer />
  </>
)

export default AuthedLayout

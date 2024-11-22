import { useAuthStatus } from '@/client/hooks'
import type { ReactElement } from 'react'
import { HomePageWhenAuthed, HomePageWhenUnauthed } from './component/home'

const HomePage = (): ReactElement => {
  const { isAuthed } = useAuthStatus()

  if (isAuthed) {
    return <HomePageWhenAuthed />
  }

  return <HomePageWhenUnauthed />
}

export default HomePage

import { RenderWhenAuthed } from '@/client/components/ui'
import type { ReactElement } from 'react'
import { HomePageWhenAuthed, HomePageWhenUnauthed } from './component/home'

const HomePage = (): ReactElement => (
  <RenderWhenAuthed
    whenAuthed={<HomePageWhenAuthed />}
    whenNot={<HomePageWhenUnauthed />}
  />
)

export default HomePage

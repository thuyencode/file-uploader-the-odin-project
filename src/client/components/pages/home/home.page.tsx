import FilesPage from '@/client/features/files'
import type { ReactElement } from 'react'
import { RenderWhenAuthed } from '../../ui'
import { DefaultHomePage } from './components'

const HomePage = (): ReactElement => (
  <RenderWhenAuthed whenAuthed={<FilesPage />} whenNot={<DefaultHomePage />} />
)

export default HomePage

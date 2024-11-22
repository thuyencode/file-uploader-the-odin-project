import { useAuthStatus } from '@/client/hooks'
import type { FunctionComponent, ReactNode } from 'react'

interface RenderWhenAuthedProps {
  whenAuthed: ReactNode
  whenNot?: ReactNode
}

const RenderWhenAuthed: FunctionComponent<RenderWhenAuthedProps> = ({
  whenAuthed,
  whenNot = null
}) => {
  const { isAuthed } = useAuthStatus()

  if (isAuthed) {
    return whenAuthed
  }

  return whenNot
}

export default RenderWhenAuthed

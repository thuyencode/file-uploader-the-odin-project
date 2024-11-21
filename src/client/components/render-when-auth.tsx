import type { FunctionComponent, ReactNode } from 'react'
import useAuthStatus from '../hooks/auth/use-auth-status'

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

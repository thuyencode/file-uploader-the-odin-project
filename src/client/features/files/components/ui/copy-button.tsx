import { cn } from '@/client/libs/utils/tailwind'
import { Icon } from '@iconify/react'
import { useState, type ComponentProps, type FunctionComponent } from 'react'

interface CopyButtonProps extends Omit<ComponentProps<'button'>, 'onClick'> {
  text: string
}

const CopyButton: FunctionComponent<CopyButtonProps> = ({
  text,
  className,
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleOnClick = async (): Promise<void> => {
    if (isCopied) {
      return
    }

    setIsCopied(true)

    await Promise.all([
      navigator.clipboard.writeText(text),
      new Promise((resolve) => {
        setTimeout(resolve, 2000)
      })
    ])

    setIsCopied(false)
  }

  return (
    <button
      className={cn(
        'btn gap-1',
        { 'btn-success': isCopied, 'btn-outline': !isCopied },
        className
      )}
      onClick={() => {
        void handleOnClick()
      }}
      {...props}
    >
      <Icon
        className='text-xl'
        icon={isCopied ? 'mdi:checkbox-multiple-marked' : 'mdi:content-copy'}
      />
      {isCopied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default CopyButton

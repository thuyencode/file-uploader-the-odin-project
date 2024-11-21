import { cn } from '@/client/utils/tailwind'
import { Icon, type IconifyIconProps } from '@iconify/react'
import { forwardRef, type ComponentProps, type ReactElement } from 'react'
import type { FieldError } from 'react-hook-form'

type InputFieldProps = Omit<ComponentProps<'input'>, 'className' | 'id'> &
  Pick<IconifyIconProps, 'icon'> & {
    error?: FieldError
  }

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ name, icon, error, ...props }, ref): ReactElement => {
    const isError = Boolean(error)
    const errorMessage = error?.message

    return (
      <div className='space-y-1.5 text-left'>
        <label
          className={cn('input input-bordered flex items-center gap-2', {
            'input-error': isError
          })}
          htmlFor={name}
        >
          <Icon icon={icon} />
          <input className='grow' name={name} id={name} ref={ref} {...props} />
        </label>

        {isError && <div className='text-error'>{errorMessage}!</div>}
      </div>
    )
  }
)

export default InputField

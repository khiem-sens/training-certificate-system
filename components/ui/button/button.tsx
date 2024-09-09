'use client'
import { Assign } from '@/types/common'
import { CircleNotch } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import { forwardRef, ReactNode } from 'react'
import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from 'react-aria-components'
import { buttonTv, ButtonVariants } from './style'

type Props = Assign<RACButtonProps, ButtonVariants> & {
  isCurrentPage?: boolean
}

// Utility function to wrap strings in a <span>
const wrapStringsInSpan = (children: ReactNode): ReactNode => {
  if (typeof children === 'string') {
    // Wrap strings in a <span>
    return <span>{children}</span>
  }

  if (Array.isArray(children)) {
    // If children is an array, check each element
    return children.map((child, index) => {
      if (typeof child === 'string') {
        return <span key={index}>{child}</span>
      }
      return child
    })
  }
  return children
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, isCurrentPage, ...props }, ref) => {
    return (
      <RACButton
        ref={ref}
        {...props}
        isDisabled={props.isDisabled || !!props.isPending}
        className={composeRenderProps(props.className, (className, renderProps) =>
          buttonTv({ ...renderProps, ...props, className }),
        )}
      >
        {composeRenderProps(children, (children, { isFocused }) => (
          <>
            {wrapStringsInSpan(children)}
            {props.variant?.includes('ghost') && (
              <span
                data-slot='border'
                className={clsx([
                  'absolute inset-x-0 bottom-0 h-px',
                  props.variant === 'ghost' && 'bg-primary-2',
                  props.variant === 'danger-ghost' && 'bg-semantic-red-2',
                  isFocused || isCurrentPage ? 'opacity-100' : 'opacity-0',
                ])}
              />
            )}
            {!!props.isPending && (
              <span
                data-slot='loading-icon'
                className='absolute-center'
              >
                <CircleNotch
                  weight='bold'
                  className='animate-spin'
                />
              </span>
            )}
          </>
        ))}
      </RACButton>
    )
  },
)

export default Button

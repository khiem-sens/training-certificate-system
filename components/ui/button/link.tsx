'use client'

import { Assign } from '@/types/common'
import { CircleNotch } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import {
  composeRenderProps,
  Link as RACLink,
  LinkProps as RACLinkProps,
} from 'react-aria-components'
import { Route } from 'next'
import { buttonTv, ButtonVariants } from './style'

type Props = Assign<
  Assign<RACLinkProps, ButtonVariants>,
  {
    href: Route<string>
  }
>

const Link = forwardRef<HTMLAnchorElement, Props>(({ href, ...props }, ref) => {
  return (
    <RACLink
      ref={ref}
      href={href}
      {...props}
      isDisabled={props.isDisabled || !!props.isPending}
      className={composeRenderProps(props.className, (className, renderProps) =>
        buttonTv({ ...renderProps, ...props, className }),
      )}
    >
      {composeRenderProps(props.children, (children, { isFocused }) => (
        <>
          {children}
          {props.variant?.includes('ghost') && (
            <span
              data-slot='border'
              className={clsx([
                'absolute inset-x-0 bottom-0 h-px',
                props.variant === 'ghost' && 'bg-primary-2',
                props.variant === 'danger-ghost' && 'bg-semantic-red-2',
                isFocused ? 'opacity-100' : 'opacity-0',
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
    </RACLink>
  )
})

export default Link

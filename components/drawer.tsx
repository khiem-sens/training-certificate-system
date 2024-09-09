'use client'

import { Assign } from '@/types/common'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { Modal, ModalOverlay, ModalOverlayProps, Dialog as RACDialog } from 'react-aria-components'
import Button from './ui/button/button'

type DrawerProps = Assign<
  Omit<ModalOverlayProps, 'children'>,
  {
    'aria-labelledby': string
    children?: ReactNode | ((opts: { close: () => void }) => ReactNode)
  }
>

export default function Drawer({
  //
  ['aria-labelledby']: ariaLabelledby,
  isDismissable = true,
  children,
  ...props
}: DrawerProps) {
  return (
    <ModalOverlay
      {...props}
      isDismissable={isDismissable}
      className={clsx([
        //
        'fixed inset-0 z-drawer',
        'bg-neutral-1/50',
        'flex justify-end',
        'entering:animate-in entering:duration-300 entering:ease-out',
        'exiting:animate-out exiting:duration-200 exiting:ease-in',
        'entering:fade-in',
        'exiting:fade-out',
      ])}
    >
      <Modal
        className={clsx([
          //
          'shadow-dialog',
          'entering:animate-in entering:duration-300 entering:ease-out',
          'exiting:animate-out exiting:duration-200 exiting:ease-in',
          'entering:slide-in-from-right-full',
          'exiting:slide-out-to-right-full',
        ])}
      >
        <RACDialog
          aria-labelledby={ariaLabelledby}
          className={clsx([
            //
            'bg-neutral-4 shadow-border-l-neutral-2',
            'w-[100dvw] max-w-125 h-[100dvh]',
            'grid grid-rows-[auto_minmax(0,1fr)]',
          ])}
        >
          {children}
        </RACDialog>
      </Modal>
    </ModalOverlay>
  )
}

type DrawerHeaderProps = {
  title?: string
  close?: () => void
  form: string
}

export const DrawerHeader = ({ title = 'Drawer title', close, form }: DrawerHeaderProps) => {
  return (
    <div
      className={clsx([
        //
        'shadow-border-b-neutral-2',
        'px-6 py-4',
        'flex items-center gap-3',
      ])}
    >
      <h2
        className={clsx([
          //
          'grow',
          'text-h2 text-neutral-1',
        ])}
      >
        {title}
      </h2>

      <div
        className={clsx([
          //
          'shrink-0 self-start',
          'flex items-center gap-2',
        ])}
      >
        <Button
          variant='secondary'
          onPress={close}
        >
          Cancel
        </Button>
        <Button
          type='submit'
          form={form}
        >
          Save
        </Button>
      </div>
    </div>
  )
}

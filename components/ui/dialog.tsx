'use client'

import { Assign } from '@/types/common'
import tv from '@/utils/tv'
import { WarningCircle, X } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalOverlayProps,
  Dialog as RACDialog,
} from 'react-aria-components'
import Button from './button/button'

type DialogType = 'warning'

const dialogIconClassName = ['shrink-0']
const ICON_LOOKUP: Record<DialogType, JSX.Element> = {
  warning: <WarningDialogIcon className={clsx([dialogIconClassName])} />,
}

type Props = Assign<
  ModalOverlayProps,
  {
    title?: string
    'aria-labelledby'?: string
    type?: DialogType
    description?: string
    cancelText?: string
    onOk?: () => void
    okText?: string
  }
>

export default function Dialog({
  title = 'Dialog title',
  ['aria-labelledby']: ariaLabelledby,
  type = 'warning',
  description = 'Dialog description',
  cancelText = 'Cancel',
  onOk,
  okText = 'Ok',
  ...props
}: Props) {
  return (
    <ModalOverlay
      {...props}
      className={clsx([
        //
        'fixed inset-0 z-dialog',
        'bg-neutral-1/50',
        'grid place-items-center',
        'entering:animate-in entering:duration-300 entering:ease-out',
        'exiting:animate-out exiting:duration-200 exiting:ease-in',
        'entering:fade-in',
        'exiting:fade-out',
      ])}
    >
      <Modal
        className={clsx([
          //
          'entering:animate-in entering:duration-300 entering:ease-out',
          'exiting:animate-out exiting:duration-200 exiting:ease-in',
          'entering:zoom-in-95',
          'exiting:zoom-out-95',
        ])}
      >
        <RACDialog
          role='alertdialog'
          aria-labelledby={ariaLabelledby ?? title}
          className={clsx([
            //
            'rounded bg-neutral-4',
            'ring-inset ring-1 ring-neutral-2',
            'shadow-dialog',
            'p-6 w-[--dialog-width]',
            'flex items-start gap-6',
            'relative',
          ])}
        >
          {({ close }) => (
            <>
              {ICON_LOOKUP[type]}

              <div
                className={clsx([
                  //
                  'grow',
                  'grid gap-6',
                ])}
              >
                <div
                  className={clsx([
                    //
                    'grid gap-3',
                    'text-neutral-1',
                  ])}
                >
                  <Heading
                    slot='title'
                    className='text-body-md-bold pr-8'
                  >
                    {title}
                  </Heading>
                  <p
                    className='text-body-sm'
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  />
                </div>

                <div
                  className={clsx([
                    //
                    'pt-4 shadow-border-t-neutral-2',
                    'flex justify-end gap-3',
                  ])}
                >
                  <Button
                    variant='secondary'
                    onPress={close}
                  >
                    <span>{cancelText}</span>
                  </Button>
                  <Button onPress={onOk}>
                    <span>{okText}</span>
                  </Button>
                </div>
              </div>

              <Button
                variant='ghost'
                iconOnly
                className={clsx([
                  //
                  'absolute top-4 right-4',
                ])}
                onPress={close}
              >
                <X />
              </Button>
            </>
          )}
        </RACDialog>
      </Modal>
    </ModalOverlay>
  )
}

const warningDialogIconTv = tv({
  base: [
    'relative before:absolute after:absolute',
    'before:absolute-center after:absolute-center',
    'before:size-10 after:size-13',
    'before:opacity-25 after:opacity-10',
    'before:rounded-full after:rounded-full',
    'before:ring-inset after:ring-inset',
    'before:ring-[1.5px] after:ring-[1.5px]',
    'before:ring-semantic-red after:ring-semantic-red',
  ],
})

function WarningDialogIcon({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={warningDialogIconTv({ className })}
    >
      <WarningCircle
        size={32}
        className='text-semantic-red'
      />
    </div>
  )
}

'use client'
import Button from '@/components/Button/CustomButton'
import { X } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import * as React from 'react'

interface PopupNotificationProps {
  title: string
  message: string
  onConfirm: string
  onCancel: string
  route?: string
  onClose?: () => void // New prop to handle closing the popup
}

function PopupNotification({
  title,
  message,
  onConfirm,
  onCancel,
  route,
  onClose,
}: PopupNotificationProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  const router = useRouter()

  const handleBackClick = () => {
    setIsVisible(false)
    if (onClose) onClose() // Call onClose prop to reset the popup state
  }

  const handleConfirmClick = () => {
    setIsVisible(false)
    if (route) {
      router.push(route)
    }
    if (onClose) onClose()
  }

  // Insert <br/> after every period (.) or question mark (?)
  const formattedMessage = message.replace(/([.?!])\s*(?=[A-Z])/g, '$1<br/>')

  if (!isVisible) {
    return null
  }

  return (
    <>
      <div className='w-full h-screen fixed top-0 left-0 z-50 bg-black bg-opacity-50' />
      <section className='w-[700px] h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-start p-6 bg-neutral-4 rounded border border-neutral-2 shadow-lg'>
        <img
          loading='lazy'
          src='/icons/warning.svg'
          alt='Warning icon'
          className='relative w-[3.25rem] h-[3.25rem] top-[-0.625rem] left-[-0.625rem] rounded-full object-cover'
        />
        <article className='flex flex-col flex-1 min-w-[15rem] ml-4'>
          <header className='text-neutral-1'>
            <h1 className='text-body-md-bold leading-6'>{title}</h1>
          </header>
          <div
            className='flex-1 mt-3 text-body-sm text-opacity-70 overflow-y-auto text-neutral-1'
            dangerouslySetInnerHTML={{ __html: formattedMessage }}
          />
          <footer className='flex gap-4 items-center justify-end pt-4 mt-4 border-t border-neutral-2'>
            <Button
              onPress={handleBackClick}
              variant='secondary'
              className='text-sm'
            >
              {onCancel}
            </Button>
            <Button
              onPress={handleConfirmClick}
              variant='primary'
              className='text-sm'
            >
              {onConfirm}
            </Button>
          </footer>
        </article>
        <div className='absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1'>
          <div
            className='flex justify-center items-center w-6 h-6 cursor-pointer'
            role='button'
            tabIndex={0}
            aria-label='Close'
          >
            <Button
              iconOnly
              variant='ghost'
              onPress={handleBackClick}
            >
              <X
                size={24}
                weight='light'
                className='text-primary-1'
              />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default PopupNotification

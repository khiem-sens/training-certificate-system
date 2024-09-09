'use client'

import clsx from 'clsx'
import { useOverlayScrollbars } from 'overlayscrollbars-react'
import { useEffect, useRef, type PropsWithChildren } from 'react'

export default function LoginLayout({ children }: PropsWithChildren) {
  const ref = useRef<HTMLElement>(null)
  const [initialize] = useOverlayScrollbars({
    defer: true,
    options: {
      scrollbars: {
        theme: 'os-theme-custom',
        autoHide: 'scroll',
        clickScroll: true,
      },
    },
  })
  useEffect(() => {
    if (!ref.current) return
    initialize({
      target: ref.current,
      elements: {
        viewport: ref.current,
      },
    })
  }, [initialize])

  return (
    <main
      ref={ref}
      data-overlayscrollbars-initialize
      className={clsx([
        //
        'w-dvw h-dvh',
        'grid place-items-center',
        'p-4',
      ])}
    >
      {children}
    </main>
  )
}

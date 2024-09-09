'use client'

import { useOverlayScrollbars } from 'overlayscrollbars-react'
import { tableLayoutSlot } from '@/components/ui/table/style'
import { ComponentPropsWithoutRef, useEffect, useRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'>

export default function TableLayout({ className, children, ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [initialize] = useOverlayScrollbars({
    defer: true,
    options: {
      scrollbars: {
        theme: 'os-theme-custom os-theme-custom-table',
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
    <div
      {...props}
      ref={ref}
      data-overlayscrollbars-initialize
      className={tableLayoutSlot({ className })}
    >
      {children}
    </div>
  )
}

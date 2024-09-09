import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main
      className={clsx([
        // FIXME: 3.25rem is the height of header, make it dynamic
        'h-[calc(100dvh-3.25rem)]',
        'flex flex-col',
      ])}
    >
      {children}
    </main>
  )
}

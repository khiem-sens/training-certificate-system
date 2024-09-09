'use client'

import type { PropsWithChildren } from 'react'
import RouterProvider from './router'
import OverlayScrollbarsProvider from './overlay-scrollbars'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <RouterProvider>
      <OverlayScrollbarsProvider>{children}</OverlayScrollbarsProvider>
      {/* {children} */}
    </RouterProvider>
  )
}

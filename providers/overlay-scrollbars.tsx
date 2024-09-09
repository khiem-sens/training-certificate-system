'use client'

import type { PropsWithChildren } from 'react'
import { OverlayScrollbars, ClickScrollPlugin } from 'overlayscrollbars'

OverlayScrollbars.plugin(ClickScrollPlugin)

export default function OverlayScrollbarsProvider({ children }: PropsWithChildren) {
  return children
}

import '@/app/globals.css'
import Providers from '@/providers'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Libre_Baskerville, Noto_Sans_JP } from 'next/font/google'

const sans = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-sans',
})

const display = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Login',
  description: 'Web3-based Training Certificates',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={clsx([sans.variable, display.variable])}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

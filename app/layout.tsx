import type { Metadata } from 'next'
import { Noto_Sans_JP, Libre_Baskerville } from 'next/font/google'
import './globals.css'

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
  title: 'Training Certificate System',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  form,
  certification,
}: Readonly<{
  children: React.ReactNode
  form: React.ReactNode
  certification: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${sans.variable} ${display.variable} font-primary`}>
        {children}
        {form}
        {certification}
      </body>
    </html>
  )
}

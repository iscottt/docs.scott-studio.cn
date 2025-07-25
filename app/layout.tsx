import { Body } from '@/app/layout.client'
import type { Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { ReactNode } from 'react'
import './global.css'
import { Provider } from './provider'

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
})

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
}
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
        <meta name="algolia-site-verification" content="D082A3958E07F7DA" />
      </head>
      <Body>
        <Provider>{children}</Provider>
      </Body>
    </html>
  )
}

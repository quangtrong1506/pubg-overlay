import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'
import React from 'react'

import ThemeProvider from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Trọng Sa Đoạ - Overlay',
  description: 'Làm cho vui thôi'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable
        )}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

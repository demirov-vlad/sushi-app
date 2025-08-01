import type { Metadata } from 'next'
import '../../public/fonts/fonts.css'
import '../globals.css'
import React from 'react'
import { Header } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Sushi App',
  description:
    'Discover delicious sushi recipes, order online, and enjoy the best sushi experience with our app.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='font-nunito'>
        <main className='min-h-screen '>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'

import Nav from './components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MATIC',
  description: 'the African era',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        
        <main className=''>
          < Nav />
          {children}
          <Footer />
        </main>
        
      </body>
    </html>
  )
}

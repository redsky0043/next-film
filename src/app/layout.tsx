import './globals.css'
import { ReactNode } from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import { Providers } from "@/providers/providers"

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Main page',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-gray-800 grid grid-flow-row grid-rows-[1fr,auto]'>
        <Providers>
          <Header/>
          <main className='bg-black'>
            {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
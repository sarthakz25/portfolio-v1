import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/header"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '<Sarthak/> Portfolio',
  description: 'Sarthak Khandelwal: NMIMS B.Tech student blending tech prowess with creative insight.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative 
      h-[5000px] pt-28 sm:pt-36`}>

        <Header />

        {children}
      </body>
    </html>
  )
}

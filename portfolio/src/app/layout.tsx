import type { Metadata } from 'next'
import { Ageo } from '@/utils/custom-font'
import './globals.css'
import Header from "@/components/header"

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
      <body className={`${Ageo.className} text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>

        <Header />

        {children}
      </body>
    </html>
  )
}

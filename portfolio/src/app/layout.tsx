import type { Metadata } from 'next'
import { Ageo } from '@/misc/custom-font'
import './globals.css'
import ActiveSectionContextProvider from '@/context/active-section-context'

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
    <html lang="en" className="!scroll-smooth">
      <body className={`${Ageo.className} text-gray-950 relative pt-28 sm:pt-36`}>
        <ActiveSectionContextProvider>
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}

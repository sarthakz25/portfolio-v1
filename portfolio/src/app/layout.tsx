import type { Metadata } from 'next';
import { Ageo } from '@/misc/custom-font';
import './globals.css';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import ThemeContextProvider from '@/context/theme-context';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';

export const metadata: Metadata = {
  title: "<Sarthak/> Portfolio",
  description: "Sarthak Khandelwal: NMIMS B.Tech student blending tech prowess with creative insight.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${Ageo.className} text-gray-950 relative dark:bg-zinc-900 dark:text-zinc-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position='bottom-center' />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

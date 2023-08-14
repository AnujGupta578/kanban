import { Providers } from '@/app/providers'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { AppProps } from 'next/app'

import '../app/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers>
        <Navbar />
        <Component className="light" {...pageProps} />
      </Providers>
      <Footer />
    </>
  )
}
import '../src/styles/globals.css'
import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { repositoryName } from 'src/services/prismicio'
import { Montserrat } from '@next/font/google'
import { Header } from '@/components/organism/Header'
import Footer from '@/components/organism/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <main className={montserrat.className}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </main>
      </PrismicPreview>
    </PrismicProvider>
  )
}

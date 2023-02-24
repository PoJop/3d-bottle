import '@/styles/globals.scss'
import cn from 'classnames'
import type { AppProps } from 'next/app'
import { Barlow } from '@next/font/google'
const barlow = Barlow({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn("h-full", barlow.className)}>
      <Component {...pageProps} />
    </div>
  )
}

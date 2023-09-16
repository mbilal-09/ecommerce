import '@/styles/globals.css'
import { ContextMain } from '@/context/context'

export default function App({ Component, pageProps }) {
  return <ContextMain><Component {...pageProps} /></ContextMain>
}

import {SessionProvider, useSession} from 'next-auth/react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App
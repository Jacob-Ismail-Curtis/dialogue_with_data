import 'styles/globals.css'
import 'styles/tailwind.css'

import { ModalProvider, ToastProvider } from '@apideck/components'
import { AppProps } from 'next/app'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ToastProvider>
      <ModalProvider>
        <div className="relative flex">
          <Sidebar />
          <div className="ml-64 w-full">
            {' '}
            {/* Ensure content is pushed right by sidebar */}
            <Header />
            <Component {...pageProps} />
          </div>
        </div>
      </ModalProvider>
    </ToastProvider>
  )
}

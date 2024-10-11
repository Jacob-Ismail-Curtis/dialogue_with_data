import 'styles/globals.css'
import 'styles/tailwind.css'

import { AppProps } from 'next/app'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="ml-52 w-full">
        {' '}
        {/* Ensure content is pushed right by sidebar */}
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

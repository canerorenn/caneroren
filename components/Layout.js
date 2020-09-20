import Head from 'next/head';

import Header from './Header';

function Layout({ children }) {

  return (
    <div className="layout">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Caner ÖREN</title>
      </Head>
      <div className="container">
        <Header />
        <main className="wrapper">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout

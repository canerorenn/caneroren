import Head from 'next/head';

import Header from './Header';

function Layout({ children }) {

  return (
    <div className="layout">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Caner ÖREN - Front-end Developer" />
        <meta name="keywords" content="caner, caner ören, front-end developer, front-end, graphic, grafiker, web tasarım, web yazılım,
            web site, web, internet sitesi, internet, tasarım, tasarımcı, tasarımcı, ören, ören caner, ören" />
        <meta name="google-site-verification" content="G6qPycyIkMMOUYf7F6w0VoNrsq-1fnWE4amxihMq_fU" />
        <link rel="shortcut icon" type="image/png" href="/icons/favicon.png" />
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

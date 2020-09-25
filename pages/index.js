import React from 'react'
import Layout from '../components/Layout'

import Button from '../components/Button'

export default function HomePage() {
  return (
    <Layout>
      <section className="entry">
        <h1><strong>Hello,</strong> I'm developing frontend jobs as a freelancer.</h1>
        <p>You can currently <span>work</span> with me.</p>
        <Button content="Get in touch" tag="link" href="/get-in-touch" className="button" />
      </section>
    </Layout>
  )
}

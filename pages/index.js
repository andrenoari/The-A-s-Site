import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The A!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hey, I'm A!" />
        <p className="description">
         Playing around codes <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

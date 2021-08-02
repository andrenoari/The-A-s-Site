import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Ariful!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hey, I'm A!" />
        <p className="description">
         I don't know who am I but sure I'm giving my test for the hereafter 😀 
        </p>
      </main>
    
      <Footer />
    </div>
  )
}

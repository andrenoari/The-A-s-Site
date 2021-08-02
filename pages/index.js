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
         I don't know who am I but sure I'm giving my test for the hereafter 😀 
        </p>
      </main>
    <body>
      <Header title="I'm available on Social Media, You can stalk me 😋" />
      <p className="social"
       ✨ Instagram href="https://www.instagram.com/andrenoari/"
       🕊️ Twitter href="https://www.twitter.com/andrenoari/"
       </p>
    </body>

      <Footer />
    </div>
  )
}

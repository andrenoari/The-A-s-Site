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
        <Header title="Hey, I'm Ariful" />
        <p className="description">
         I don't know who am I but sure I'm giving my test for the hereafter 😀 
       </p>
    <h6>I'm available on Social Media, You can stalk me there 😋</h6>
<p>✨ <a title="Instagram" href="https://www.instagram.com/andrenoari/">Instagram</a>&nbsp; &nbsp;🕊️ <a title="Twitter" href="https://www.twitter.com/andrenoari/">Twitter</a></p>
      </main>
    
      <Footer />
    </div>
  )
}

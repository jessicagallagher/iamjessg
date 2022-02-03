import Head from 'next/head'
import NavBar from '../components/NavBar'
import HeadTag from '../components/HeadTag'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <About />
      </main>
      <Footer />
    </div>
  )
}

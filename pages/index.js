import Head from 'next/head'
import HeadTag from '../components/HeadTag'
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jessica Gallagher</title>
        <link rel="icon" href="/favicon.ico" />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <HomePage />
      </main>
        <Footer />
    </div>
  )
}

import Head from 'next/head'
import { NavBar, HeadTag, About, Footer } from '../../components'

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

import Head from 'next/head'
import { useEffect } from 'react';
import { HeadTag, NavBar, HomePage, Footer } from '../components'

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  
  return (
    <div>
      <Head>
        <title>Tech Meowt</title>
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

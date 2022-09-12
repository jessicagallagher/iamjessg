import Head from 'next/head';
import { NavBar, HeadTag, Footer, Portfolio } from '../../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

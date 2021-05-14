import Head from 'next/head'
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jessica Gallagher</title>
        <meta name="description" content="Jessica Gallagher's Personal Portfolio" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Next, Web Developer, Software Engineer, Tailwind, Brooklyn" />
        <meta name="author" content="Jessica Gallagher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <HomePage />
      </main>
        <Footer />
    </div>
  )
}

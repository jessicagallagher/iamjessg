import Head from 'next/head'
import NavBar from '../components/NavBar'
import About from '../components/About'
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <NavBar />
        <About />
      </main>
      <Footer />
    </div>
  )
}

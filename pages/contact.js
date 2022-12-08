import Head from 'next/head'
import { ContactUs, NavBar, HeadTag, Footer } from '../components'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <link rel='icon' href='/favicon.ico' />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

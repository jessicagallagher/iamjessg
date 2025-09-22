import Head from 'next/head'
import { ContactUs, NavBar, Footer } from '../components'

export default function Contact() {
  return (
    <div>
      <Head>
        <meta name='description' content="Tech Meowt's website" />
        <meta
          name='keywords'
          content='HTML, CSS, JavaScript, React, Next, Web Developer, Software Engineer, Software Developer, Tailwind, Brooklyn, Non Profit, Tech Meowt, Agency, Branding, CRM, Blog, Database'
        />
        <meta name='author' content='Jessica Gallagher' />
        <title>Contact Us</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <NavBar />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

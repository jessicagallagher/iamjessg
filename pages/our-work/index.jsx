import Head from 'next/head';
import { NavBar, HeadTag, Footer, OurWork } from '../../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Our Work</title>
        <link rel='icon' href='/favicon.ico' />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <OurWork />
      </main>
      <Footer />
    </div>
  );
}

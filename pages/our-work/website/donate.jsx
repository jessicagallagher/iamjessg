import Head from 'next/head';
import { NavBar, HeadTag, Footer, MockWebsiteDonate } from '../../../components';

export default function About() {
  return (
    <div>
      <Head>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <MockWebsiteDonate />
      </main>
      <Footer />
    </div>
  );
}

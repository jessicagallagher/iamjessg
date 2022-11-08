import Head from 'next/head';
import { NavBar, HeadTag, Footer, MockWebsiteAbout } from '../../../components';

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
        <MockWebsiteAbout />
      </main>
      <Footer />
    </div>
  );
}

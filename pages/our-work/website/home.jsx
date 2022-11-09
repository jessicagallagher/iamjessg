import Head from 'next/head';
import { NavBar, HeadTag, Footer, MockWebsiteHome } from '../../../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <MockWebsiteHome />
      </main>
      <Footer />
    </div>
  );
}

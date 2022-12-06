import Head from 'next/head';
import { NavBar, HeadTag, Footer, MockWebsiteOurWork } from '../../../components';

export default function OurWork() {
  return (
    <div>
      <Head>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <MockWebsiteOurWork />
      </main>
      <Footer />
    </div>
  );
}

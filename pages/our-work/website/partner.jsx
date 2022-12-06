import Head from 'next/head';
import {
  NavBar,
  HeadTag,
  Footer,
  MockWebsitePartner,
} from '../../../components';

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
        <MockWebsitePartner />
      </main>
      <Footer />
    </div>
  );
}

import Head from 'next/head';
import { NavBar, HeadTag, Footer, MockWebsiteVolunteer } from '../../../components';

export default function Volunteer() {
  return (
    <div>
      <Head>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <MockWebsiteVolunteer />
      </main>
      <Footer />
    </div>
  );
}

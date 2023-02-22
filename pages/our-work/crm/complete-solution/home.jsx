import Head from 'next/head';
import { NavBar, HeadTag, Footer, CrmHome } from '../../../../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CRM</title>
        <link rel='icon' href='/favicon.ico' />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <CrmHome />
      </main>
      <Footer />
    </div>
  );
}

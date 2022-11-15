import Head from 'next/head';
import { NavBar, HeadTag, JessicaGallagher, Footer } from '../../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jessica Gallagher</title>
        <link rel='icon' href='/favicon.ico' />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <JessicaGallagher />
      </main>
      <Footer />
    </div>
  );
}

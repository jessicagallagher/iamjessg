import Head from 'next/head';
import { NavBar, HeadTag, Footer, BlogHome } from '../../components'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel='icon' href='/favicon.ico' />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <BlogHome />
      </main>
      <Footer />
    </div>
  );
}

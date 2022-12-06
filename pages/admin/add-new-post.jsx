import Head from 'next/head';
import { NavBar, HeadTag, Footer, AddPost } from '../../components';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Add new post</title>
        <link rel='icon' href='/favicon.ico' />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <AddPost />
      </main>
      <Footer />
    </div>
  );
}

import { useEffect } from 'react';
import { HeadTag, NavBar, HomePage, Footer } from '../components';

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <HeadTag title={'Tech Meowt'} />
      <main>
        <NavBar />
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

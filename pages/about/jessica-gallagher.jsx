import { NavBar, HeadTag, JessicaGallagher, Footer } from '../../components';

export default function Home() {
  return (
    <div>
        <HeadTag title={'Jessica Gallagher'}/>
      <main>
        <NavBar />
        <JessicaGallagher />
      </main>
      <Footer />
    </div>
  );
}

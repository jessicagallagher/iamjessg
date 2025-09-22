import { NavBar, HeadTag, Footer, OurWork } from '../../components';

export default function Home() {
  return (
    <div>
      <HeadTag title={'Our Work'}/>
      <main>
        <NavBar />
        <OurWork />
      </main>
      <Footer />
    </div>
  );
}

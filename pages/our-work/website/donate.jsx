import { NavBar, HeadTag, Footer, MockWebsiteDonate } from '../../../components';

export default function About() {
  return (
    <div>
      <HeadTag title={'Your Company Name'}/>
      <main>
        <NavBar />
        <MockWebsiteDonate />
      </main>
      <Footer />
    </div>
  );
}

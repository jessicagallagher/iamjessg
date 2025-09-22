import { NavBar, HeadTag, Footer, MockWebsiteAbout } from '../../../components';

export default function About() {
  return (
    <div>
        <HeadTag title={'Your Company Name'}/>
      <main>
        <NavBar />
        <MockWebsiteAbout />
      </main>
      <Footer />
    </div>
  );
}

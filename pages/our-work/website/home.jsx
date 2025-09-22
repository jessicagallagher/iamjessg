import { NavBar, HeadTag, Footer, MockWebsiteHome } from '../../../components';

export default function Home() {
  return (
    <div>
      <HeadTag title={'Your Company Name'} />
      <main>
        <NavBar />
        <MockWebsiteHome />
      </main>
      <Footer />
    </div>
  );
}

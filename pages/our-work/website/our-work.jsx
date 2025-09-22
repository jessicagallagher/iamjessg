import { NavBar, HeadTag, Footer, MockWebsiteOurWork } from '../../../components';

export default function OurWork() {
  return (
    <div>
      <HeadTag title={'Your Company Name'} />
      <main>
        <NavBar />
        <MockWebsiteOurWork />
      </main>
      <Footer />
    </div>
  );
}

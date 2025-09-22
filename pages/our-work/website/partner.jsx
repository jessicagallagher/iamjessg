import {
  NavBar,
  HeadTag,
  Footer,
  MockWebsitePartner,
} from '../../../components';

export default function OurWork() {
  return (
    <div>
      <HeadTag title={'Your Company Name'} />
      <main>
        <NavBar />
        <MockWebsitePartner />
      </main>
      <Footer />
    </div>
  );
}

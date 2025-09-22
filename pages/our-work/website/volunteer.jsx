import { NavBar, HeadTag, Footer, MockWebsiteVolunteer } from '../../../components';

export default function Volunteer() {
  return (
    <div>
      <HeadTag title={'Your Company Name'} />
      <main>
        <NavBar />
        <MockWebsiteVolunteer />
      </main>
      <Footer />
    </div>
  );
}

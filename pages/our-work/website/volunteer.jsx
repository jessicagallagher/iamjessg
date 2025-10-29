import { HeadTag, Footer, MockWebsiteVolunteer } from '../../../components';

export default function Volunteer() {
  return (
    <div>
      <HeadTag title={'Website Example'} />
      <main>
        <MockWebsiteVolunteer />
      </main>
      <Footer />
    </div>
  );
}

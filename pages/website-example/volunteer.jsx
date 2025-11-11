import { HeadTag, Footer, MockWebsiteVolunteer } from '../../components';

export default function Volunteer() {
  return (
    <div>
      <HeadTag title={'Volunteer'} />
      <main>
        <MockWebsiteVolunteer />
      </main>
      <Footer />
    </div>
  );
}

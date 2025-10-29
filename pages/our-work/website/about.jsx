import { HeadTag, Footer, MockWebsiteAbout } from '../../../components';

export default function About() {
  return (
    <div>
        <HeadTag title={'Example Website'}/>
      <main>
        <MockWebsiteAbout />
      </main>
      <Footer />
    </div>
  );
}

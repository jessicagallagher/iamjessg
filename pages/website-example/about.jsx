import { HeadTag, Footer, MockWebsiteAbout } from '../../components';

export default function About() {
  return (
    <div>
      <HeadTag title={'About'} />
      <main>
        <MockWebsiteAbout />
      </main>
      <Footer />
    </div>
  );
}

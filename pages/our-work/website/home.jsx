import { HeadTag, Footer, MockWebsiteHome } from '../../../components';

export default function Home() {
  return (
    <div>
      <HeadTag title={'Example Website'} />
      <main>
        <MockWebsiteHome />
      </main>
      <Footer />
    </div>
  );
}

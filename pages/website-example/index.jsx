import { HeadTag, Footer, MockWebsiteHome } from '../../components';

export default function Home() {
  return (
    <div>
      <HeadTag title={'Home'} />
      <main>
        <MockWebsiteHome />
      </main>
      <Footer />
    </div>
  );
}

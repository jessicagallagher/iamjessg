import { HeadTag, Footer, MockWebsiteDonate } from '../../../components';

export default function About() {
  return (
    <div>
      <HeadTag title={'Example Website'}/>
      <main>
        <MockWebsiteDonate />
      </main>
      <Footer />
    </div>
  );
}

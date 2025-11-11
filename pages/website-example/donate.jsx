import { HeadTag, Footer, MockWebsiteDonate } from '../../components';

export default function About() {
  return (
    <div>
      <HeadTag title={'Donate'}/>
      <main>
        <MockWebsiteDonate />
      </main>
      <Footer />
    </div>
  );
}

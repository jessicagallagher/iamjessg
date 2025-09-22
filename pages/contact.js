import { ContactUs, NavBar, Footer, HeadTag } from '../components'

export default function Contact() {
  return (
    <div>
      <HeadTag title={'Contact'}/>
      <main>
        <NavBar />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

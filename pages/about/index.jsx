import { NavBar, HeadTag, About, Footer } from '../../components'

export default function Home() {
  return (
    <div>
        <HeadTag title={'About'}/>
      <main>
        <NavBar />
        <About />
      </main>
      <Footer />
    </div>
  )
}

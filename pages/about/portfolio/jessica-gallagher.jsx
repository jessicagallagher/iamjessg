import Head from 'next/head'
import { NavBar, HeadTag, Footer, PortfolioJessicaGallagher } from '../../../components'

export default function JessicaGallagherPortfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio | Jessica Gallagher</title>
        <link rel='icon' href='/favicon.ico' />
        <HeadTag />
      </Head>
      <main>
        <NavBar />
        <PortfolioJessicaGallagher />
      </main>
    </div>
  );
}

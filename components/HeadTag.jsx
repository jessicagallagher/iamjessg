import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/compat/router';

export default function HeadTag({ title }) {
  const [currentUrl, setCurrentUrl] = useState(null)
  const router = useRouter() 
  const baseUrl = 'https://www.techmeowt.com'
  // const currentUrl = `${baseUrl}${router.asPath}`

  useEffect(() => {
    if (router.isReady) {
      setCurrentUrl(`${baseUrl}${router.asPath}`);
    }
  }, [router.isReady, router.asPath])

  return (
    <Head>
      <meta
        name='description'
        content="Tech Meowt's is a website and web app development agency located in Brooklyn, New York. Tech Meowt is owned by Chief Technology Officer Jessica Gallagher. Tech Meowt uses technologies such as Next.js, Tailwind CSS, Supabase, and Prismic CMS. Tech Meowt's services include website development and maintenance, web application development and maintenance, CRM development and maintenance, and database development and maintenance."
      />
      <meta
        name='keywords'
        content='Freelance, Freelancer, Vercel, HTML, CSS, JavaScript, React, Next, Web Developer, Software Engineer, Software Developer, Software Designer, Tailwind, Brooklyn, Non Profit, Pro Bono, Tech Meowt, Agency, Branding, CRM, Blog, Database, Jessica Gallagher, Jessica L Gallagher, Jessica Lyn Gallagher, CMS, Full Stack Engineer, Full-Stack Engineer, Frontend Engineer, Front End Engineer, Web Developer, Website Developer, Web Designer, Website Designer, Developer, Engineer, Software Designer, Jessica Gallagher NYC, Jessica L Gallagher NYC, Jessica Lyn Gallagher, NYC, Jessica Gallagher New York City, Jessica L Gallagher New York City, Jessica Lyn Gallagher New York City, Jessica Gallagher Brooklyn, Jessica L Gallagher Brooklyn, Jessica Lyn Gallagher Brooklyn, TechMeowt, Jessica Gallagher Brooklyn NY, Jessica L Gallagher Brooklyn NY, Jessica Lyn Gallagher Brooklyn NY, Jessica Gallagher Manhattan, Jessica L Gallagher Manhattan, Jessica Lyn Gallagher Manhattan, Jessica Gallagher Brooklyn New York, Jessica L Gallagher Brooklyn New York, Jessica Lyn Gallagher Brooklyn New York, NYC Full Stack Engineer, NYC Full-Stack Engineer, NYC Frontend Engineer, NYC Front End Engineer, NYC Front-End Engineer, NYC Software Developer, NYC Software Engineer, NYC Web Developer, NYC Website Developer, NYC Web Designer, NYC Website Designer, NYC Developer, NYC Engineer, NYC Software Engineer, Prismic, Prismic CMS, New York City Full Stack Engineer, New York City Full-Stack Engineer, New York City Frontend Engineer, New York City Front End Engineer, New York City Front-End Engineer, New York City Software Developer, New York City Software Engineer, New York City Web Developer, New York City Website Developer, New York City Web Designer, New York City Website Designer, New York City Developer, New York City Engineer, New York City Software Designer, Brooklyn Full Stack Engineer, Brooklyn Full-Stack Engineer, Brooklyn Frontend Engineer, Brooklyn Front End Engineer, Brooklyn Front-End Engineer, Brooklyn Software Developer, Brooklyn Software Engineer, Brooklyn Web Developer, Brooklyn Website Developer, Brooklyn Web Designer, Brooklyn Website Designer, Brooklyn Developer, Brooklyn Engineer, Brooklyn Software Designer, Tailwind CSS, Brooklyn NY Full Stack Engineer, Brooklyn NY Fullstack Engineer, Brooklyn NY Full-Stack Engineer, Brooklyn NY Frontend Engineer, Brooklyn NY Front End Engineer, Brooklyn NY Front-End Engineer, Brooklyn NY Software Developer, Brooklyn NY Software Engineer, Brooklyn NY Web Developer, Brooklyn NY Website Developer, Brooklyn NY Web Designer, Brooklyn NY Website Designer, Brooklyn NY Developer, Brooklyn NY Engineer, Brooklyn NY Software Designer, Brooklyn New York Full Stack Engineer, Brooklyn New York Full-Stack Engineer, Brooklyn New York Fullstack Engineer, Brooklyn New York Frontend Engineer, Brooklyn New York Front End Engineer, Brooklyn New York Front-End Engineer, Brooklyn New York Software Developer, Brooklyn New York Software Engineer, Brooklyn New York Web Developer, Brooklyn New York Website Developer, Brooklyn New York Developer, Brooklyn New York Engineer, Brooklyn New York Software Designer, Manhattan Full Stack Engineer, Manhattan Fullstack Engineer, Manhattan Full-Stack Engineer, Manhattan Frontend Engineer, Manhattan Front End Engineer, Manhattan Front-End Engineer, Manhattan Software Developer, Manhattan Software Engineer, Manhattan Web Developer, Manhattan Website Developer, Manhattan Web Designer, Manhattan Website Designer, Manhattan Developer, Manhattan Engineer, Manhattan Software Designer, Pro Bono Full Stack Engineer, Pro Bono Fullstack Engineer, Pro Bono Full-Stack Engineer, Pro Bono Frontend Engineer, Pro Bono Front-End Engineer, Pro Bono Front End Engineer, Pro Bono Software Developer, Pro Bono Software Engineer, Pro Bono Web Developer, Pro Bono Website Developer, Pro Bono Web Designer, Pro Bono Website Designer, Pro Bono Developer, Pro Bono Engineer, Pro Bono Software Designer'
      />
      <meta name='author' content='Jessica Gallagher, Tech Meowt' />
      <meta name='creator' content='Jessica Gallagher, Tech Meowt' />
      <meta name='designer' content='Jessica Gallagher, Tech Meowt' />
      <meta name='developer' content='Jessica Gallagher, Tech Meowt' />
      <meta name='publisher' content='Jessica Gallagher, Tech Meowt' />
      <meta name='copyright' content='© 2025 Tech Meowt, LLC' />
      <meta name='organization' content='Tech Meowt, LLC' />
      <link rel='canonical' href={currentUrl} />
      <meta property='og:url' content={currentUrl} />
      <link rel='publisher' href='https://www.techmeowt.com' />
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
}

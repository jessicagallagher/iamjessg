import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import { Raleway } from '@next/font/google';
import '../styles/globals.css';

const siteFont = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${siteFont.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights route={router.pathname} />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </>
  );
}

export default MyApp;

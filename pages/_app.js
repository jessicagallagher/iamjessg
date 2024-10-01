import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </>
  );
}

export default MyApp;

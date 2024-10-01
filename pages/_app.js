import '../styles/globals.css';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId={process.env.GTM_ID} />
      <GoogleAnalytics gaId={process.env.GA_ID} />
    </>
  );
}

export default MyApp;

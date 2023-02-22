import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MSV5GHB' });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

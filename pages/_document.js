import Document, { Html, Head, Main, NextScript } from 'next/document';
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

const dev = PHASE_DEVELOPMENT_SERVER;
const prod = PHASE_PRODUCTION_BUILD;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        {/* <body className={`${dev ? 'debug-screens' : ''}`}> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

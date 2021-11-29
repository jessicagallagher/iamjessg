import Document, { Html, Head, Main, NextScript } from 'next/document';
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const dev = PHASE_DEVELOPMENT_SERVER;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className={`${dev ? 'debug-screens' : ''}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

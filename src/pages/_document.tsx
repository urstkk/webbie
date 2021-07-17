import Document, { Head, Html, Main, NextScript } from 'next/document';

/**
 * The document of the application.
 */
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">   
      <Head />
        <body className={'font-sans text-base text-white bg-dark'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

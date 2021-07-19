import '../../css/theme.scss';
import '../../css/styles.scss';

import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';
import { GA_TRACKING_ID } from '../lib/ga';
import { trackPageView } from '../lib/ga';

/**
 * This is the root page that envelops the page being navigated to.
 */
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Krishna Kishore's portfolio and blog where you can get to know about him, what he is upto and pick up a trick or two from his blog posts which are mostly about web development."
        />
        <meta name="author" content="Tummala Krishna Kishore" />

        {/* Open Graph */}
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/img/logo-social.png`}
        />
        <meta
          property="article:author"
          content="https://twitter.com/sidthesloth92"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@sidthesloth92" />

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
          }}
        />

        {/* MS Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "7ei0mkvbfa");
              `
          }}
        />
      </Head>
      <Menu />
      <div
        className="pt-20"
        style={{
          maxWidth: '100vw',
          width: '100vw',
          overflow: 'hidden'
        }}>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Component key={router.asPath} {...pageProps} one={'one'} />
        </AnimatePresence>
        {router.pathname.length > 1 && <Footer />}
      </div>
    </>
  );
};

export default MyApp;

import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { useMemo } from 'react';

import withPageTransition from '../../components/hoc/with-page-transition';
import { addCamelCaseKeys } from '../../lib';
import { GA_TRACKING_ID } from '../../lib/ga';
import InfoSection from './info-section/InfoSection';
import { navVariants } from './Menu.animation';
import s from './Menu.module.scss';
import TileSection from './tile-section/TileSection';

/**
 * Menu of the website.
 */
const Menu: React.FC = () => {
  const styles = useMemo(() => addCamelCaseKeys(s), []);
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  return (
    <>
      <Head>
        <title>Krishna Kishore&apos;s Portfolio and Blog</title>
        <meta
          property="og:title"
          content="Krishna Kishore's Portfolio and Blog"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}}`}
        />

        <meta
          name="twitter:title"
          content="Krishna Kishore's Portfolio and Blog"
        />
        <meta
          name="twitter:description"
          content="Krishna Kishore's portfolio and blog where you can get to know about him, what he is upto and pick up a trick or two from his blog posts which are mostly about web development."
        />
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
          content="https://twitter.com/kri4shna"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@kri4shna" />

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
      <motion.nav
        className="fixed top-0 left-0 w-screen h-screen bg-dark flex flex-col lg:flex-row flex-wrap z-20 shadow-md"
        variants={navVariants}
        initial={'closed'}
        animate={isMenuOpen ? 'open' : 'closed'}>
        <InfoSection />
        <TileSection
          closeMenu={() => {
            setIsMenuOpen(false);
          }}
        />
      </motion.nav>
    </>
  );
};

export default withPageTransition(Menu);

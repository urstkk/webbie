import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { useState } from 'react';

import withPageTransition from '../components/hoc/with-page-transition';
import Menu from '../components/menu/Menu';
import NavBar from '../components/nav-bar/NavBar';
import SocialIcons from '../components/social-icons/SocialIcons';
import IconHelpCircleFilled from '../icons/HelpCircleFilled';
import { useLandingPageCanvasEffect } from '../lib/hooks';

/**
 * Variants for the help section.
 */
const helpSectionVariants = {
  open: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'circOut'
    }
  },
  closed: {
    scale: 0
  }
};

/**
 * The landing page of the application.
 */
const Home: React.FC = () => {
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
      </Head>
    </>
  );
};

export default withPageTransition(Home);

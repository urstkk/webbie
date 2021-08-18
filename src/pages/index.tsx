import React from 'react';

import withPageTransition from '../components/hoc/with-page-transition';
import NavBar from '../components/nav-bar/NavBar';

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
      <NavBar />
    </>
  );
};

export default withPageTransition(Home);

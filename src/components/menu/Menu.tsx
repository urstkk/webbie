import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

import { addCamelCaseKeys } from '../../lib';
import NavBar from '../nav-bar/NavBar';
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
      <NavBar />
      <motion.nav
        className="fixed top-0 left-0 w-screen h-screen bg-dark flex flex-col lg:flex-row flex-wrap z-20 shadow-md"
        variants={navVariants}
        initial={'closed'}
        animate={isMenuOpen ? 'open' : 'closed'}>
        <TileSection
          closeMenu={() => {
            setIsMenuOpen(false);
          }}
        />
        <InfoSection />
      </motion.nav>
    </>
  );
};

export default Menu;

import { motion } from 'framer-motion';

import content from '../../../../frontaid.content.json';
import MenuTile from '../../../components/menu/menu-tile/MenuTile';

/**
 * Props for {@link TileSection}
 */
interface TileSectionProps {
  /**
   * Function that closes the menu.
   */
  closeMenu: () => unknown;
}

/**
 * The tile section of the {@link Menu} component.
 */
const TileSection: React.FC<TileSectionProps> = ({ closeMenu }) => {
  return (
    <motion.div className="lg:w-1/2 h-3/5 lg:h-full flex flex-wrap">
      {content.components.menu.tile_section.map((page) => (
        <MenuTile
          key={page.url}
          direction={page.direction}
          title={page.title}
          subTitle={page.subTitle}
          url={page.url}
          theme={page.theme}
          onClick={closeMenu}
        />
      ))}
    </motion.div>
  );
};

export default TileSection;

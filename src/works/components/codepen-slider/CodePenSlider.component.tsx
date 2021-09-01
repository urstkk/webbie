import { motion } from 'framer-motion';
import React from 'react';

import content from '../../../../frontaid.content.json';

/**
 * Interface for each pen in the {@link CodePenSlider}
 */
export interface Pen {
  id: string;
  /**
   * The title that appears a separate tile for each slide.
   */
  title: string;
}

/**
 * List of pens to be shown.
 * TODO: Externalize to an API.
 */
const pens: Pen[] = content.components.menu.works.codepen.works;

/**
 * Variant for the main slier content.
 */
const sliderContentChildrenVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(50%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * The slider in the works page.
 * @param Param of type {@link WorksSliderProps}
 */
const CodePenSlider: React.FC = () => {
  return (
    <motion.div className="flex flex-col">
      <motion.p
        className="text-lg mb-8"
        variants={sliderContentChildrenVariants}>
        {content.components.menu.works.codepen.description}
        <a
          className="ul-hover-effect text-primary"
          target="_blank"
          rel="noreferrer"
          href={content.components.menu.works.codepen.url}>
          {content.components.menu.works.codepen.title}
        </a>
        .
        {/* . My pens collectively have over&nbsp;
        <span className="text-secondary">20566</span>
        <span role="img" aria-label="views" className="mx-1">
          👁
        </span>
        &apos;s and over <span className="text-secondary">884</span>
        <span role="img" aria-label="heart" className="mx-1">
          ❤️
        </span>
        &apos;s. */}
      </motion.p>
      <div className="flex flex-nowrap overflow-x-scroll overflow-y-hidden ">
        {pens.map((pen) => {
          return (
            <div className="relative -mb-8 " key={pen.id}>
              <div
                className="absolute flex items-center pl-3 text-secondary-text leading-tight"
                style={{
                  top: '1px',
                  left: '1px',
                  width: 'calc(100% - 75px)',
                  height: '50px',
                  background: '#111111'
                }}>
                {pen.title}
              </div>
              <iframe
                height="300"
                className="pr-8 shadow-md"
                style={{
                  maxWidth: '100%',
                  minWidth: '320px',
                  overflow: 'hidden'
                }}
                scrolling="no"
                title="Simple CSS Loader"
                src={`${content.components.menu.works.codepen.url}/embed/preview/${pen.id}?height=300&theme-id=dark&default-tab=result`}
                allowFullScreen
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CodePenSlider;

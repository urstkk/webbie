import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

import content from '../../../frontaid.content.json';
import withPageTransition from '../../components/hoc/with-page-transition';
import Page from '../../components/page/Page';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import SkillsSection from '../../components/skills-section/SkillsSection.component';
import SocialIcons from '../../components/social-icons/SocialIcons';
import { useDrawFaceOnCanvas } from '../../lib/hooks';

/**
 * Placeholder variants for staggering about info.
 */
const aboutInfoContainerVariants = {
  enter: {
    transition: {
      staggerChildren: 0.5,
      when: 'beforeChildren'
    }
  }
};

/**
 * Animation variants for the about info.
 */
const aboutInfoVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(50%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * Represents the about page of the application.
 */
const AboutPage: React.FC = () => {
  useDrawFaceOnCanvas();

  return (
    <>
      <Head>
        <title>{content.components.menu.about.title}</title>

        <meta
          property="og:title"
          content={content.components.menu.about.title}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/about}`}
        />

        <meta
          name="twitter:title"
          content={content.components.menu.about.title}
        />
        <meta
          name="twitter:description"
          content={content.components.menu.about.twitter_description}
        />
      </Head>
      <div className="flex flex-wrap items-center">
        <div className="order-2 lg:order-1 lg:w-1/2 mt-8 lg:mt-0 mb-16">
          <motion.div
            className="lg:max-w-xl flex flex-col justify-center align-center m-auto p-4 text-center lg:text-left"
            variants={aboutInfoContainerVariants}>
            <motion.div className="mb-4" variants={aboutInfoVariants}>
              <span
                className="text-3xl md:text-4xl lg:text-5xl "
                dangerouslySetInnerHTML={{
                  __html: content.components.menu.about.me
                }}></span>
              <span className="text-5xl md:text-5xl lg:text-6xl font-cursive text-primary">
                {content.components.menu.about.name}
              </span>
            </motion.div>
            <motion.p
              className="text-base md:text-2xl mb-4"
              variants={aboutInfoVariants}
              dangerouslySetInnerHTML={{
                __html: content.components.menu.about.description
              }}></motion.p>
            <motion.div className="m-auto lg:mx-0" variants={aboutInfoVariants}>
              <SocialIcons className="text-2xl md:text-3xl m-1 lg:m-2" />
            </motion.div>
          </motion.div>
        </div>
        <div className="canvas-container relative order-1 lg-order-2 w-full lg:w-1/2 h-full">
          <canvas
            id="about-face-canvas"
            className="absolute"
            style={{
              width: '100%',
              height: '100%'
            }}></canvas>
        </div>
      </div>
      <Page>
        <PageBody>
          <PageHeader
            title="Skills"
            description="These are some of the skills that I picked up along the way in both professional life and also while simply loitering around the web."
          />
          {content.components.menu.about.skills.skillsets.map(
            (skill, index) => (
              <SkillsSection
                key={skill.title}
                theme={skill.theme}
                title={skill.title}
                spells={skill.spells}
                wands={skill.wands}
              />
            )
          )}
        </PageBody>
      </Page>
      <style jsx>{`
        .canvas-container {
          height: calc(100vw - 80px);
        }

        @media screen and (min-width: 769px) {
          .canvas-container {
            height: calc(100vh - 80px);
          }
        }
      `}</style>
    </>
  );
};

export default withPageTransition(AboutPage);

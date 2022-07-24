import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

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
        <title>About - Get to know me</title>

        <meta property="og:title" content="About - Get to know me" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/about}`}
        />

        <meta name="twitter:title" content="About - Get to know me" />
        <meta
          name="twitter:description"
          content="These are some of the skills that I picked up along the way in both professional life and also while simply loitering around the web."
        />
      </Head>
      <div className="flex flex-wrap items-center">
        <div className="order-2 lg:order-1 lg:w-1/2 mt-8 lg:mt-0 mb-16">
          <motion.div
            className="lg:max-w-xl flex flex-col justify-center align-center m-auto p-4 text-center lg:text-left"
            variants={aboutInfoContainerVariants}>
            <motion.div className="mb-4" variants={aboutInfoVariants}>
              <span className="text-3xl md:text-4xl lg:text-5xl ">
                Hi! I&apos;m&nbsp;
              </span>
              <span className="text-5xl md:text-5xl lg:text-6xl font-cursive text-primary">
                Krishna Kishore
              </span>
            </motion.div>
            <motion.p
              className="text-base md:text-2xl mb-4"
              variants={aboutInfoVariants}>
              I am a full stack developer and Certified Azure Solution Architect
              from India
              <span role="img" aria-label="India" className="ml-1">
                🇮🇳
              </span>
              . I have a passion for programming . I&apos;d call myself a Jack
              of all trades but master of none. Most of my open-source projects
              are focused on one thing - to help people learn.
            </motion.p>
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
          <SkillsSection
            theme="secondary"
            title="Cloud"
            spells={['AZURE']}
            wands={['AWS']}
          />
          <SkillsSection
            title="Frame works"
            spells={['Express Js', 'Flask']}
            wands={['Django', 'Next Js']}
          />
          <SkillsSection
            theme="secondary"
            title="Frontend"
            spells={['HTML/CSS', 'SASS/SCSS', 'TailwindCSS', 'JS/Typescript']}
            wands={['Angular', 'React', 'Ionic', 'ejs']}
          />
          <SkillsSection
            title="Backend"
            spells={['NodeJS', 'Python']}
            wands={['C#', 'rust']}
          />
          <SkillsSection
            theme="secondary"
            title="Databases"
            spells={['MSSQL']}
            wands={['MongoDB']}
          />
          <SkillsSection
            title="Tools"
            spells={['Visual Studio 2019', 'VS Code', 'Android Studio']}
            wands={['Jupiter', 'Pycharm', 'Xcode']}
          />
          <SkillsSection
            theme="secondary"
            title="Mobile Development"
            spells={['Flutter']}
            wands={['React Native']}
          />
          <SkillsSection
            title="Data Engineering"
            spells={['Cloudera', 'Spark']}
            wands={['Scala', 'Hadoop']}
          />
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

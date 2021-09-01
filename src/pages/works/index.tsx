import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

import content from '../../../frontaid.content.json';
import withPageTransition from '../../components/hoc/with-page-transition';
import Page from '../../components/page/Page';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import CodePenSlider from '../../works/components/codepen-slider/CodePenSlider.component';
import WorksList, {
  WorksListProps
} from '../../works/components/works-list/WorksList.component';
import WorksSlider, {
  WorkSliderItem
} from '../../works/components/works-slider/WorksSlider';

/**
 * Animtion variations for the slider container.
 */
const sliderContainerVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(100%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      when: 'beforeChildren',
      delay: 0.6,
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * Represents the works page of the application.
 */
const WorksPage: React.FC = () => {
  const openSourceWorksList: WorksListProps = {
    title: content.components.menu.works.opensource.title,
    description: content.components.menu.works.opensource.description,
    works: content.components.menu.works.opensource.works
  };

  const worksSliderItems: WorkSliderItem[] = [
    {
      title: content.components.menu.works.opensource.title,
      component: WorksList,
      props: openSourceWorksList
    },
    {
      title: content.components.menu.works.codepen.title,
      component: CodePenSlider,
      props: {}
    },
    {
      title: content.components.menu.works.blogs.title,
      component: WorksList,
      props: {
        title: content.components.menu.works.blogs.title,
        description: content.components.menu.works.blogs.description,
        works: content.components.menu.works.blogs.works
      }
    }
  ];

  return (
    <Page>
      <Head>
        <title>{content.components.menu.works.head_title}</title>

        <meta
          property="og:title"
          content={content.components.menu.works.title}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/works}`}
        />

        <meta
          name="twitter:title"
          content={content.components.menu.works.twitter_description}
        />
        <meta
          name="twitter:description"
          content={content.components.menu.works.title}
        />
      </Head>
      <PageHeader
        title={content.components.menu.works.title}
        description={content.components.menu.works.description}
      />
      <PageBody>
        <motion.div variants={sliderContainerVariants} className="mt-32">
          <WorksSlider items={worksSliderItems} />
        </motion.div>
      </PageBody>
    </Page>
  );
};

export default withPageTransition(WorksPage);

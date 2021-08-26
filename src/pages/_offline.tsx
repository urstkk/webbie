import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

import Page from '../components/page/Page';
import PageBody from '../components/page-body/PageBody';
import PageHeader from '../components/page-header/PageHeader';

/**
 * Animation variants for the offline container element.
 */
const offlineContainerVariants = {
  initial: {
    opacity: 0
  },
  enter: {
    delay: 0.6,
    opacity: 1,
    transition: {
      when: 'beforeChildren'
    }
  }
};

const MyOffline: React.FC = () => {
  return (
    <>
      <Head>
        <title>KK&apos;s Portfolio</title>
      </Head>
      <Page>
        <PageHeader
          title="Posts"
          description="My ramblings about things that excite me. Might take some time to read but will definitely be worth your time."
        />
        <PageBody>
          <motion.div variants={offlineContainerVariants}>
            <h2>You are currently accessing Application in Offline</h2>
            <h2>Please be patient and try again</h2>
          </motion.div>
        </PageBody>
      </Page>
    </>
  );
};

export default MyOffline;

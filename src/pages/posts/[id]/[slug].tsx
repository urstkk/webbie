import { motion } from 'framer-motion';
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticPropsResult
} from 'next';
import Head from 'next/head';
import Link from 'next/link';

import withPageTransition from '../../../components/hoc/with-page-transition';
import MdContent from '../../../components/md-content/MdContent';
import Page from '../../../components/page/Page';
import PageBody from '../../../components/page-body/PageBody';
import SocialShare from '../../../components/social-share/SocialShare.component';
import { formatDate } from '../../../lib';
import { Post } from '../../../models/Post';
import RelatedPostsSection from '../../../posts/related-posts-section/RelatedPostsSection.component';
import ShareSection from '../../../posts/share-section/ShareSection.component';
import { getPosts } from '../../api/posts';
import { getPostById } from '../../api/posts/[id]';

/**
 * Placeholder animation variant for the header section.
 */
const headerVariants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: 'beforeChildren'
    }
  }
};

/**
 * Animation variants for the header children.
 */
export const headerChildrenVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(50%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

/**
 * Animation variants for the line after header.
 */
const hrVariants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.2,
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * Animation variants for the page content.
 */
const postContentVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(2%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {
      delay: 1.2,
      duration: 1,
      ease: 'easeOut'
    }
  }
};

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<any>
> => {
  try {
    console.log('\nRunning getStaticPaths for [slug]');
    const posts = await getPosts({
      per_page: '50'
    });

    const paths = posts.map((post) => ({
      params: {
        id: String(post.id),
        slug: post.slug
      }
    }));

    console.log('\nNumber of posts pre-rendered: ', posts.length);

    return {
      paths,
      fallback: true
    };
  } catch (e) {
    console.error('Error while fetching static paths for post: ', e);
  }
};

/**
 * Props for {@link PostPage}.
 */
interface PostPageProps {
  /**
   * Post for the page.
   */
  post: Post;
}

export const getStaticProps = async ({
  params
}: Record<any, any>): Promise<GetStaticPropsResult<PostPageProps>> => {
  try {
    console.log('\nRunning getStaticProps for post with id: ', params.id);
    const post = await getPostById(params.id);
    post.body_markdown = post.body_markdown.substring(
      post.body_markdown.lastIndexOf(post.description.substring(0, 10))
    );

    return {
      props: {
        post
      },
      revalidate: 300
    };
  } catch (e) {
    console.error(
      'Error while fetching getStaticProps post by id: ',
      params.id,
      e
    );
  }
};

/**
 * Represents the page for an instance of a blog post.
 */
const PostPage: React.FC<PostPageProps> = ({ post = {} }) => {
  return (
    <Page>
      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/posts/${post.id}/${post.slug}`}
        />

        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
      </Head>
      <motion.div
        className="text-center mb-8 lg:mb-16 overflow-hidden"
        variants={headerVariants}>
        <motion.h1
          className="font-black text-primary leading-tight mb-4"
          variants={headerChildrenVariants}>
          {post.title}
        </motion.h1>
        <motion.div
          className="font-bold text-lg lg:text-xl text-secondary"
          variants={headerChildrenVariants}>
          <span>{formatDate(post.published_timestamp)}</span>
          <span className="px-2">•</span>
          <span>{post.readingTime}</span>
        </motion.div>
        <motion.div
          className="text-secondary-text text-md lg:text-lg mb-2 font-bold"
          variants={headerChildrenVariants}>
          {post.tag_list &&
            post.tag_list.map((tag) => {
              return (
                <Link
                  key={tag}
                  href="/posts/tag/[tag]"
                  as={`/posts/tag/${tag}`}>
                  <a className="ul-hover-effect mr-2">#{tag}</a>
                </Link>
              );
            })}
        </motion.div>
        <motion.div
          className="flex justify-center"
          variants={headerChildrenVariants}>
          <SocialShare
            item={post}
            url={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/posts/${post.id}/${post.slug}`}
          />
        </motion.div>
      </motion.div>

      <PageBody>
        <motion.div
          className="bg-dark-light sm: mb-8"
          style={{ height: '1px' }}
          variants={hrVariants}
        />
        <motion.div variants={postContentVariants}>
          <MdContent>{post.body_markdown}</MdContent>
        </motion.div>

        <ShareSection item={post} />

        <RelatedPostsSection tag={post.tag_list && post.tag_list[0]} />
      </PageBody>
    </Page>
  );
};

export default withPageTransition(PostPage);

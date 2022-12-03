import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import DefaultLayout from '../components/templates/layouts/Default.Layout.Template';
import { MainContentProps } from '../types/content/sanity.content';
import About from '../components/templates/About.Template';

const AboutPage = () => {
  const { allSanityMainContent } = useStaticQuery<{
    allSanityMainContent: MainContentProps;
  }>(graphql`
    query {
      allSanityMainContent(filter: { name: { eq: "About" } }) {
        edges {
          node {
            titleText
            name
            button {
              href
              text
              type
            }
            downloadableFile {
              asset {
                originalFilename
                url
              }
            }
            contentNotes {
              title
              highlightText
              _rawContent
              content {
                _type
                style
                children {
                  _key
                  _type
                  text
                  marks
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <DefaultLayout>
      <section className="container max-w-2xl mx-auto">
        <About content={allSanityMainContent}></About>
      </section>
    </DefaultLayout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>MA Repay Program | About</title>;

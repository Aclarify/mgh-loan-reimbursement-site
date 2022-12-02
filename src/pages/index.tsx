import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import clsx from 'clsx';
import DefaultLayout from '../components/templates/layouts/Default.Layout.Template';
import Home from '../components/templates/Home.Template';
import { MainContentProps } from '../types/content/sanity.content';

const IndexPage = () => {
  const { allSanityMainContent } = useStaticQuery<{
    allSanityMainContent: MainContentProps;
  }>(graphql`
    query {
      allSanityMainContent(filter: { name: { eq: "home" } }) {
        edges {
          node {
            titleText
            name
            contentNotes {
              title
              highlightText
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
            subContentTitle
            subContentTitleNote
            form {
              name
              formControls {
                name
                label
                type
                placeholder
                options {
                  label
                  value
                }
              }
              button {
                text
                type
                href
              }
            }
            buttonText
            button {
              href
              text
              type
            }
            logoText
            logo {
              asset {
                gatsbyImageData
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
        <Home content={allSanityMainContent}></Home>
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>MA Repay Program | Home</title>;

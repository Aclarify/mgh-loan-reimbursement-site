import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';
import DefaultLayout from '../../components/templates/layouts/Default.Layout.Template';
import ProgramEligibility from '../../components/templates/ProgramEligibility.Template';
import { MainContentProps } from '../../types/content/sanity.content';

const ProgramEligibiltyPage = ({
  data,
}: {
  data: { allSanityMainContent: MainContentProps };
}) => {
  return (
    <DefaultLayout>
      <section className="container mx-auto max-w-4xl">
        <ProgramEligibility
          content={data.allSanityMainContent}
        ></ProgramEligibility>
      </section>
    </DefaultLayout>
  );
};

export default ProgramEligibiltyPage;

export const query = graphql`
  query($slug: String!) {
    allSanityMainContent(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          titleText
          name
          slug
          contentNotes {
            title
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
          subContentTitle
          subContentTitleNote
          ruleGroups {
            name
            ruleGroupType
            rules {
              name
              operator
              conditions {
                fieldName
                fieldValue
                fieldValues
                operator
              }
            }
          }
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
`;

export const Head: HeadFC = ({ data }) => (
  <title>
    <>
      MA Repay Program |{' '}
      {
        (data as {
          allSanityMainContent: MainContentProps;
        }).allSanityMainContent.edges[0].node.name
      }
    </>
  </title>
);

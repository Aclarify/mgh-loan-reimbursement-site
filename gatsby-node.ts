const path = require('path');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
export const createPages = async ({ graphql, actions, reporter }: any) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allSanityMainContent(filter: { isProgram: { eq: true } }) {
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
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const programTemplate = path.resolve(
    `src/components/templates/layouts/Program.Layout.Template.tsx`
  );
  result.data.allSanityMainContent.edges.forEach(({ node }: any) => {
    const path = `program/${node.slug}`;
    // createPage({
    //   path,
    //   component: programTemplate,
    //   context: {
    //     program: node,
    //   },
    // });
  });
};

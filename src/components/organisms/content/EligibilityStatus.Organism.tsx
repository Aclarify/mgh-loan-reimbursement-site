import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  EligibilityStatus,
  EligibilityStatusProps,
} from '../../../types/content/sanity.content';
import Button from '../../atoms/formcontrols/Button.Atom';
import { PortableText } from '@portabletext/react';
import { applyNow } from '../../../lib/apply/apply.lib';

interface EligibilityProps {
  eligibility: EligibilityStatus;
}

const Eligibility = (props: EligibilityProps) => {
  const { allSanityEligibilityStatus } = useStaticQuery<{
    allSanityEligibilityStatus: EligibilityStatusProps;
  }>(graphql`
    query {
      allSanityEligibilityStatus {
        edges {
          node {
            name
            eligibilityTitle
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
            button {
              text
              href
            }
          }
        }
      }
    }
  `);
  const eligibilityStatuses = allSanityEligibilityStatus.edges;
  const resultToShow = eligibilityStatuses.find(
    (eligibility) => eligibility.node.name == props.eligibility
  );
  const components = {
    types: {
      break: (props: any) => {
        const { style } = props.value;
        if (style === 'lineBreak') {
          return <br className="lineBreak" />;
        }
        return null;
      },
    },
    marks: {
      internalLink: (props) => {
        return (
          <a className="underline" href={props.value.href}>
            {props.children}
          </a>
        );
      },
      externalLink: ({ value, children }) => {
        const { href } = value;

        return (
          <a
            href={href}
            target="_blank"
            rel="noopener"
            className="text-[#206B9E] hover:cursor-pointer"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    resultToShow && (
      <div>
        <div className="flex-col justify-center">
          <div className="flex justify-center">
            <span className=" font-inter-700 font-bold  text-xl text-mgh-dark-grey">
              {resultToShow.node.eligibilityTitle}
            </span>
          </div>
          <div className="flex  whitespace-normal mx-20 md:mx-60 mt-6 text-left">
            <PortableText
              value={resultToShow.node.contentNotes._rawContent}
              components={components}
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          {resultToShow.node.button ? (
            <Button
              text={resultToShow.node.button.text}
              onClick={applyNow}
            ></Button>
          ) : null}
        </div>
      </div>
    )
  );
};

export default Eligibility;

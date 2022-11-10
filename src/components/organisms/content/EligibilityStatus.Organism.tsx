import React from 'react';
import { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  EligibilityStatus,
  EligibilityStatusProps,
} from '../../../types/content/sanity.content';
import Button from '../../atoms/formcontrols/Button.Atom';

interface EligibilityProps {
  eligibility: EligibilityStatus;
}
const applyNow = () => {};
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
            contentNotes
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
  return (
    resultToShow && (
      <div>
        <div className="flex-col justify-center">
          <div className="flex justify-center">
            <span className=" font-inter-700 font-bold  text-xl text-mgh-dark-grey">
              {resultToShow.node.eligibilityTitle}
            </span>
          </div>
          <div className="flex justify-center whitespace-normal mx-60 mt-6 text-justify">
            <span className=" font-inter-400 font-normal text-mgh-medium-grey text-base ">
              {resultToShow.node.contentNotes}
            </span>
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

import React from 'react';
import { MainContentProps } from '../../types/content/sanity.content';
import { StandardFC } from '../../types/libs/react.lib';
import { PortableText } from '@portabletext/react';

interface Props {
  content: MainContentProps;
}

const About: StandardFC<Props> = (props) => {
  const contentConfig = props.content.edges[0].node;
  const { titleText, contentNotes } = contentConfig;

  return (
    <div className="flex-col justify-center">
      <div id="contentHeader" className="flex-col text-justify">
        <div className="text-center ">
          <span className="text-sm font-semibold font-inter-700 text-mgh-dark-grey sm:text-base">
            {titleText}
          </span>
        </div>
        <div className="mt-4 font-inter-400 text-mgh-medium-grey mx-6 sm:mx-2 ">
          <PortableText value={contentNotes[0].content} />
        </div>
      </div>
    </div>
  );
};
export default About;

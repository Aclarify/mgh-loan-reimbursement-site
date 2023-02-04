import React from 'react';
import clsx from 'clsx';
import { navigate } from 'gatsby';
import { MainContentProps } from '../../types/content/sanity.content';
import { StandardFC } from '../../types/libs/react.lib';
import Logo from '../atoms/logo/Logo.Atom';
import { PortableText } from '@portabletext/react';
import Form from '../organisms/form/Form.Organism';
import Button from '../atoms/formcontrols/Button.Atom';
import { applyNow } from '../../lib/apply/apply.lib';

interface Props {
  content: MainContentProps;
}

const Home: StandardFC<Props> = (props) => {
  const contentConfig = props.content.edges[0].node;
  const {
    titleText,
    contentNotes,
    contentFooterNotes,
    button,
    logoText,
    logo,
  } = contentConfig;
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
      internalLink: (props: any) => {
        return (
          <a
            className="underline text-[#206B9E] hover:cursor-pointer"
            href={props.value.href}
          >
            {props.children}
          </a>
        );
      },
    },
  };
  return (
    <div className="flex-col justify-center">
      <div id="contentHeader" className="flex-col text-center ">
        <span className="text-3xl font-semibold font-inter-700 text-mgh-dark-grey sm:text-4xl ">
          {titleText}
        </span>
        <div className="mt-4 font-inter-400 text-mgh-medium-grey mx-4 sm:mx-0 mb-4 text-left">
          <PortableText value={contentNotes[0].content as any} />
        </div>
        <span className=" font-inter-400 text-mgh-highlight-red font-bold text-sm sm:text-base ">
          <PortableText value={contentNotes[0].highlightText as any} />
        </span>
      </div>
      <div id="contentFooter" className="mt-6">
        <div className="flex-col justify-center">
          <div className="relative mx-auto">
            <div className=" w-full border-t border-gray-300" />
          </div>
          <div className=" flex justify-center content-center">
            <div>
              <div className="flex justify-center mt-6 ">
                <span className="text-lg text-mgh-dark-grey font-inter-400 font-medium">
                  {logoText}
                </span>
              </div>
              <div
                id="contentFooterLogo"
                className="flex justify-center text-center"
              >
                <div className={clsx('relative', 'h-16', 'sm:h-24', 'lg:w-64')}>
                  <Logo gatsbyImageData={logo?.asset?.gatsbyImageData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

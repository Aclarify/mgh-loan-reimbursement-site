import React from 'react';
import {
  DownloadableFile,
  MainContentProps,
} from '../../types/content/sanity.content';
import { StandardFC } from '../../types/libs/react.lib';
import { PortableText } from '@portabletext/react';

interface Props {
  content: MainContentProps;
}

const About: StandardFC<Props> = (props) => {
  const contentConfig = props.content.edges[0].node;
  const { titleText, contentNotes, button, downloadableFiles } = contentConfig;

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
      <div id="contentHeader" className="flex-col text-justify">
        <div className="text-center ">
          <span className=" text-2xl font-semibold font-inter-700 text-mgh-dark-grey sm:text-3xl">
            {titleText}
          </span>
        </div>
        <div className="mt-4 font-inter-400 text-mgh-medium-grey mx-6 sm:mx-2 ">
          <PortableText
            value={contentNotes[0]._rawContent}
            components={components}
          />
        </div>
        <div className="flex flex-row flex-wrap justify-evenly mt-6  gap-6">
          {downloadableFiles.map((downloadableFile: DownloadableFile) => {
            const buttonText = downloadableFile.btnText;
            const fileSource = downloadableFile.downloadableFileURL;
            const fileName = downloadableFile.fileName;
            return (
              <a
                className="inline-flex basis-1/4 text-center items-center rounded-md border border-transparent bg-mgh-primary p-2  text-sm font-inter-600 font-semibold  text-white shadow-sm hover:bg-mgh-primary-dark focus:outline-none "
                href={`${fileSource}`}
                target="_blank"
              >
                <span className="w-full">{buttonText}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default About;

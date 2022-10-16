import clsx from 'clsx';
import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import { MainContentProps } from '../../../types/content/sanity.content';
import { StandardFC } from '../../../types/libs/react.lib';
import Logo from '../../atoms/Logo/Logo.Atom';
import { PortableText } from '@portabletext/react';

const Content: StandardFC = () => {
  const { allSanityMainContent } = useStaticQuery<MainContentProps>(graphql`
    query {
      allSanityMainContent(filter: { name: { eq: "Home Page" } }) {
        edges {
          node {
            titleText
            name
            contentNotes {
              title
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
                options
              }
              Button {
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
  `);
  const contentConfig = allSanityMainContent.edges[0].node;
  const {
    titleText,
    name,
    contentNotes,
    subContentTitle,
    subContentTitleNote,
    form,
    logoText,
    logo,
  } = contentConfig;
  //   console.log('contentConfig', contentConfig.contentNotes[0]);
  const contentTitle = contentConfig.contentNotes[0].title;
  const footerlogoText = contentConfig.logoText;
  const formControl = contentConfig.form.formControls[0];
  return (
    <div className="container mx-auto flex-col justify-center my-10 max-w-md ">
      <div id="contentHeader" className="flex-col text-center my-8">
        <span className="text-xl text-[#4B5563] sm:text-2xl sm:font-bold">
          {contentTitle}
        </span>
        <div className="mt-4">
          <PortableText value={contentConfig.contentNotes[0].content} />
        </div>
      </div>
      <div
        id="subContent"
        className="flex-col fill-white border-l border-r border-b rounded-b-xl p-6 shadow-xl  "
      >
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            {formControl.label}
          </label>
          <select
            id="location"
            name={formControl.name}
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={formControl.placeholder}
          >
            {formControl.options.map((option) => (
              <option>{option}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
          <button className="inline-flex items-center rounded-md border border-transparent bg-[#206B9E] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            {contentConfig.form.Button.text}l
          </button>
        </div>
      </div>
      <div id="contentFooter" className="mt-4">
        <div className="flex-col justify-center">
          <div id="contentFooterNote"></div>

          <div className="relative mx-auto">
            <div className=" w-full border-t border-gray-300" />
          </div>

          <div className="flex justify-center mt-12 mb-4">
            <span className="text-xs text-[#4B5563] font-medium">
              {footerlogoText}
            </span>
          </div>
          <div id="contentFooterLogo" className="flex justify-center">
            <div className={clsx('h-16', 'sm:h-24')}>
              <Logo gatsbyImageData={logo?.asset?.gatsbyImageData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;

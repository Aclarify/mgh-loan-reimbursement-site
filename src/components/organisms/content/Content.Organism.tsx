import React, { useState } from 'react';
import clsx from 'clsx';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { MainContentProps } from '../../../types/content/sanity.content';
import { StandardFC } from '../../../types/libs/react.lib';
import Logo from '../../atoms/logo/Logo.Atom';
import { PortableText } from '@portabletext/react';
import Button from '../../atoms/formcontrols/Button.Atom';
import ComboBox from '../../molecules/formcontrols/ComboBox.Molecule';
import Form from '../form/Form.Organism';

interface Props {
  content: MainContentProps;
}

const Content: StandardFC<Props> = (props) => {
  console.log('props.content', props.content);
  const contentConfig = props.content.edges[0].node;
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
  const contentTitle = contentConfig.contentNotes[0].title;
  const footerlogoText = contentConfig.logoText;
  const formControl = contentConfig.form.formControls[0];
  const [selectedProgram, setSelectedProgram] = useState(
    formControl.placeholder
  );
  const onProgramChange = (selectedValue: string) => {
    setSelectedProgram(selectedValue);
  };
  return (
    <div className="flex-col justify-center">
      <div id="contentHeader" className="flex-col text-center my-8">
        <span className="text-3xl font-inter-700 text-[#4B5563] sm:text-4xl sm:font-bold">
          {contentTitle}
        </span>
        <div className="mt-4 font-inter-400 text-[#6B7280] mx-4 sm:mx-0">
          <PortableText value={contentConfig.contentNotes[0].content} />
        </div>
      </div>
      <div
        id="subContent"
        className="flex-col fill-white border-l border-r border-b rounded-b-xl p-6 shadow-xl my-16 "
      >
        <div id="subContentTitle">
          <span className="block font-inter-700 text-l text-[#4B5563] sm:text-2xl sm:font-bold">
            {subContentTitle}
          </span>

          <span className=" font-inter-400 text-[#6B7280] sm:text-l ">
            {subContentTitleNote}
          </span>
        </div>
        <div className="my-6">
          <Form form={contentConfig.form} />
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

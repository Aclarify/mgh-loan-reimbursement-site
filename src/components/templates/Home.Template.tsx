import React, { useState } from 'react';
import clsx from 'clsx';
import { navigate } from 'gatsby';
import { MainContentProps } from '../../types/content/sanity.content';
import { StandardFC } from '../../types/libs/react.lib';
import Logo from '../atoms/logo/Logo.Atom';
import { PortableText } from '@portabletext/react';
import Form from '../organisms/form/Form.Organism';
import Button from '../atoms/formcontrols/Button.Atom';

interface Props {
  content: MainContentProps;
}

const Home: StandardFC<Props> = (props) => {
  const contentConfig = props.content.edges[0].node;
  const {
    titleText,
    contentNotes,
    form,
    buttonText,
    button,
    logoText,
    logo,
  } = contentConfig;
  const formControl = form.formControls[0];
  const transitToProgram = (formValue: any) => {
    navigate(`/program/${formValue[formControl.name]}`);
  };
  const applyNow = () => {};

  return (
    <div className="flex-col justify-center">
      <div id="contentHeader" className="flex-col text-center my-8">
        <span className="text-3xl font-semibold font-inter-700 text-mgh-dark-grey sm:text-4xl ">
          {titleText}
        </span>
        <div className="mt-4 font-inter-400 text-mgh-medium-grey mx-4 sm:mx-0">
          <PortableText value={contentNotes[0].content} />
        </div>
      </div>
      <div
        id="subContent"
        className="flex-col fill-white border-l border-r border-b rounded-b-xl p-6 shadow-xl my-16 "
      >
        <div className="my-6">
          <Form form={form} onSubmit={transitToProgram} />
        </div>
      </div>
      <div id="contentFooter" className="mt-4">
        <div className="flex-col justify-center">
          <div className="relative mx-auto">
            <div className=" w-full border-t border-gray-300" />
          </div>
          <div className=" sm:flex justify-between content-center">
            <div>
              <div className="flex justify-center mt-12 mb-4">
                <span className=" text-lg text-mgh-dark-grey  font-inter-400 font-normal">
                  {buttonText}
                </span>
              </div>
              <div id="contentFooterLogo" className="flex justify-center">
                <div className={clsx('h-16', 'sm:h-24')}>
                  <Button text={button.text} onClick={applyNow}></Button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center mt-12 mb-4">
                <span className=" text-base text-mgh-dark-grey  font-inter-600 font-medium">
                  {logoText}
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
      </div>
    </div>
  );
};
export default Home;

import React from 'react';
import { MainContentProps } from '../../../types/content/sanity.content';
import ProgramEligibility from '../ProgramEligibility.Template';
import DefaultLayout from './Default.Layout.Template';
import Helmet from 'react-helmet';

const ProgramTemplate = ({
  pageContext,
}: {
  pageContext: { program: MainContentProps };
}) => {
  const programData = pageContext.program;
  return (
    <DefaultLayout>
      <Helmet>
        <title>MA Repay Program | {programData.name}</title>
      </Helmet>
      <section className="container mx-auto max-w-4xl">
        <ProgramEligibility content={programData}></ProgramEligibility>
      </section>
    </DefaultLayout>
  );
};

export default ProgramTemplate;

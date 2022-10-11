import * as React from 'react';
import type { HeadFC } from 'gatsby';
import clsx from 'clsx';
import DefaultLayout from '../components/templates/layouts/Default.Layout.Template';

const IndexPage = () => {
  return (
    <DefaultLayout>
      {/* <section className={clsx('h-full', 'bg-blue-500')}>Hero</section> */}
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

import * as React from 'react';
import type { HeadFC } from 'gatsby';
import clsx from 'clsx';
import DefaultLayout from '../components/templates/layouts/Default.Layout.Template';
import Content from '../components/organisms/content/Content.Organism';

const IndexPage = () => {
  return (
    <DefaultLayout>
      <section className={clsx('h-full')}>
        <div className="container max-w-md mx-auto">
          <Content></Content>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

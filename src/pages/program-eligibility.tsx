import * as React from 'react';
import type { HeadFC } from 'gatsby';
import clsx from 'clsx';
import DefaultLayout from '../components/templates/layouts/Default.Layout.Template';
import Content from '../components/organisms/content/Content.Organism';

const IndexPage = () => {
  return (
    <DefaultLayout>
      <section className="container max-w-2xl mx-auto">
        <Content></Content>
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

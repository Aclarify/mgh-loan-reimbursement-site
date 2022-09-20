import clsx from 'clsx';
import React from 'react';
import { StandardFC } from '../../../types/libs/react.lib';
import Footer from '../../organisms/footer/Footer.Organism';
import NavBar from '../../organisms/navBar/NavBar.Organism';

interface DefaultLayoutProps {}

const DefaultLayout: StandardFC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={clsx('h-full', 'w-full', 'relative', 'min-h-screen')}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;

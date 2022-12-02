import clsx from 'clsx';
import React from 'react';
import { StandardFC } from '../../../types/libs/react.lib';
import Footer from '../../organisms/footer/Footer.Organism';
import NavBar from '../../organisms/navBar/NavBar.Organism';
import CookieConsent from 'react-cookie-consent';

interface DefaultLayoutProps {}

const DefaultLayout: StandardFC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={clsx('h-full', 'w-full', 'relative', 'py-8', 'px-6')}>
        {children}
      </main>
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="cookieConsent"
        style={{ background: 'rgba(239, 239, 239, 0.6)' }}
        buttonStyle={{
          background: 'rgb(32 107 158)',
          border: 'none',
          borderRadius: '6px',
          fontFamily: 'inter',
          color: '#fff',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
        expires={150}
      >
        <span
          style={{ color: '#005696' }}
          className="font-inter text-base font-semibold"
        >
          {' '}
          This website uses cookies to enhance the user experience.{' '}
        </span>
      </CookieConsent>
      <Footer />
    </>
  );
};

export default DefaultLayout;

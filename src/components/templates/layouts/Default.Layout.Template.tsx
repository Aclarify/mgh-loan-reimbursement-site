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
        style={{ background: '#2B373B' }}
        buttonStyle={{
          background: '#206B9E',
          border: 'none',
          borderRadius: '4px',
          fontFamily: 'inter',
          color: '#fff',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
        expires={150}
      >
        <span className="font-inter text-white text-base text-normal">
          {' '}
          This website might use cookies to enhance the user experience.{' '}
        </span>
      </CookieConsent>
      <Footer />
    </>
  );
};

export default DefaultLayout;

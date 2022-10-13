import clsx from 'clsx';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { NavigationProps } from '../../../types/content/sanity.content';
import { StandardFC } from '../../../types/libs/react.lib';
import Logo from '../../atoms/Logo/Logo.Atom';
import TextLogo from '../../atoms/Logo/TextLogo.Atom';

const copyRightText = `Copyright \u00A9 ${new Date().getFullYear()}`;
const Footer: StandardFC = () => {
  const { allSanityNavigation } = useStaticQuery<NavigationProps>(graphql`
    query {
      allSanityNavigation(filter: { name: { eq: "Footer" } }) {
        edges {
          node {
            name
            links {
              name
              text
              href
              type
            }
            contactIconGroup {
              name
              text
              textIcons {
                icon
                text
              }
            }
            linkGroup {
              links {
                name
                text
                href
              }
            }
            textLogo {
              titleLine1
              titleLine2
              titleNote
            }
            mediaIconList {
              icon
              href
              text
            }
          }
        }
      }
    }
  `);
  const footerConfig = allSanityNavigation.edges[0].node;
  const {
    links,
    contactIconGroup,
    linkGroup,
    textLogo,
    mediaIconList,
  } = footerConfig;
  const topFooterNavLinks = links;
  const bottomFooterNavLinks = linkGroup.links;
  const textIcons = contactIconGroup.textIcons;
  const phoneNumber = textIcons.find((x) => x.icon === 'phone')?.text;
  const emailID = textIcons.find((x) => x.icon === 'envelope')?.text;
  const address = textIcons.find((x) => x.icon === 'map-pin')?.text;
  const socialMediaIconsMap = new Map<string, { icon: React.FC }>();
  socialMediaIconsMap.set('Facebook', {
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  });
  socialMediaIconsMap.set('Twitter', {
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  });

  socialMediaIconsMap.set('GitHub', {
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  });

  socialMediaIconsMap.set('Instagram', {
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  });

  socialMediaIconsMap.set('Dribble', {
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
          clipRule="evenodd"
        />
      </svg>
    ),
  });

  return (
    <footer
      className={clsx('bg-[#206B9E]', 'border-t', 'border-gray-200')}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto max-w-7xl py-6 px-6  lg:py-16 lg:px-8 ">
        <section
          id="topFooter"
          className="flex-column md:flex lg:flex text-white justify-between"
        >
          <section id="desc" className="basis-1/2">
            <div id="titleText">
              <TextLogo
                titleLine1={textLogo.titleLine1}
                titleLine2={textLogo.titleLine2}
              />
            </div>
            <div id="programDesc">
              <p className="text-xs sm:w-3/4 leading-5">{textLogo.titleNote}</p>
            </div>
            <div id="mediaIcons" className="flex space-x-6 my-5">
              {mediaIconList.map((item) => {
                const socialMedia = socialMediaIconsMap.get(item.icon);
                if (socialMedia) {
                  return (
                    <a key={item.icon} href={item.href}>
                      <span className="sr-only">{item.icon}</span>
                      <socialMedia.icon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a>
                  );
                }
              })}
            </div>
          </section>
          <section id="contactDtls" className="flex-col  w-64">
            <div id="contactTitle" className="mb-6">
              <span className="text-xl sm:text-sm sm:font-medium">
                {contactIconGroup.text}
              </span>
            </div>
            <div id="contactDtlsContainer" className="flex-col  ">
              <div className="flex items-center ">
                <div id="phoneIcon" className="pr-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M0 1C0 0.447715 0.447715 0 1 0H3.15287C3.64171 0 4.0589 0.353413 4.13927 0.835601L4.87858 5.27147C4.95075 5.70451 4.73206 6.13397 4.3394 6.3303L2.79126 7.10437C3.90756 9.87832 6.12168 12.0924 8.89563 13.2087L9.6697 11.6606C9.86603 11.2679 10.2955 11.0492 10.7285 11.1214L15.1644 11.8607C15.6466 11.9411 16 12.3583 16 12.8471V15C16 15.5523 15.5523 16 15 16H13C5.8203 16 0 10.1797 0 3V1Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div id="phoneNumber">
                  <p className="text-sm font-light text-white-400 xl:text-left mr-4  ">
                    {phoneNumber}
                  </p>
                </div>
              </div>
              <div className="flex items-center my-4">
                <div id="emailIcon" className=" pr-4">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.00333343 1.88355L7.99995 5.88186L15.9967 1.8835C15.9363 0.833152 15.0655 0 14 0H2C0.934518 0 0.0636347 0.833179 0.00333343 1.88355Z"
                      fill="white"
                    />
                    <path
                      d="M16 4.1179L7.99995 8.11793L0 4.11796V10C0 11.1046 0.895431 12 2 12H14C15.1046 12 16 11.1046 16 10V4.1179Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div id="emailID">
                  <p className="text-sm font-light text-white-400 xl:text-left mr-4 ">
                    {emailID}
                  </p>
                </div>
              </div>
              <div className="flex items-center my-4">
                <div id="addressIcon" className=" pr-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div id="addressText">
                  <p className="text-sm font-light text-white-400 xl:text-left mr-4 ">
                    {address}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="topFooterNav">
            {topFooterNavLinks &&
              topFooterNavLinks.length &&
              topFooterNavLinks.map((link, index) => (
                <div key={index}>
                  <p className="text-xl sm:text-sm sm:font-medium text-white-400 sm:text-right mr-4 pb-4 whitespace-nowrap">
                    {link.text}
                  </p>
                </div>
              ))}
          </section>
        </section>
        <section>
          <div className="mt-10 flex-column sm:flex  justify-center text-white ">
            <div>
              <p className="text-sm font-light text-white-400 text-center sm:mr-4 ">
                {copyRightText}
              </p>
            </div>
            {bottomFooterNavLinks.map((link, index) => (
              <div key={index}>
                <p className="text-sm font-light text-white-400 text-center sm:mr-4">
                  {link.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

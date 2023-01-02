/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Logo from '../../atoms/logo/Logo.Atom';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StandardFC } from '../../../types/libs/react.lib';
import { NavigationProps } from '../../../types/content/sanity.content';
import TextLogo from '../../atoms/logo/TextLogo.Atom';

const NavBar: StandardFC = () => {
  const { allSanityNavigation } = useStaticQuery<NavigationProps>(graphql`
    query HeaderQuery {
      allSanityNavigation(filter: { name: { eq: "Header" } }) {
        edges {
          node {
            name
            logo {
              asset {
                gatsbyImageData(fit: FILL, placeholder: BLURRED)
              }
            }
            links {
              name
              text
              href
              type
            }
            cta {
              text
              href
              type
            }
            linkGroup {
              name
              text
              links {
                name
                text
                href
              }
            }
            textLogo {
              titleLine1
              titleLine2
              href
            }
          }
        }
      }
    }
  `);
  const headerConfig = allSanityNavigation.edges[0].node;
  const { logo, links, textLogo } = headerConfig;
  const navLinks = links;
  const allNavLinks = [...navLinks];
  return (
    <section className="relative ">
      <div>
        <div className="hidden lg:block">
          <svg
            id="visual"
            viewBox="0 0 1000 200"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="relative top-0 left-0 bg-blend-screen bg-[url('../images/nav-bg-medical.png')] bg-cover"
          >
            <path
              d="M0 110L41.7 103.2C83.3 96.3 166.7 82.7 250 75.7C333.3 68.7 416.7 68.3 500 81.7C583.3 95 666.7 122 750 134.5C833.3 147 916.7 145 958.3 144L1000 143L1000 201L958.3 201C916.7 201 833.3 201 750 201C666.7 201 583.3 201 500 201C416.7 201 333.3 201 250 201C166.7 201 83.3 201 41.7 201L0 201Z"
              fill="#ffff"
            ></path>
          </svg>
        </div>
        <div className=" block sm:hidden">
          <svg
            id="visual"
            viewBox="0 0 600 300"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="bg-[url('../images/nav-bg-medical.png')] bg-cover"
          >
            <path
              d="M0 223L33.3 215.2C66.7 207.3 133.3 191.7 200 195.5C266.7 199.3 333.3 222.7 400 234.3C466.7 246 533.3 246 566.7 246L600 246L600 301L566.7 301C533.3 301 466.7 301 400 301C333.3 301 266.7 301 200 301C133.3 301 66.7 301 33.3 301L0 301Z"
              fill="#ffff"
            ></path>
          </svg>
        </div>
        <div className="hidden sm:block lg:hidden">
          <svg
            id="visual"
            viewBox="0 0 900 300"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="bg-[url('../images/nav-bg-medical.png')] bg-cover"
          >
            <path
              d="M0 193L50 182C100 171 200 149 300 154.3C400 159.7 500 192.3 600 208.7C700 225 800 225 850 225L900 225L900 301L850 301C800 301 700 301 600 301C500 301 400 301 300 301C200 301 100 301 50 301L0 301Z"
              fill="#ffff"
            ></path>
          </svg>
        </div>
      </div>
      <div className="absolute top-0 lg:top-3 w-full lg:bg-transparent">
        <Popover className="relative z-10  text-white ">
          <div className="mx-auto max-w-7xl px-6  sm:px-8 ">
            <div className="flex items-center justify-between py-6 lg:py-0  md:justify-start md:space-x-10">
              <div className="flex justify-start flex-shrink">
                <span className="sr-only">Mass League</span>
                <div
                  className={clsx(
                    'relative',
                    'h-16',
                    'w-auto',
                    'sm:h-24',
                    'pr-8',
                    'md:pr-0'
                  )}
                >
                  <TextLogo
                    titleLine1={textLogo.titleLine1}
                    titleLine2={textLogo.titleLine2}
                    href={textLogo.href}
                  />
                </div>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              {/* == Links == */}
              <Popover.Group
                as="nav"
                className="hidden space-x-10 md:justify-end md:flex md:flex-grow"
              >
                {navLinks &&
                  navLinks.length &&
                  navLinks.map((link, index) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={clsx(
                        'text-base',
                        'font-medium',
                        'outline-none',
                        'ring-0'
                      )}
                    >
                      {link.text}
                    </Link>
                  ))}
              </Popover.Group>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={clsx('relative', 'h-16', 'w-auto', 'sm:h-24')}
                    >
                      <Logo gatsbyImageData={logo?.asset?.gatsbyImageData} />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6 ">
                    <nav className="grid gap-y-8">
                      {allNavLinks &&
                        allNavLinks.length &&
                        allNavLinks.map((link, index) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            className={clsx(
                              'text-black',
                              'text-base',
                              'font-medium',
                              'outline-none',
                              'ring-0'
                            )}
                          >
                            {link.text}
                          </Link>
                        ))}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      <div
        id="logoContainer"
        className="absolute -bottom-5 lg:bottom-5 w-screen text-center lg:h-24 md:h-20 h-14 "
      >
        <Logo gatsbyImageData={logo?.asset?.gatsbyImageData} />
      </div>
    </section>
  );
};

export default NavBar;

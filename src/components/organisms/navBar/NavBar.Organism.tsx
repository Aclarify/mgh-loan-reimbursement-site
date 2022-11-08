/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Logo from '../../atoms/logo/Logo.Atom';
import { graphql, Link, StaticQuery, useStaticQuery } from 'gatsby';
import { StandardFC } from '../../../types/libs/react.lib';
import { IGatsbyImageData } from 'gatsby-plugin-image';
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
            }
          }
        }
      }
    }
  `);
  const headerConfig = allSanityNavigation.edges[0].node;
  const { logo, links, linkGroup, textLogo } = headerConfig;
  const navLinks = links;
  const categoryLinks = linkGroup.links;
  const linkGroupName = linkGroup.text;
  const allNavLinks = [...navLinks, ...categoryLinks];
  return (
    <div className="lg:relative">
      <div className="hidden lg:block">
        <svg
          id="visual"
          viewBox="0 0 1000 200"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          {/* <defs>
            <pattern
              id="img1"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
            >
              <image
                href="favicon-32x32.png"
                x="0"
                y="0"
                width="100"
                height="100"
              />
            </pattern>
          </defs> */}
          <path
            d="M0 131L42.7 119.8C85.3 108.7 170.7 86.3 256 78.2C341.3 70 426.7 76 512 89.2C597.3 102.3 682.7 122.7 768 131.7C853.3 140.7 938.7 138.3 981.3 137.2L1024 136L1024 0L981.3 0C938.7 0 853.3 0 768 0C682.7 0 597.3 0 512 0C426.7 0 341.3 0 256 0C170.7 0 85.3 0 42.7 0L0 0Z"
            fill="#206B9E"
            //fill="url(#img1)"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
      </div>
      <div className=" block sm:hidden">
        <svg
          id="visual"
          viewBox="0 0 600 300"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 202L33.3 197C66.7 192 133.3 182 200 197.5C266.7 213 333.3 254 400 268.3C466.7 282.7 533.3 270.3 566.7 264.2L600 258L600 0L566.7 0C533.3 0 466.7 0 400 0C333.3 0 266.7 0 200 0C133.3 0 66.7 0 33.3 0L0 0Z"
            fill="#206B9E"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
      </div>
      <div className="hidden sm:block lg:hidden">
        <svg
          id="visual"
          viewBox="0 0 900 300"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 151L50 147.3C100 143.7 200 136.3 300 148C400 159.7 500 190.3 600 201C700 211.7 800 202.3 850 197.7L900 193L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
            fill="#206B9E"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
      </div>

      <div className="absolute hidden  ">
        <div
          className={clsx(
            'absolute',
            'h-16',
            'sm:h-24',
            'pr-8',
            'md:pr-0',
            'mx-auto',
            'z-5'
          )}
        >
          {/* <Logo gatsbyImageData={logo?.asset?.gatsbyImageData} /> */}
        </div>
      </div>
      <div className="absolute top-0 lg:top-3 w-full lg:bg-transparent">
        <Popover className="relative z-10  text-white ">
          <div className="mx-auto max-w-7xl px-6  sm:px-8 ">
            <div className="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
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
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={clsx(
                          open ? 'text-white-900 ' : 'text-white-500 ',
                          'group inline-flex items-center  text-base font-medium '
                        )}
                      >
                        <span>{linkGroupName}</span>
                        <ChevronDownIcon
                          className={clsx(
                            open
                              ? 'text-white-600 rotate-180'
                              : 'text-white-400 rotate-0',
                            'ml-2 h-5 w-5 group-hover:text-white-500 duration-200 transition-all transform'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {categoryLinks &&
                                categoryLinks.length &&
                                categoryLinks.map((link, index) => (
                                  <Link
                                    key={link.name}
                                    to={link.href}
                                    className={clsx(
                                      'text-base',
                                      'font-medium',
                                      'text-gray-500',
                                      'hover:text-gray-900',
                                      'outline-none',
                                      'ring-0'
                                    )}
                                  >
                                    {link.text}
                                  </Link>
                                ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div>
          </div>
          {/* <div id="logoContainer" className="flex justify-center ">
            <Logo gatsbyImageData={logo?.asset?.gatsbyImageData} />
          </div> */}

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
                      className={clsx(
                        'relative',
                        'h-16',
                        'w-auto',
                        'sm:h-24',
                        'pr-8',
                        'md:pr-0'
                      )}
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
                  <div className="mt-6">
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
    </div>
  );
};

export default NavBar;

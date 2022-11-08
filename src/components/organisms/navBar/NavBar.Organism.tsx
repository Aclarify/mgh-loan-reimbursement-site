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
    query HeaderQuery1 {
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
    <section className="relative ">
      <section className="relative  w-full bg-[url('../images/bg-medical.jpeg')] bg-cover  ">
        <div>
          <Popover className="text-white ">
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
        <svg
          id="visual"
          viewBox="0 0 1000 200"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="relative top-0 left-0 "
        >
          <path
            d="M0 110L41.7 103.2C83.3 96.3 166.7 82.7 250 75.7C333.3 68.7 416.7 68.3 500 81.7C583.3 95 666.7 122 750 134.5C833.3 147 916.7 145 958.3 144L1000 143L1000 201L958.3 201C916.7 201 833.3 201 750 201C666.7 201 583.3 201 500 201C416.7 201 333.3 201 250 201C166.7 201 83.3 201 41.7 201L0 201Z"
            //d="M0 147L55.5 143.8C111 140.7 222 134.3 333.2 142.2C444.3 150 555.7 172 666.8 174.2C778 176.3 889 158.7 944.5 149.8L1000 141L1000 201L944.5 201C889 201 778 201 666.8 201C555.7 201 444.3 201 333.2 201C222 201 111 201 55.5 201L0 201Z"
            fill="#ffff"
          ></path>
        </svg>
      </section>
      <div
        id="logoContainer"
        className="absolute bottom-10 hidden w-screen md:block text-center "
      >
        <Logo gatsbyImageData={logo?.asset?.gatsbyImageData} />
      </div>
    </section>
  );
};

export default NavBar;

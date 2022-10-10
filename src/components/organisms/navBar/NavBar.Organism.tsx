/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Logo from '../../atoms/Logo/Logo.Atom';
import { graphql, Link, StaticQuery, useStaticQuery } from 'gatsby';
import { StandardFC } from '../../../types/libs/react.lib';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { NavigationProps } from '../../../types/content/sanity.content';
import TextLogo from '../../atoms/Logo/TextLogo.Atom';

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
  return (
    <Popover className="relative  z-10 bg-[#206B9E] text-white">
      <div className="mx-auto max-w-7xl px-24 sm:px-24">
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
      <div id="logoContainer" className="flex justify-center ">
        {/* <Logo gatsbyImageData={logo?.asset?.gatsbyImageData} /> */}
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
                  {navLinks &&
                    navLinks.length &&
                    navLinks.map((link, index) => (
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
  );
};

export default NavBar;

import { Fragment } from 'react';
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import img from '../../public/favicon.png';
import { Button } from '..'

const navigation = [
  { name: 'Home', href: '/our-work/website/home', current: true },
  { name: 'About', href: '/our-work/website/about', current: false },
  { name: 'Our Work', href: '/our-work/website/our-work', current: false },
];

const dropdown = [
  {
    name: 'Donate',
    href: '/our-work/website/donate',
  },
  {
    name: 'Volunteer',
    href: '#',
  },
  {
    name: 'Become a Partner',
    href: '#',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MockWebsiteNav() {
  return (
    <Disclosure as='nav' className='bg-indigo-800 p-2'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <Image
                  src={img}
                  height={48}
                  width={48}
                  className='block h-8 w-auto lg:hidden'
                />

                <div className='hidden sm:ml-6 sm:block my-auto'>
                  <div className='flex space-x-4 items-center'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='text-white hover:bg-indigo-500 hover:-translate-y-1 px-3 py-2 rounded-md text-base md:text-lg font-medium'
                      >
                        {item.name}
                      </a>
                    ))}

                    {/* dropdown */}
                    <Popover>
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open
                                ? 'bg-indigo-400 text-white'
                                : 'text-white hover:bg-indigo-500 hover:-translate-y-1',
                              'px-3 py-2 rounded-md text-base lg:text-lg font-medium'
                            )}
                          >
                            Get Involved
                            <span>
                              <ChevronDownIcon
                                className='text-white h-4 w-4 group inline-flex items-center'
                                aria-hidden='true'
                              />
                            </span>
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0 translate-y-1'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-1'
                          >
                            <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0'>
                              <div className='overflow-hidden rounded-lg shadow-lg'>
                                <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                  {dropdown.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className='-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white'
                                    >
                                      <p className='text-base font-medium'>
                                        {item.name}
                                      </p>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <div>
                  <Button
                    buttonType={'button'}
                    buttonClass={'bg-white text-indigo-800 border border-indigo-500 border-2 hover:border-white hover:-translate-y-2 shadow shadow-md shadow-indigo-200'}
                    buttonText={'Donate'}
                  />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-indigo-400 text-white'
                      : 'text-white hover:bg-indigo-500',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? 'bg-indigo-400 text-white'
                          : 'text-white hover:bg-indigo-500 hover:-translate-y-1',
                        'px-3 py-2 rounded-md font-medium'
                      )}
                    >
                      Get Involved
                      <span>
                        <ChevronDownIcon
                          className='text-white h-4 w-4 group inline-flex items-center'
                          aria-hidden='true'
                        />
                      </span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0'>
                        <div className='overflow-hidden rounded-lg shadow-lg'>
                          <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                            {dropdown.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className='-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white'
                              >
                                <p className='text-base font-medium'>
                                  {item.name}
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

import { Fragment } from 'react';
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import img from '../public/favicon.png';
import bklynBridge from '../public/images/mock-website-images/bklyn-bridge.jpeg';
import bklynBridge2 from '../public/images/mock-website-images/bklyn-bridge-2.jpg';
import skyline from '../public/images/mock-website-images/skyline.jpeg';
import twinTowers from '../public/images/mock-website-images/twin-towers.jpg';
import { Button } from '.'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Our Work', href: '#', current: false },
];

const dropdown = [
  {
    name: 'Donate', href: '#'
  },
  {
    name: 'Volunteer', href: '#'
  },
  {
    name: 'Become a Partner', href: '#'
  },
]

const footerNav = {
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}
  

const whatWeDo = [
  {
    heading: 'Curabitur Congue',
    description:
      'Nunc non velit mi. Class aptent taciti sociosqu ad lito torquent per conubia nostra, per inceptos himenaeos.',
  },
  {
    heading: 'Aliquam Erat',
    description:
      'Nulla consequat pharetra quam a sagittis velit consequat ac. Nulla quam purus, pulvinar ac hendreri eget, viverra ac nunc.',
  },
  {
    heading: 'Nunc Ornare',
    description:
      'In hac habitasse platea dictumst. Sed eu efficitur tortor. Aenean a pulvinar lectus. Nunc non velit mi.',
  },
];

const posts = [
  {
    title: 'Fusce risus',
    date: 'Jan 1, 2022',
    description:
      'Aliquam fringilla eros nisi, vitae tempor nibh tempus non. Mauris non justo eleifend, laoreet sem luctus, varius sapien. Nam id leo mauris. Morbi vel arcu odio. Morbi quis lacus id neque lobortis congue nec nec nisi.',
    href: '#',
  },
  {
    title: 'Lorem ipsum',
    date: 'Feb 7, 2022',
    description:
      'Proin magna lorem, rhoncus vitae orci ut, laoreet viverra sapien. Duis iaculis fermentum enim quis feugiat. Vivamus iaculis nibh sapien, ac vehicula lacus volutpat eget. Nunc nec feugiat nisl, eget condimentum libero. Ut efficitur mi a eros tincidunt facilisis.',
    href: '#',
  },
  {
    title: 'Nunc scelerisque',
    date: 'Mar 10, 2022',
    description:
      'Curabitur quis tortor nec dolor malesuada porttitor at at eros. Nullam sapien purus, porttitor ut imperdiet vel, luctus ut nibh. Quisque felis mi, molestie luctus pulvinar sed, rutrum vitae nunc. Sed consequat tortor quam, pretium bibendum massa porttitor eget. Donec rhoncus eget risus eget ornare.',
    href: '#',
  },
  {
    title: 'Duis est',
    date: 'Apr 3, 2022',
    description:
      'Sed elementum semper leo, et pretium est imperdiet a. Suspendisse potenti. Donec ut est vulputate, bibendum tortor sit amet, suscipit quam. Integer vel hendrerit enim. Suspendisse sit amet eleifend dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis nec risus odio.',
    href: '#',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MockWebsite() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20'>
      {/* nav */}
      <Disclosure as='nav' className='bg-indigo-800'>
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
                          className={classNames(
                            item.current
                              ? 'bg-indigo-400 text-white'
                              : 'text-white hover:bg-indigo-500 hover:-translate-y-1',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
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
                                'px-3 py-2 rounded-md text-sm font-medium'
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
                      buttonClass={'bg-white'}
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

      {/* image carousel */}
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
        >
          <div>
            <Image src={bklynBridge} height={625} className='object-cover' />
          </div>
          <div>
            <Image src={twinTowers} height={1275} className='object-cover' />
          </div>
          <div>
            <Image src={skyline} height={1700} className='object-cover' />
          </div>
        </Carousel>
      </div>

      {/* mission */}
      <div className='mx-auto max-w-7xl px-10'>
        <h1 className='text-center text-4xl font-bold'>Our Mission</h1>
        <p className='mt-4'>
          Phasellus id odio tempus, tristique odio at, consequat nibh. Curabitur
          pharetra egestas nunc, eget euismod velit tincidunt ac. Suspendisse
          sit amet tempus orci, at mattis ligula. Nulla consequat pharetra quam,
          a sagittis velit consequat ac. Nulla quam purus, pulvinar ac hendrerit
          eget, viverra ac nunc. In hac habitasse platea dictumst. Sed eu
          efficitur tortor. Aenean a pulvinar lectus. Nunc non velit mi. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>

      {/* what we do */}
      <div className='mx-auto max-w-7xl px-10 mt-10'>
        <h1 className='text-center text-4xl font-bold mb-6'>What We Do</h1>
        <div className='mx-auto max-w-2xl space-y-12 px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 lg:px-8'>
          {whatWeDo.map((item) => (
            <div
              key={item.heading}
              className='relative flex flex-col rounded-2xl border border-gray-200 bg-white px-8 pt-8 pb-36 shadow-sm'
            >
              <div className='flex-1'>
                <h2 className='text-center text-2xl mb-4'>{item.heading}</h2>
                <p className='text-lg'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* blog */}
      <div>
        <h2 className='text-center text-4xl font-bold tracking-tight sm:text-4xl mt-10'>
          Latest News
        </h2>
      </div>
      <div className='mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 mx-auto max-w-7xl px-10'>
        {posts.map((post) => (
          <div key={post.title}>
            <p className='text-sm'>
              <time dateTime={post.datetime}>{post.date}</time>
            </p>
            <a href='#' className='mt-2 block'>
              <p className='text-xl font-semibold text-gray-900'>
                {post.title}
              </p>
              <p className='mt-3 text-base'>{post.description}</p>
            </a>
            <div className='mt-3'>
              <a
                href={post.href}
                className='text-base font-semibold text-indigo-800 hover:text-indigo-500'
              >
                Read full story
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* impact */}
      <div className='pt-12 sm:pt-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl text-center'>
            <h2 className='text-4xl font-bold tracking-tight sm:text-4xl'>
              Your Imact
            </h2>
          </div>
        </div>
        <div className='mt-10 pb-12 sm:pb-16'>
          <div className='relative'>
            <div className='absolute inset-0 h-1/2' />
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='mx-auto max-w-4xl'>
                <dl className='rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3'>
                  <div className='flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium leading-6'>
                      Proin Et
                    </dt>
                    <dd className='order-1 text-5xl font-bold tracking-tight text-indigo-500'>
                      100%
                    </dd>
                  </div>
                  <div className='flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium leading-6'>
                      Pellentesque Habitant
                    </dt>
                    <dd className='order-1 text-5xl font-bold tracking-tight text-indigo-500'>
                      $1,000,000
                    </dd>
                  </div>
                  <div className='flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l'>
                    <dt className='order-2 mt-2 text-lg font-medium leading-6'>
                      Cras Eget
                    </dt>
                    <dd className='order-1 text-5xl font-bold tracking-tight text-indigo-500'>
                      974
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* newsletter signup */}
      <div className='mx-auto px-10 mt-10 py-24 lg:flex lg:items-center lg:py-32 bg-indigo-500'>
        <div className='lg:w-0 lg:flex-1 text-white'>
          <h1 className='text-4xl font-bold'>Sign up for our newsletter</h1>
          <p className='mt-3 max-w-3xl text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum non
            debitis porro voluptatem accusantium? Dolore exercitationem,
            dolorum, officia illum at laboriosam quisquam nulla ratione facilis
            dignissimos atque pariatur maiores nesciunt.
          </p>
        </div>
        <div className='mt-8 lg:mt-0 lg:ml-8'>
          <form className='sm:flex'>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email-address'
              type='email'
              autoComplete='email'
              required
              className='w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm sm:max-w-xs'
              placeholder='Enter your email'
            />
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
              <button
                type='submit'
                className='flex w-full items-center justify-center rounded-md border border-transparent bg-white py-3 px-5 text-base font-medium hover:bg-indigo-800 hover:text-white'
              >
                Sign up
              </button>
            </div>
          </form>
          <p className='mt-3 text-sm text-white'>
            We care about the protection of your data. Read our{' '}
            <a href='#' className='font-medium underline'>
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>

      {/* footer */}
      <footer className='bg-indigo-800' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='space-y-8 xl:col-span-1'>
              <Image
                src={img}
                height={64}
                width={64}
              />
              <p className='text-base text-white'>
                123 Your Street
                <br />
                Your City, Your State 12345
                <br />
                (555) 555-5555
                <br />
                hello@yourorganization.org
              </p>
              <div className='flex space-x-6'>
                {footerNav.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-white'
                  >
                    <span className='sr-only'>{item.name}</span>
                    <item.icon className='h-6 w-6' aria-hidden='true' />
                  </a>
                ))}
              </div>
            </div>
            <div className='mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-base font-medium text-white'>
                    Home
                  </h3>
                </div>
                <div className='mt-12 md:mt-0'>
                  <h3 className='text-base font-medium text-white'>
                    About
                  </h3>
                </div>
              </div>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-base font-medium text-white'>
                    Our Work
                  </h3>
                </div>
                <div className='mt-12 md:mt-0'>
                  <h3 className='text-base font-medium text-white'>Get Involved</h3>
                  <ul role='list' className='mt-4 space-y-4'>
                    {dropdown.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-base text-white'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 border-t border-white pt-8'>
            <p className='text-base text-white xl:text-center'>
              &copy; 2020 Your Organization. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

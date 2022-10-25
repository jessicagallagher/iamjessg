import img from '../public/favicon.png';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { useSpring, animated } from '@react-spring/web';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function NavBar() {
  const router = useRouter();
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Our Work', href: '#' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Thoughts', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/jessicagallagher',
        icon: (props) => (
          <svg fill='#f05c85' viewBox='0 0 24 24' {...props}>
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jessica-gallagher/',
        icon: (props) => (
          <svg fill='#f05c85' viewBox='0 0 24 24' {...props}>
            <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/techmeowt/',
        icon: (props) => (
          <svg fill='#f05c85' viewBox='0 0 24 24' {...props}>
            <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
          </svg>
        ),
      },
    ],
  };

  const inactiveClass =
    'border-transparent hover:border-pinkLight inline-flex items-center pt-1 border-b-2 text-base font-medium';
  
  const activeClass =
    'border-pinkDefault hover:border-pinkLight inline-flex items-center pt-1 border-b-2 text-base font-medium';

  const config = {
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
    easing: (t) => t,
  };

  const props = useSpring({ xys, config });
  return (
    <Disclosure as='nav' className='bg-lightGrey'>
      {({ open }) => (
        <>
          <div className='max-w-full mx-auto px-4 px-6 lg:px-8 mt-4'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div
                  className='shrink-0 flex items-center px-4 sm:px-1 lg:px-5 xl:px-0'
                  ref={ref}
                >
                  <animated.div
                    style={{ transform: props.xys.to(trans) }}
                    onMouseLeave={() => set([0, 0, 1])}
                    onMouseMove={(e) => {
                      const rect = ref.current.getBoundingClientRect();
                      set(calc(e.clientX, e.clientY, rect));
                    }}
                  >
                    <Link href='/'>
                      <a className='flex flex-row items-center justify-center mt-2'>
                        <span className='mr-2'>
                          <Image src={img} height={48} width={48} />
                        </span>
                        <h1 className='font-thin text-xl sm:text-2xl xl:text-4xl font-bold'>
                          &lt;Tech Meowt /&gt;
                        </h1>
                      </a>
                    </Link>
                  </animated.div>
                </div>
              </div>

              <div className='hidden md:ml-6 md:flex md:space-x-3 lg:space-x-6 xl:space-x-8'>
                {navigation.main.map((item) => (
                  <div
                    key={item.href}
                    className='hidden md:ml-6 md:flex md:space-x-3 lg:space-x-6 xl:space-x-8'
                  >
                    <Link href={item.href}>
                      <a
                        className={
                          router.pathname == item.href
                            ? activeClass
                            : inactiveClass
                        }
                      >
                        {item.name}
                      </a>
                    </Link>
                  </div>
                ))}

                {navigation.social.map((item) => (
                  <div className='mt-4'>
                    <Link href={item.href} key={item.name}>
                      <a
                        target='_blank'
                        rel='noopener'
                        className='inline-flex items-center pt-1 text-base'
                      >
                        <span className='sr-only'>{item.name}</span>
                        <item.icon className='h-6 w-6' aria-hidden='true' />
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
              <div className='-mr-2 flex items-center md:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-greenDefault'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          {/* begin mobile menu */}
          <Disclosure.Panel className='md:hidden'>
            <div className='pt-2 pb-3 space-y-1 ml-3'>
              <Link href='/'>
                <a
                  className={
                    router.pathname == '/'
                      ? 'border-pinkDefault block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      : 'border-transparent hover:border-pinkLight block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  }
                >
                  Home
                </a>
              </Link>
              <Link href='/about'>
                <a
                  className={
                    router.pathname == '/about'
                      ? 'border-pinkDefault block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      : 'border-transparent hover:border-pinkLight block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  }
                >
                  About
                </a>
              </Link>
              <Link href='#'>
                <a
                  className={
                    router.pathname == '#'
                      ? 'border-pinkDefault block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      : 'border-transparent hover:border-pinkLight block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  }
                >
                  Our Work
                </a>
              </Link>
              <Link href='/portfolio'>
                <a
                  className={
                    router.pathname == '/portfolio'
                      ? 'border-pinkDefault block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      : 'border-transparent hover:border-pinkLight block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  }
                >
                  Portfolio
                </a>
              </Link>
              <Link href='#'>
                <a className='border-transparent hover:border-pinkLight block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                  Thoughts
                </a>
              </Link>
              <Link href='mailto:hello@techmeowt.com'>
                <a className='border-transparent hover:border-pinkLight block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                  Contact
                </a>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

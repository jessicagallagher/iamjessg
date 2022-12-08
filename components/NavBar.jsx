import img from '../public/favicon.png';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { useSpring, animated } from '@react-spring/web';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { mainNav } from '../utils/data'

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
  
  const inactiveClass =
    'border-transparent hover:border-pinkLight inline-flex items-center pt-1 border-b-2 text-base font-medium';
  
  const activeClass =
    'border-pinkDefault hover:border-pinkLight inline-flex items-center pt-1 border-b-2 text-base font-medium';
  
  const mobileInactiveClass =
    'border-transparent hover:border-pinkLight block pl-3 pr-4 py-2 border-l-4 text-base font-medium';
  
  const mobileActiveClass =
    'border-pinkDefault block pl-3 pr-4 py-2 border-l-4 text-base font-medium';
  
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
    <Disclosure as='nav'>
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
                    <Link legacyBehavior href='/'>
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
                {mainNav.main.map((item) => (
                  <div
                    key={item.href}
                    className='hidden md:ml-6 md:flex md:space-x-3 lg:space-x-6 xl:space-x-8'
                  >
                    <Link legacyBehavior href={item.href}>
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

                {mainNav.social.map((item) => (
                  <div className='mt-4'>
                    <Link legacyBehavior href={item.href} key={item.name}>
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
              <Link legacyBehavior href='/'>
                <a
                  className={
                    router.pathname == '/'
                      ? mobileActiveClass
                      : mobileInactiveClass
                  }
                >
                  Home
                </a>
              </Link>
              <Link legacyBehavior href='/about'>
                <a
                  className={
                    router.pathname == '/about'
                      ? mobileActiveClass
                      : mobileInactiveClass
                  }
                >
                  About
                </a>
              </Link>
              <Link legacyBehavior href='/our-work'>
                <a
                  className={
                    router.pathname == '/our-work'
                      ? mobileActiveClass
                      : mobileInactiveClass
                  }
                >
                  Our Work
                </a>
              </Link>
              {/* <Link legacyBehavior href='/blog'>
                <a
                  className={
                    router.pathname == '/blog'
                      ? mobileActiveClass
                      : mobileInactiveClass
                  }
                >
                  Blog
                </a>
              </Link> */}
              <Link legacyBehavior href='/contact'>
                <a
                  className={
                    router.pathname == '/contact'
                      ? mobileActiveClass
                      : mobileInactiveClass
                  }
                >
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

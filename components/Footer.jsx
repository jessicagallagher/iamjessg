import img from '../public/favicon.png';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { mainNav } from '../utils/data';

export default function Footer() {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <footer className='bg-greenDefault font-semibold mt-24'>
      <div className='max-w-full mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'
        >
          {mainNav.main.map((item) => (
            <div key={item.name} className='px-5 py-4'>
              <Link legacyBehavior href={item.href}>
                <a className=' hover:text-white hover:font-semibold'>
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>
        <div className='my-6 flex justify-center space-x-6'>
          {mainNav.social.map((item) => (
            <Link legacyBehavior key={item.name} href={item.href}>
              <a target='_blank' rel='noopener'>
                <span className='sr-only'>{item.name}</span>
                <item.icon className='h-6 w-6' aria-hidden='true' />
              </a>
            </Link>
          ))}
        </div>
        <div className='flex flex-row items-center justify-center my-6 text-center'>
          <span className='mr-2 hidden'>
            <Image src={img} height={48} width={48} />
          </span>
          <h3 className='text-sm sm:text-base'>
            <span className='text-2xl sm:text-lg'>&lt;</span>
            Tech Meowt /<span className='text-2xl sm:text-lg'>&gt;</span> |
            Brooklyn, NY |{' '}
            <a href='mailto:hello@techmeowt.com'>hello@techmeowt.com</a>
          </h3>
        </div>
        <p className='text-center mt-2'>
          &copy; {date} Tech Meowt, LLC. All rights reserved.
        </p>
        <div className='flex flex-row items-center justify-center text-center'>
          <p className='text-center text-sm'>
            <a
              href='https://drive.google.com/file/d/161o-LRtuqdKlndjyUrYsHC0ffy_v3HjZ/view?usp=sharing'
              target='_blank'
              rel='noopener'
            >
              Terms of Service
            </a>{' '}
            |{' '}
            <a
              href='https://drive.google.com/file/d/1Oo3GUf9VDdsLP-tQ06eSc9KFgYVE1TBG/view?usp=sharing'
              target='_blank'
              rel='noopener'
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

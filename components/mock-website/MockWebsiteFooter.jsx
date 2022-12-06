import Image from 'next/image';
import img from '../../public/images/mock-website-images/mock_logo.png';
import { dropdown, footerNav } from '../../utils/mock-website-data';

export default function MockWebsiteFooter() {
  return (
    <footer className='bg-indigo-800' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-full p-4 sm:px-6'>
        <div className='sm:grid sm:grid-cols-3 sm:gap-8'>
          <div className='space-y-4 sm:col-span-1'>
            <Image src={img} height={64} width={64} />
            <p className='text-base text-white'>
              123 Your Street
              <br />
              Your City, Your State 12345
              <br />
              (555) 555-5555
              <br />
              hello@yourorganization.org
            </p>
            <div className='flex space-x-2 sm:space-x-6'>
              {footerNav.social.map((item) => (
                <a key={item.name} href={item.href} className='text-white'>
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>
          <div className='mt-12 grid grid-cols-2 gap-8 sm:col-span-2 sm:mt-6'>
            <div className='sm:grid sm:grid-cols-2 sm:gap-8'>
              <a href='/our-work/website/home'>
                <h3 className='text-base font-medium text-white'>Home</h3>
              </a>
              <a href='/our-work/website/about' className='mt-12 sm:mt-0'>
                <h3 className='text-base font-medium text-white'>About</h3>
              </a>
            </div>
            <div className='sm:grid sm:grid-cols-2 sm:gap-8'>
              <a href='/our-work/website/our-work'>
                <h3 className='text-base font-medium text-white'>Our Work</h3>
              </a>
              <div>
                <h3 className='text-base font-medium text-white'>
                  Get Involved
                </h3>
                <ul role='list' className='ml-4 list-disc text-white'>
                  {dropdown.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className='text-base text-white'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-white pt-8'>
          <p className='text-base text-white xl:text-center'>
            &copy; 2020 Your Organization. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

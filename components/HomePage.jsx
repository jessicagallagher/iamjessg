import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { InlineWidget } from 'react-calendly'

export default function HomePage() {
  return (
    <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <div className='overflow-hidden border border-pinkLight rounded-lg mt-10 lg:mt-20 z-20 shadow-pinkDefault'>
        <div className='px-6 py-5'>
          <h1 className=' text-4xl sm:text-5xl mt-3 sm:mt-6'>
            Rethink your systems
          </h1>
          <h1 className=' text-4xl sm:text-5xl mt-3 sm:mt-6'>
            Visualize your strategy
          </h1>
          <div className='text-md sm:text-lg lg:text-xl mt-3 sm:mt-6'>
            <p>
              Tech Meowt believes that everyone—regardless of technical
              knowledge and budget constraints—should have access to
              user-friendly, engaging, and intuitive web applications and
              experiences that they need to solve real-world problems and
              day-to-day challenges. Our clients span multiple industries, but
              we specialize in the non-profit sector. Our services include
              building secure databases, CRMs, and bespoke web applications. We
              also provide website design, development, onboarding, and
              maintenance.
            </p>
            <hr className='my-3 sm:my-6 lg:my-8 mx-auto' />
            <div className='overflow-hidden'>
              <div className='z-10 max-w-full'>
                <h1 className='text-4xl font-bold tracking-tight sm:text-5xl font-thin'>
                  Let's talk about you
                </h1>

                <div className='max-w-full'>
                  <p className='mt-6 text-md sm:text-lg lg:text-xl'>
                    Got an idea for an app? Need a polished website stat?
                    Missing a CRM? How about a database? Not sure what you need?
                    Drop us a line to schedule a consultation.{' '}
                    <span className='text-xl sm:text-2xl filter brightness-110'>
                      👩🏼‍💻
                    </span>
                  </p>
                </div>
                <div className='overflow-visible'>
                  <InlineWidget
                    url='https://calendly.com/techmeowt/'
                    styles={{
                      width: '50%',
                      margin: '3rem auto',
                    }}
                    pageSettings={{
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: '1cd3a2',
                      textColor: '212121',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

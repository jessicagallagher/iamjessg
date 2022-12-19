import img from '../public/images/hero-about.jpeg'
import Link from 'next/link';

export default function About() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 lg:px-10 px-4'>
        <div className='w-full hidden sm:flex justify-center items-center md:relative'>
          <img src='/images/hero-about.jpeg' alt="" className='w-full h-48 lg:h-96 object-cover' />
        </div>
      <div className='mx-auto max-w-full my-16'>
        <h1 className='text-5xl text-center font-bold'>About Us</h1>
        <br />
        <p className='text-base md:text-lg'>
          Tech Meowt works with small to mid-size organizations to assess and
          build their technological needs. We get it—budgets are tight, but you
          need better technology. Our goal is to help you succeed by
          streamlining your processes and organizing your data—whether that's
          done by building a new website from the ground up, refreshing and/or
          rebranding your current website, creating a custom CRM to fit your
          organization's exact needs, or bringing your ideas to life with a web
          or mobile app.
        </p>
        <br />
        <p className='text-base md:text-lg'>
          Pricing is based on the size of your organization and the custom
          products that you choose. We{' '}
          <span className='font-bold'>actually want</span> to work around your
          budget and allow you to choose from hourly billing or a flat fee. We
          also offer à la carte pricing for extra revisions, adding a new
          feature, and ongoing maintenance. Every contract includes onboarding
          you and your team so that you can hit the ground running.
        </p>
        <br />
        <p className='text-base md:text-lg'>
          Tech Meowt takes on a number of pro bono projects each year. Contact
          us for more information.
        </p>
        <br />
        <p className='text-base md:text-lg font-bold text-pinkDefault'>
          It's time to ditch Google Sheets and Squarespace.
        </p>
      </div>
      <div className='mx-auto max-w-full px-4 text-center sm:px-6 lg:px-8'>
        <div className='space-y-8 sm:space-y-12'>
          <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              Meet our leadership
            </h2>
          </div>
          <ul role='list' className='mx-auto flex justify-center items-center'>
            <li>
              <div className='space-y-4'>
                <Link legacyBehavior href='/about/jessica-gallagher'>
                  <a>
                    <img
                      className='mx-auto h-48 w-48 rounded-full shadow-2xl'
                      src='/images/headshot-december.jpg'
                      alt=''
                    />
                  </a>
                </Link>

                <div className='space-y-2'>
                  <div className='text-lg font-medium'>
                    <Link legacyBehavior href='/about/jessica-gallagher'>
                      <a className='hover:text-greenDefault hover:font-bold'>
                        <h3>Jessica Gallagher</h3>
                      </a>
                    </Link>
                    <p className='font-semibold'>Founder, CEO + CTO</p>
                    <Link legacyBehavior href='/about/portfolio/jessica-gallagher'>
                      <a className='hover:text-greenDefault hover:font-bold'>
                        <h3>Personal Portfolio</h3>
                      </a>
                    </Link>
                  </div>
                  <div className='flex flex-row justify-center items-center space-x-4'>
                    <Link
                      legacyBehavior
                      href='https://github.com/jessicagallagher'
                    >
                      <a target='_blank' rel='noopener'>
                        <div className='h-6 w-6'>
                          <svg fill='#f05c85' viewBox='0 0 24 24'>
                            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                          </svg>
                        </div>
                      </a>
                    </Link>
                    <Link
                      legacyBehavior
                      href='https://www.linkedin.com/in/jessica-gallagher/'
                    >
                      <a target='_blank' rel='noopener'>
                        <div className='h-6 w-6'>
                          <svg fill='#f05c85' viewBox='0 0 24 24'>
                            <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                          </svg>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

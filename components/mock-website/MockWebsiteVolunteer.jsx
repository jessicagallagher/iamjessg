import { MockWebsiteNav, MockWebsiteFooter } from '..';
import Image from 'next/image';
import { opportunities } from '../../utils/mock-website-data';

export default function MockWebsiteVolunteer() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 bg-white'>
      {/* nav */}
      <MockWebsiteNav />

      {/* hero */}
      <div className='relative bg-indigo-800'>
        <div className='absolute inset-0'>
          <img
            className='h-full w-full object-cover'
            src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
            alt=''
          />
          <div
            className='absolute inset-0 bg-indigo-500 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            Volunteer
          </h1>
          <p className='mt-6 max-w-3xl text-xl text-indigo-100'>
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </div>

      {/* volunteer opportunities */}
      <div className='relative pb-24'>
        <div>
          <div className='relative mx-auto max-w-7xl py-24 px-4 sm:py-24 sm:px-6 lg:px-8'>
            <h1 className='text-4xl font-bold tracking-tight md:text-5xl text-indigo-800'>
              Volunteer Oppportunities
            </h1>
            <p className='mt-6 max-w-3xl text-xl'>
              Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
              id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
              fames. Dui, amet, nec sit pulvinar.
            </p>
          </div>
        </div>
      </div>
      <section
        className='relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8'
        aria-labelledby='contact-heading'
      >
        <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
          {opportunities.map((opp) => (
            <div
              key={opp.name}
              className='flex flex-col rounded-2xl bg-white shadow-xl'
            >
              <div className='relative flex-1 px-6 pt-16 pb-8 md:px-8'>
                <div className='absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-800 p-5 shadow-lg'>
                  <opp.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='text-xl font-medium'>
                  {opp.name}
                </h3>
                <p className='mt-4 text-base'>
                  {opp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* sign up to volunteer */}
      <div className='relative py-16'>
        <div
          className='absolute inset-x-0 top-0 hidden h-1/2 lg:block'
          aria-hidden='true'
        />
        <div className='mx-auto max-w-7xl bg-indigo-800 lg:bg-transparent lg:px-8'>
          <div className='lg:grid lg:grid-cols-12'>
            {/* image */}
            <div className='relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16'>
              <div
                className='absolute inset-x-0 h-1/2 lg:hidden'
                aria-hidden='true'
              />
              <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
                <div className='aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1'>
                  <img
                    className='rounded-3xl object-cover object-center shadow-2xl'
                    src='https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3JvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                    alt=''
                  />
                </div>
              </div>
            </div>

            {/* cta */}
            <div className='relative bg-indigo-800 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl'>
              <div
                className='absolute inset-0 hidden overflow-hidden rounded-3xl lg:block'
                aria-hidden='true'
              >
                <svg
                  className='absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'
                >
                  <defs>
                    <pattern
                      id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-white'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                  />
                </svg>
                <svg
                  className='absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'
                >
                  <defs>
                    <pattern
                      id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-white'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                  />
                </svg>
              </div>
              <div className='relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0'>
                <h2
                  className='text-5xl font-bold tracking-tight text-white'
                  id='join-heading'
                >
                  You can make a difference
                </h2>
                <p className='text-lg text-white'>
                  Varius facilisi mauris sed sit. Non sed et duis dui leo,
                  vulputate id malesuada non. Cras aliquet purus dui laoreet
                  diam sed lacus, fames.
                </p>
                <form className='mt-8 sm:flex'>
                  <label htmlFor='email-address' className='sr-only'>
                    Email address
                  </label>
                  <input
                    id='email-address'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 sm:max-w-xs'
                    placeholder='Enter your email'
                  />
                  <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
                    <button
                      type='submit'
                      className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-white hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <MockWebsiteFooter />
    </div>
  );
}

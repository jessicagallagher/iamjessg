import { MockWebsiteNav, MockWebsiteFooter } from '..';
import { UsersIcon } from '@heroicons/react/24/outline';
import { metrics } from '../../utils/mock-website-data';

export default function MockWebsitePartner() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 bg-white'>
      {/* nav */}
      <MockWebsiteNav />

      {/* hero */}
      <div>
        <div className='relative w-full' aria-hidden='true'>
          <img
            src='https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            alt=''
            className='w-full h-48 lg:h-96 object-cover'
          />
          <h2 className='absolute top-0 left-0 pt-6 pl-2 lg:p-20 text-indigo-800 font-bold text-3xl sm:text-5xl'>
            Partner With Us
          </h2>
        </div>

        {/* header */}
        <div className='relative mx-auto max-w-7xl sm:px-4 pb-16'>
          <div className='w-full'>
            <p className='mt-10 lg:text-lg text-indigo-800 font-bold mx-8'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              vero deleniti amet iste quae illum aperiam delectus velit qui
              voluptatibus, aliquid animi quaerat aliquam laudantium in!
              Consectetur temporibus aut quo.
            </p>
          </div>

          {/* company match */}
          <div className='relative mx-8 mt-16'>
            <div className='h-56 bg-indigo-500 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2'>
              <img
                className='h-full w-full object-cover'
                src='https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                alt='Support team'
              />
            </div>
            <div className='relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16'>
              <div className='mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10'>
                <div>
                  <div className='flex h-12 w-12 items-center justify-center rounded-md bg-indigo-800 text-white'>
                    <UsersIcon className='h-6 w-6' aria-hidden='true' />
                  </div>
                </div>
                <h2 className='mt-6 text-3xl font-bold tracking-tight text-indigo-800 sm:text-4xl'>
                  Company Match
                </h2>
                <p className='mt-6 text-base sm:text-lg'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolore nihil ea rerum ipsa. Nostrum consectetur sequi culpa
                  doloribus omnis, molestiae esse placeat, exercitationem magnam
                  quod molestias quia aspernatur deserunt voluptatibus.
                </p>
                <div className='mt-8 overflow-hidden'>
                  <dl className='-mx-8 -mt-8 flex flex-wrap'>
                    <div className='flex flex-col px-8 pt-8'>
                      <dt className='order-2 text-base font-medium text-gray-500'>
                        Aenean
                      </dt>
                      <dd className='order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight'>
                        $425,000
                      </dd>
                    </div>
                    <div className='flex flex-col px-8 pt-8'>
                      <dt className='order-2 text-base font-medium text-gray-500'>
                        Nulla
                      </dt>
                      <dd className='order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight'>
                        50%
                      </dd>
                    </div>
                    <div className='flex flex-col px-8 pt-8'>
                      <dt className='order-2 text-base font-medium text-gray-500'>
                        Donec
                      </dt>
                      <dd className='order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight'>
                        100k+
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* corporate giving */}
          <div className='lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 mx-8 sm:mt-16'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight text-indigo-800 sm:text-4xl'>
                Corporate Giving
              </h2>
              <p className='mt-3 max-w-3xl sm:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue.
              </p>
              <div className='mt-8 sm:flex'>
                <div className='mt-3 sm:mt-0 flex flex-row items-center'>
                  <div>
                    <label htmlFor='email' className='sr-only'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full rounded-md border-gray-300 shadow-sm text-sm'
                      placeholder='you@example.com'
                    />
                  </div>
                  <a
                    href='#'
                    className='ml-4 sm:ml-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-sm sm:text-base font-medium text-white hover:bg-indigo-800'
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className='mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2'>
              <div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
                <img
                  className='max-h-12'
                  src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
                  alt='Workcation'
                />
              </div>
              <div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
                <img
                  className='max-h-12'
                  src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
                  alt='Mirage'
                />
              </div>
              <div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
                <img
                  className='max-h-12'
                  src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
                  alt='Tuple'
                />
              </div>
              <div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
                <img
                  className='max-h-12'
                  src='https://tailwindui.com/img/logos/laravel-logo-gray-400.svg'
                  alt='Laravel'
                />
              </div>
              <div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
                <img
                  className='max-h-12'
                  src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
                  alt='StaticKit'
                />
              </div>
              <div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
                <img
                  className='max-h-12'
                  src='https://tailwindui.com/img/logos/statamic-logo-gray-400.svg'
                  alt='Statamic'
                />
              </div>
            </div>
          </div>

          {/* cause marketing */}
          <div className='relative bg-indigo-800 mt-16 mx-8'>
            <div className='absolute bottom-0 h-80 w-full lg:inset-0 lg:h-full'>
              <div className='h-full w-full lg:grid lg:grid-cols-2'>
                <div className='h-full lg:relative lg:col-start-2'>
                  <img
                    className='h-full w-full object-cover opacity-25 lg:absolute lg:inset-0'
                    src='https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxtYXJrZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                    alt='People working on laptops'
                  />
                  <div
                    aria-hidden='true'
                    className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-indigo-800 lg:inset-y-0 lg:left-0 lg:h-full lg:w-32 lg:bg-gradient-to-r'
                  />
                </div>
              </div>
            </div>
            <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-x-8'>
              <div className='relative pt-12 pb-64 md:pt-24 sm:pb-64 lg:col-start-1 lg:pb-24'>
                <p className='md:mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white'>
                  Cause Marketing
                </p>
                <p className='mt-5 md:text-lg text-white'>
                  Rhoncus sagittis risus arcu erat lectus bibendum. Ut in
                  adipiscing quis in viverra tristique sem. Ornare feugiat
                  viverra eleifend fusce orci in quis amet. Sit in et vitae
                  tortor, massa. Dapibus laoreet amet lacus nibh integer quis.
                  Eu vulputate diam sit tellus quis at.
                </p>
                <div className='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2'>
                  {metrics.map((item) => (
                    <p key={item.id}>
                      <span className='block text-2xl font-bold text-white'>
                        {item.stat}
                      </span>
                      <span className='mt-1 block text-base text-white'>
                        <span className='font-medium text-white'>
                          {item.emphasis}
                        </span>{' '}
                        {item.rest}
                      </span>
                    </p>
                  ))}
                </div>
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

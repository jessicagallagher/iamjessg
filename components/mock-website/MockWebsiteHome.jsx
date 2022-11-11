import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import img from '../../public/images/mock-website-images/mock_logo_with_name.png'
import { Button, MockWebsiteNav, MockWebsiteFooter } from '..'
import { whatWeDo, posts } from '../../utils/mock-website-data';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MockWebsite() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 bg-white'>
      {/* nav */}
      <MockWebsiteNav />

      {/* image carousel */}
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
        >
          <div>
            <Image
              src={
                'https://images.unsplash.com/photo-1520694478166-daaaaec95b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdyb3VwJTIwb2YlMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              }
              width={1500}
              height={500}
              className='object-cover'
            />
          </div>
          <div>
            <Image
              src={
                'https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGdyb3VwJTIwb2YlMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              }
              width={1500}
              height={500}
              className='object-cover'
            />
          </div>
          <div>
            <Image
              src={
                'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGdyb3VwJTIwb2YlMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              }
              width={1500}
              height={500}
              className='object-cover'
            />
          </div>
        </Carousel>
      </div>

      <div className='flex justify-center pb-10 border-b border-indigo-200 mx-10'>
        <Image src={img} height={200} width={375} />
      </div>

      {/* mission */}
      <div className='mx-auto max-w-7xl px-10 pt-10'>
        <h1 className='text-center text-3xl md:text-4xl font-bold'>
          Our Mission
        </h1>
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
        <h1 className='text-center text-3xl md:text-4xl font-bold mb-6'>
          What We Do
        </h1>
        <div className='mx-auto max-w-2xl space-y-12 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 lg:px-8'>
          {whatWeDo.map((item) => (
            <div
              key={item.heading}
              className='relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 lg:px-8 lg:pt-8 lg:pb-36 shadow-sm'
            >
              <div className='flex-1'>
                <h2 className='text-center text-xl lg:text-2xl mb-4'>
                  {item.heading}
                </h2>
                <p className='text-base lg:text-lg'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* latest news */}
      <div>
        <h2 className='text-center text-3xl md:text-4xl font-bold tracking-tight mt-10'>
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
                More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* impact */}
      <div className='pt-12 sm:pt-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl text-center'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
              Your Impact
            </h2>
          </div>
        </div>
        <div className='mt-10 pb-12 sm:pb-16'>
          <div className='relative'>
            <div className='absolute inset-0 h-1/2' />
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='mx-auto max-w-4xl'>
                <dl className='rounded-lg bg-white shadow-lg lg:grid lg:grid-cols-3'>
                  <div className='flex flex-col border-b border-gray-100 p-6 text-center lg:border-0 lg:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium sm:text-lg leading-6'>
                      Proin Et
                    </dt>
                    <dd className='order-1 text-4xl sm:text-5xl font-bold tracking-tight text-indigo-500'>
                      100%
                    </dd>
                  </div>
                  <div className='flex flex-col border-b border-gray-100 p-6 text-center lg:border-0 lg:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium leading-6'>
                      Pellentesque Habitant
                    </dt>
                    <dd className='order-1 text-4xl sm:text-5xl font-bold tracking-tight text-indigo-500'>
                      $1,000,000
                    </dd>
                  </div>
                  <div className='flex flex-col border-b border-gray-100 p-6 text-center lg:border-0 lg:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium leading-6'>
                      Cras Eget
                    </dt>
                    <dd className='order-1 text-4xl sm:text-5xl font-bold tracking-tight text-indigo-500'>
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
      <div className='mx-auto px-10 mt-10 py-12 lg:flex lg:items-center lg:py-28 bg-indigo-500'>
        <div className='lg:w-0 lg:flex-1 text-white'>
          <h1 className='text-3xl md:text-4xl font-bold tracking-tight'>
            Sign up for our newsletter
          </h1>
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
      <MockWebsiteFooter />
    </div>
  );
}

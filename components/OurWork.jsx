import Link from 'next/link';
import Image from 'next/image';
import { ourWork } from '../utils/data';

export default function OurWork() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 lg:px-10 px-4'>
      {/* <div className='relative mx-auto max-w-7xl mt-10 lg:mt-20'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Our Work
          </h2>
        </div>
        <div className='mx-auto mt-12 grid max-w-full gap-5 lg:max-w-none lg:grid-cols-3'>
          {ourWork.map((project) => (
            <div
              key={project.projectName}
              className='flex flex-col overflow-hidden rounded-lg shadow-lg'
            >
              <div className='flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover lg:object-fill border-b border-greenLight'
                  src={project.imgUrl}
                  alt='project screenshot image'
                />
              </div>
              <div className='flex flex-1 flex-col justify-between p-6'>
                <div className='flex-1'>
                  <Link href={project.pageUrl} legacyBehavior>
                    <a href={project.pageUrl} target='blank' rel='noopener noreferrer' className='mt-2 block'>
                      <p className='text-xl font-semibold'>
                        {project.projectName}
                      </p>
                      <p className='mt-3 text-base'>
                        {project.projectDescription}
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className='w-full hidden sm:flex justify-center items-center md:relative'>
        <img
          src='/images/hero-our-work.jpg'
          alt='hero'
          className='w-full h-48 lg:h-96 object-cover rounded-lg'
        />
      </div>
      <div className='mx-auto max-w-full my-16'>
        <h1 className='text-5xl text-center font-bold'>Our Work</h1>
        <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl mt-16'>
          Website Design, Development, and Refresh
        </h2>
        <p className='my-8 text-base md:text-lg'>
          We can build a custom website for you from the ground up. We use the
          latest technologies to build a responsive, mobile-friendly website
          with lightning-fast page load times. We also offer ongoing, as-needed
          maintenance. Looking to refresh your current website? Great! Send us
          your ideas.
        </p>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
          {ourWork.map((project) => (
            <div key={project.projectName}>
              <a
                href={project.pageUrl}
                target='blank'
                rel='noopener noreferrer'
              >
                <img
                  className='aspect-3/2 w-full rounded-lg object-cover'
                  src={project.imgUrl}
                  alt='project screenshot image'
                />
              </a>

              <p className='text-base md:text-lg'>
                {project.projectDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

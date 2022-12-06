import Link from 'next/link';
import Image from 'next/image';
import { ourWork } from '../utils/data';

export default function OurWork() {
  return (
    <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <div className='relative mx-auto max-w-7xl mt-10 lg:mt-20'>
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
                  alt=''
                />
              </div>
              <div className='flex flex-1 flex-col justify-between p-6'>
                <div className='flex-1'>
                  <Link href={project.pageUrl} legacyBehavior>
                    <a href={project.pageUrl} className='mt-2 block'>
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
      </div>
    </div>
  );
}

import Image from 'next/image';
import { MockWebsiteNav, MockWebsiteFooter } from '..';
import { people } from '../../utils/mock-website-data';

export default function MockWebsiteAbout() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 bg-white'>
      {/* nav */}
      <MockWebsiteNav />

      {/* hero */}
      <div>
        <div className='mock-website-hero flex justify-center items-center md:relative'>
          <p className='md:absolute md:bottom-0 md:right-0 p-24 text-indigo-800 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
            Get to know us
          </p>
        </div>
      </div>

      {/* intro */}
      <div className='mx-auto max-w-7xl px-10 my-24 text-base md:text-lg font-bold'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          libero placeat quae provident est ex quibusdam laboriosam praesentium?
          Deleniti dignissimos delectus fuga quod id sunt aliquam quaerat sint
          similique consequuntur.
        </p>
        <br />
        <p>
          Nullam finibus mollis massa eget posuere. Sed dignissim diam a
          elementum mattis. Nunc auctor rhoncus massa. Nulla nec ante aliquet,
          semper ipsum id, blandit elit. Nunc accumsan libero non convallis
          scelerisque. Nam at semper elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam vitae ullamcorper justo. Donec
          molestie gravida dui, non vestibulum velit molestie non.
        </p>
      </div>

      {/* leadership */}
      <div>
        <div className='mx-auto max-w-7xl px-10 my-24'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
            <div className='space-y-5 sm:space-y-4'>
              <h2 className='text-2xl lg:text-3xl font-bold tracking-tight'>
                Meet our leadership
              </h2>
              <p className='text-base lg:text-xl'>
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                vitae elementum enim vitae ullamcorper suspendisse. Vivamus
                fringilla.
              </p>
            </div>
            <div className='lg:col-span-2'>
              <ul
                role='list'
                className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className='flex items-center space-x-4 lg:space-x-6'>
                      <img
                        className='h-16 w-16 rounded-full lg:h-20 lg:w-20'
                        src={person.imageUrl}
                        alt=''
                      />
                      <div className='space-y-1 font-medium leading-6'>
                        <h3 className='text-lg'>{person.name}</h3>
                        <p className='text-indigo-600'>{person.role}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 
      
      */}
      <MockWebsiteFooter />
    </div>
  );
}

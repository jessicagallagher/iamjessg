import Image from 'next/image';
import { MockWebsiteNav, MockWebsiteFooter } from '../components';
import skyline2 from '../public/images/mock-website-images/skyline2.jpg';

const people = [
  {
    name: 'Jane Doe',
    role: 'Executive Director',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'John Doe',
    role: 'Co-Founder',
    imageUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Jim Johnson',
    role: 'Co-Founder',
    imageUrl:
      'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=ormat&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Amy Smith',
    role: 'Communications and Public Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Daniel Stevens',
    role: 'Community Outreach',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Crystal Morris',
    role: 'Fundraising',
    imageUrl:
      'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michelle Scott',
    role: 'Volunteer Management',
    imageUrl:
      'https://images.unsplash.com/photo-1543949806-2c9935e6aa78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Josh Greene',
    role: 'Administrative and Finance',
    imageUrl:
      'https://images.unsplash.com/photo-1620932934088-fbdb2920e484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function MockWebsiteAbout() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20'>
      {/* nav */}
      <MockWebsiteNav />

      <div>
        <div className='mock-website-hero flex justify-center items-center md:relative'>
          <p className='md:absolute md:bottom-0 md:right-0 p-24 text-indigo-500 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
            Get to know us
          </p>
        </div>
      </div>
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
      <MockWebsiteFooter />
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    projectName: 'Website',
    imgUrl: '',
    pageUrl: '/our-work/website/home',
    projectDescription:
      'Donec semper elit libero, ut convallis tortor finibus vel. Sed blandit mi in sollicitudin suscipit. Sed rutrum rutrum quam, sit amet consequat nisl placerat ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    projectName: 'Website Refresh',
    imgUrl: '',
    pageUrl: '/',
    projectDescription:
      'Donec semper elit libero, ut convallis tortor finibus vel. Sed blandit mi in sollicitudin suscipit. Sed rutrum rutrum quam, sit amet consequat nisl placerat ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    projectName: 'Blog',
    imgUrl: '',
    pageUrl: '/',
    projectDescription:
      'Donec semper elit libero, ut convallis tortor finibus vel. Sed blandit mi in sollicitudin suscipit. Sed rutrum rutrum quam, sit amet consequat nisl placerat ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    projectName: 'Database',
    imgUrl: '',
    pageUrl: '/',
    projectDescription:
      'Donec semper elit libero, ut convallis tortor finibus vel. Sed blandit mi in sollicitudin suscipit. Sed rutrum rutrum quam, sit amet consequat nisl placerat ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function OurWork() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 lg:px-10 xl:px-48'>
      <div className='relative mx-auto max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Our Work
          </h2>
        </div>
        <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
          {projects.map((project) => (
            <div
              key={project.projectName}
              className='flex flex-col overflow-hidden rounded-lg shadow-lg'
            >
              <div className='flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover'
                  src={project.imgUrl}
                  alt=''
                />
              </div>
              <div className='flex flex-1 flex-col justify-between bg-white p-6'>
                <div className='flex-1'>
                  <Link href={project.pageUrl} legacyBehavior>
                    <a href={project.pageUrl} className='mt-2 block'>
                      <p className='text-xl font-semibold text-gray-900'>
                        {project.projectName}
                      </p>
                      <p className='mt-3 text-base text-gray-500'>
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

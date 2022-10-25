import img from '../public/images/github-logo.png'
import webImg from '../public/images/website.png'
import constructionImg from '../public/images/under-construction.png'
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    {
      projectName: 'Tech Meowt',
      imageUrl: '/images/portfolio-images/tech-meowt.png',
      techUsed: 'Next.js + Tailwind CSS',
      projectUrl: 'https://techmeowt.com',
      pageUrl: '/portfolio',
      projectGitHubUrl: 'https://github.com/jessicagallagher/iamjessg',
    },
    {
      projectName: 'Database Management System *Demo Coming Soon!',
      imageUrl: '/images/portfolio-images/database-management-system.gif',
      techUsed:
        'React, MongoDB, Express, Node, Prisma ORM, Bootstrap, + Reactstrap',
      projectUrl: '#',
      pageUrl: '/portfolio',
      projectGitHubUrl: '#',
    },
    {
      projectName: 'Racecation (Work in progress)',
      imageUrl: '/images/portfolio-images/racecation.png',
      techUsed:
        'Next.js, Tailwind CSS, Firebase Authentication, + Firebase Firestore',
      projectUrl: '#',
      pageUrl: '/portfolio',
      projectGitHubUrl: 'https://github.com/jessicagallagher/racecation',
    },
    {
      projectName: 'Tetris',
      imageUrl: '/images/portfolio-images/tetris.gif',
      techUsed: 'React',
      projectUrl: 'https://jess-tetris.vercel.app/',
      pageUrl: '/portfolio',
      projectGitHubUrl: 'https://github.com/jessicagallagher/tetris',
    },
    {
      projectName: 'Where To?',
      imageUrl: '/images/portfolio-images/where-to.gif',
      techUsed: 'Next.js, Tailwind CSS, Firebase Authentication, + Firebase Firestore',
      projectUrl: 'https://where-to.vercel.app/',
      pageUrl: '/portfolio',
      projectGitHubUrl: 'https://github.com/jessicagallagher/where_to_v2',
    },
  ];

  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 lg:px-10 xl:px-48'>
      <div className='space-y-12 p-2 lg:p-0'>
        <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
          <h2 className='text-3xl font-thin tracking-tight sm:text-4xl'>
            Current + Past Projects
          </h2>
        </div>
        <ul
          role='list'
          className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'
        >
          {projects.map((project) => (
            <li key={project.projectName}>
              <div className='space-y-4'>
                <Link href={project.pageUrl}>
                  <a target='_blank' rel='noopener'>
                    <div className='aspect-w-3 aspect-h-2'>
                      <img
                        className='rounded-lg object-cover shadow-lg border border-pinkDefault hover:shadow-2xl hover:border-greenDefault'
                        src={project.imageUrl}
                        alt='screenshot of project'
                      />
                    </div>
                  </a>
                </Link>

                <div className='space-y-2'>
                  <div className='space-y-1 font-medium leading-6'>
                    <Link href={project.projectUrl}>
                      <a
                        className='hover:text-greenDefault'
                        target='_blank'
                        rel='noopener'
                      >
                        <h3 className='text-xl'>{project.projectName}</h3>
                      </a>
                    </Link>
                    <p>Built with {project.techUsed}</p>
                  </div>
                  <ul role='list' className='flex space-x-3 items-center'>
                    <li>
                      {project.projectGitHubUrl !== '#' ? (
                      <Link href={project.projectGitHubUrl}>
                        <a>
                          <span className='sr-only'>
                            Project GitHub Repository
                          </span>
                          <Image
                            src={img}
                            width={25}
                            height={25}
                            aria-hidden='true'
                          />
                        </a>
                      </Link>
                      ) : ''}
                      
                    </li>
                    <li>
                      {project.projectUrl !== '#' ? (
                        <Link href={project.projectUrl}>
                          <a target='_blank' rel='noopener'>
                            <span className='sr-only'>
                              Link to live project
                            </span>
                            <Image
                              src={webImg}
                              width={30}
                              height={30}
                              aria-hidden='true'
                            />
                          </a>
                        </Link>
                      ) : (
                        <Image
                          src={constructionImg}
                          width={30}
                          height={30}
                          aria-hidden='true'
                        />
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

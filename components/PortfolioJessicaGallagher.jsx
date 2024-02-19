import img from '../public/images/github-logo.png';
import webImg from '../public/images/website.png';
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioJessicaGallagher() {
  const projects = [
    {
      projectName: 'Tech Meowt',
      imageUrl: '/images/portfolio-images/tech-meowt.png',
      techUsed: 'Next.js, Tailwind CSS, Calendly, SendGrid',
      projectUrl: 'https://techmeowt.com',
      projectGitHubUrl: 'https://github.com/jessicagallagher/iamjessg/tree/dev',
      projectInstructions: '',
    },
    {
      projectName: 'Realtor.com Clone',
      imageUrl: '/images/portfolio-images/realtor.png',
      techUsed:
        'React, Tailwind CSS, Firebase Firestore, Firebase Authentication, Leaflet, Toastify + Swiper, OAuth',
      projectUrl: 'https://realtor-clone-tan.vercel.app/',
      projectGitHubUrl: 'https://github.com/jessicagallagher/realtor-clone',
      projectInstructions: 'This is a fully functioning web application that requires creating an account to post a real estate listing. The database will save your listings and your user account information, however, your user account information is private, encrypted, and will never be shared with any third parties.',
    },
    {
      projectName: 'Database Management System',
      imageUrl: '/images/portfolio-images/database-management-system.gif',
      techUsed:
        'React, MongoDB, Express, Node, Prisma ORM, Nodemailer, JWT Authentication, Bootstrap, + Reactstrap',
      projectUrl: '#',
      projectGitHubUrl: 'https://github.com/Tech-Meowt/red2blue-v1',
      projectInstructions: 'This project is only accessible by the client. A demo of this web application is coming soon.',
    },
    {
      projectName: 'Candy Crush Clone',
      imageUrl: '/images/portfolio-images/candy-crush.gif',
      techUsed: 'React',
      projectUrl: 'https://jess-candy-crush.vercel.app/',
      projectGitHubUrl: 'https://github.com/jessicagallagher/react-candy-crush',
      projectInstructions: 'This game is accessible on both web and mobile browsers. Use your mouse to move the candies if you\'re using the web version, and utilize the touch capabilities on your phone if using the mobile version.',
    },
    {
      projectName: 'Tetris',
      imageUrl: '/images/portfolio-images/tetris.gif',
      techUsed: 'React',
      projectUrl: 'https://jess-tetris.vercel.app/',
      projectGitHubUrl: 'https://github.com/jessicagallagher/tetris',
      projectInstructions: 'This game is accessible on web browsers only. Hold the down arrow key to quickly drop the tetromino, press the left and right arrow keys to position the teromino, and press the up arrow key to rotate the tetromino.',
    },
    {
      projectName: 'Where To?',
      imageUrl: '/images/portfolio-images/where-to.gif',
      techUsed:
        'Next.js, Tailwind CSS, Firebase Authentication, + Firebase Firestore',
      projectUrl: 'https://where-to.vercel.app/',
      projectGitHubUrl: 'https://github.com/jessicagallagher/where_to_v2',
      projectInstructions: 'This is a fully functioning web application that requires users to create an account. Your account information is saved in a database and is private, encrypted, and will never be shared with any third parties.',
    },
    {
      projectName: 'Weather App',
      imageUrl: '/images/portfolio-images/weather-app.png',
      techUsed: 'React + OpenWeather API',
      projectUrl: 'https://jess-react-weather-app.vercel.app/',
      projectGitHubUrl: 'https://github.com/jessicagallagher/react-weather-app',
      projectInstructions: '',
    },
  ];

  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 lg:px-10 px-4'>
      <div className='space-y-12 p-2 lg:p-0'>
        <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
          <h2 className='text-2xl tracking-tight sm:text-3xl'>
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
                <div className='aspect-w-3 aspect-h-2'>
                  <img
                    className='rounded-lg object-scale-down shadow-lg border border-pinkDefault hover:shadow-2xl hover:border-greenDefault'
                    src={project.imageUrl}
                    alt={`Screenshot of project: ${project.projectName}`}
                  />
                </div>
                <div className='space-y-2'>
                  <div className='space-y-1 font-medium leading-6'>
                    <Link legacyBehavior href={project.projectUrl}>
                      <a
                        className='hover:text-greenDefault'
                        target='_blank'
                        rel='noopener'
                      >
                        <h3 className='text-lg md:text-xl'>
                          {project.projectName}
                        </h3>
                      </a>
                    </Link>
                    <p>Built with {project.techUsed}</p>
                  </div>
                  <ul role='list' className='flex space-x-3 items-center'>
                    <li>
                      {project.projectGitHubUrl !== '#' ? (
                        <Link legacyBehavior href={project.projectGitHubUrl}>
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
                      ) : (
                        ''
                      )}
                    </li>
                    <li>
                      {project.projectUrl !== '#' ? (
                        <Link legacyBehavior href={project.projectUrl}>
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
                        ''
                      )}
                    </li>
                  </ul>
                  <ul role='list'>
                    <li>
                      {project.projectInstructions !== '' ? (
                        <p className='text-pinkDefault font-semibold'>
                          <span className='text-3xl'>👀 </span>
                          {project.projectInstructions}
                        </p>
                      ) : (
                        ''
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

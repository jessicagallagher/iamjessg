import { Cats, Running, Reading, CurrentProjects } from '../components';
import Link from 'next/link';

export default function About() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 lg:px-10 xl:px-48'>
      <img
        className='w-full object-cover h-[9rem] sm:h-60 md:h-72 lg:h-96 lg:rounded-md'
        src='./images/cover-photo.jpg'
        alt='brooklyn bridge'
        loading='lazy'
      />
      <div className='max-w-100'>
        <div className='-mt-16 sm:-mt-20 lg:-mt-10 flex flex-col lg:flex-row items-end lg:items-center'>
          <div className='mx-auto lg:mx-10'>
            <img
              className='h-40 w-40 rounded-full ring-4 ring-greenDefault'
              src='./images/profile-photo.jpg'
              alt='girl holding cat'
              loading='lazy'
            />
          </div>
          <div className='font-bold mt-4 flex flex-col mx-auto lg:m-0'>
            <div className='text-center lg:text-left '>
              <h1 className='text-3xl lg:mt-6'>
                Jessica Gallagher, Founder + CTO
              </h1>
              <h2 className='text-2xl'>Brooklyn, NY</h2>
              <Link legacyBehavior href='/portfolio'>
                <a>
                  <h3 className='text-pinkDefault mt-1'>View Portfolio</h3>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex w-full justify-start items-center py-3'>
          <div className='border rounded-xl shadow rounded w-full p-3 mt-3'>
            <h1 className='text-2xl font-bold'>About</h1>
            <div className=' text-lg py-4'>
              <p>
                I'm a Brooklyn-based full-stack software engineer and designer{' '}
                <span className=' text-xl lg:text-2xl font-semibold text-pinkDefault'>
                  (sometimes)
                </span>{' '}
                with a passion for creating user-friendly, engaging, and
                intuitive experiences. I enjoy creating applications that solve
                real-world problems and day-to-day challenges. I like single
                quotes and semi-colons—even when they play hide-and-seek. I have
                an extensive background working with non-profits in different
                capacities—including serving as a Board President. I understand
                the technological challenges that non-profits face, including
                the biggest one... tight budgets!
              </p>
            </div>
            <h1 className='text-2xl font-bold'>Interests + Hobbies</h1>
            <div className=' text-lg py-4'>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-6 font-semibold '>
                <Running />
                <Reading />
                <CurrentProjects />
                <Cats />
              </ul>
            </div>
            <div className=' text-base font-semibold text-pinkDefault py-4'>
              <p>*Did I mention that I'm a runner?</p>
              <p>
                *Did I mention that I'm probably Next.js' and Tailwind's biggest
                fan?
              </p>
              <p>*Did I mention that I love cats?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

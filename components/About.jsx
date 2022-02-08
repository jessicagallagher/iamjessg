import Running from "./Running";
import Reading from "./Reading";
import Coding from './CurrentProjects'
import Cats from './Cats'

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
              className='h-40 w-40 rounded-full ring-4 ring-green-default'
              src='./images/profile-photo.jpg'
              alt='girl holding cat'
              loading='lazy'
            />
          </div>
          <div className='font-bold mt-4 flex flex-col mx-auto lg:m-0'>
            <div className='text-center lg:text-left '>
              <h1 className='text-3xl lg:mt-6'>Jessica Gallagher</h1>
              <h2 className='text-2xl'>Brooklyn, NY</h2>
            </div>
          </div>
        </div>
        <div className='flex w-full justify-start items-center py-3'>
          <div className='border rounded-xl shadow rounded w-full p-3 mt-3'>
            <h1 className='text-2xl font-bold'>About</h1>
            <div className='font-raleway text-lg py-4'>
              <p>
                Originally from South Louisiana, I have a B.S. in marketing from
                LSU (Geaux Tigers!). Prior to software engineering, I worked as
                a corporate communications consultant at Gartner in Washington,
                D.C. and also at several early-stage startups in the Ed Tech
                space in New York. Working in tech allowed me to work very
                closely with the Software Engineers on my team—which inspired me
                to learn how to code. I loved solving problems with technology,
                and that motivated me to continue learning on my own and take
                advantage of several volunteer opportunities that helped
                strengthen my skills in not only website design and development,
                but also in fundraising, nonprofit management, and gained board
                experience. Like most people, my life changed during the
                pandemic. I decided to take a huge leap of faith and completely
                changed careers. I saw an opportunity to finally do what I
                loved... and now we're here!
              </p>
            </div>
            <h1 className='text-2xl font-bold'>Interests + Hobbies</h1>
            <div className='font-raleway text-lg py-4'>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 font-semibold font-lato'>
                <Running />
                <Reading />
                <Coding />
                <Cats />
              </ul>
            </div>
            <div className='font-raleway text-base font-semibold text-pink-default py-4'>
              <p>*Did I mention that I'm a runner?</p>
              <p>*Did I mention that I'm probably Next.js' and Tailwind's biggest fan?</p>
              <p>*Did I mention that I love cats?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

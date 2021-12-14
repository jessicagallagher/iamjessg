import { useState } from 'react';

export default function About() {
  const [isActive, setIsActive] = useState(false);
  const [overview, setOverview] = useState(true);

  const handleNavToggle = (e) => {
    e.preventDefault();

 

  }

  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 lg:px-10 xl:px-48'>
      <img
        className='w-full object-cover h-[9rem] sm:h-60 md:h-72 lg:h-96 lg:rounded-md'
        src='./images/cover-photo.jpg'
        alt='brooklyn bridge'
        loading='lazy'
      />
      <div className='max-w-5xl'>
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
        <div className='flex w-full justify-start items-center p-3'>
          <div className='border rounded-xl shadow rounded w-full p-3 mt-3'>
            <h1 className='text-2xl font-bold'>About</h1>
            <div className='font-raleway text-lg py-4'>
              <ul className='grid grid-cols-1 gap-4'>
                <li
                  className={`${overview ? 'about-nav' : null}`}
                  onClick={handleNavToggle}
                >
                  Overview
                </li>
                <li
                  className={`${isActive ? 'about-nav' : null}`}
                  onClick={({ target }) => setIsActive(!isActive)}
                >
                  Places Lived
                </li>
                <li
                  className={`${isActive ? 'about-nav' : null}`}
                  onClick={({ target }) => setIsActive(!isActive)}
                >
                  Hobbies
                </li>
                <li
                  className={`${isActive ? 'about-nav' : null}`}
                  onClick={handleNavToggle}
                >
                  Details
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

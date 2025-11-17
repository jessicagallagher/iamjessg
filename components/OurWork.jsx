import Link from 'next/link';
import Image from 'next/image';
import { ourWorkWebsites, ourWorkCrmsDbs, ourWorkWebApps } from '../utils/data';

export default function OurWork() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 lg:px-10 px-4'>
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
        <p className='my-8 text-base md:text-lg text-justify'>
          We can build a custom website for you from the ground up. We use the
          latest technologies to build a responsive, mobile-friendly website
          with lightning-fast page load times. We also offer ongoing, as-needed
          maintenance. Looking to refresh your current website? Great! Send us
          your ideas.
        </p>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
          {ourWorkWebsites.map((project) => (
            <div key={project.projectName}>
              <a
                href={project.pageUrl}
                target='blank'
                rel='noopener noreferrer'
              >
                <img
                  className='aspect-3/2 w-full rounded-lg object-cover shadow drop-shadow-2xl'
                  src={project.imgUrl}
                  alt={`${project.projectName} thumbnail image`}
                />
              </a>
              <p className='font-bold text-base text-pinkDefault md:text-lg pt-8'>
                {project.projectName}
              </p>
              <p className='text-base md:text-lg'>
                {project.projectDescription}
              </p>
            </div>
          ))}
        </div>
        <hr className='mt-16 mx-auto' />
        <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl mt-16'>
          CRM and Database Solutions
        </h2>
        <p className='my-8 text-base md:text-lg text-justify'>
          Are you looking for a better way to manage and streamline your
          customer or donor data? We can build out a bespoke CRM to fit your
          needs—from sending mass emails to tracking budgets, we've got you
          covered. We can even integrate with services that you currently use so
          that you only have to remember one login and password.
        </p>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
          {ourWorkCrmsDbs.map((project) => (
            <div key={project.projectName}>
              <img
                className='aspect-3/2 w-full rounded-lg object-cover shadow drop-shadow-2xl'
                src={project.imgUrl}
                alt={`${project.projectName} thumbnail image`}
              />
              <p className='font-bold text-base text-pinkDefault md:text-lg pt-8'>
                {project.projectName}
              </p>
              <p className='text-base md:text-lg'>
                {project.projectDescription}
              </p>
            </div>
          ))}
        </div>
        <hr className='mt-16 mx-auto' />
        <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl mt-16'>
          Bespoke Web Applications
        </h2>
        <p className='my-8 text-base md:text-lg text-justify'>
          Do you have an idea for a web application? We can bring your idea to
          life building a unique, mobile-first web application with features such as admin
          panels, dashboards, appointment scheduling, and payment systems. Need more? We can also integrate a CRM and database for you to keep up with all of your clients and data.
        </p>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
          {ourWorkWebApps.map((project) => (
            <div key={project.projectName}>
              <img
                className='aspect-3/2 w-full rounded-lg object-cover shadow drop-shadow-2xl'
                src={project.imgUrl}
                alt={`${project.projectName} thumbnail image`}
              />
              <p className='font-bold text-base text-pinkDefault md:text-lg pt-8'>
                {project.projectName}
              </p>
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

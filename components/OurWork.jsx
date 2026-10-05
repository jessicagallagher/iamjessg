import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { track } from '@vercel/analytics/react';
import {
  ourWorkWebsites,
  ourWorkCrmsDbs,
  ourWorkWebApps,
  ourWorkPortfolios,
} from '../utils/data';

function ProjectCard({ project, onImageClick, showLink }) {
  const title = (
    <p className='font-bold text-base text-pinkDefault md:text-lg pt-8'>
      {project.projectName}
    </p>
  );

  return (
    <div>
      <img
        className='aspect-[16/9] w-full rounded-lg object-fill shadow drop-shadow-2xl cursor-pointer'
        src={project.imgUrl}
        alt={`${project.projectName} thumbnail image`}
        onClick={() => {
          onImageClick(project);
          track(`${project.projectName} thumbnail image clicked`);
        }}
      />
      {showLink ? (
        <a
          href={project.pageUrl}
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => {
            track(`${project.projectName} clicked`);
          }}
        >
          {title}
        </a>
      ) : (
        title
      )}
      <p className='text-base md:text-lg'>{project.projectDescription}</p>
    </div>
  );
}

function ProjectGrid({ projects, onImageClick, showLink = false }) {
  return (
    <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
      {projects.map((project) => (
        <ProjectCard
          key={project.imgUrl}
          project={project}
          onImageClick={onImageClick}
          showLink={showLink}
        />
      ))}
    </div>
  );
}

export default function OurWork() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

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
        <h2
          className='text-2xl font-semibold tracking-tight sm:text-3xl mt-16'
          id='webdev'
        >
          Website Design, Development, and Refresh
        </h2>
        <p className='my-8 text-base md:text-lg text-justify'>
          We can build a custom, SEO-optimized website for you from the ground
          up. We use the latest technologies to build a responsive,
          mobile-friendly website with lightning-fast page load times. We also
          offer ongoing, as-needed maintenance, and can either make periodic
          updates for you or give you control to make edits on your own. Looking
          to refresh your current website? Great! Send us your ideas.
        </p>
        <ProjectGrid
          projects={ourWorkWebsites}
          onImageClick={openModal}
          showLink
        />
        <hr className='mt-16 mx-auto' />
        <h2
          className='text-2xl font-semibold tracking-tight sm:text-3xl mt-16'
          id='portfolios'
        >
          Portfolio Websites for Creative Professionals
        </h2>
        <p className='my-8 text-base md:text-lg text-justify'>
          Are you an actor, artist, designer, photographer or other creative
          professional looking to show off your work? Break free from the annual
          fees and contracts of other website builders, and let us create a
          custom, unique portfolio that's SEO-optimized to appear in search
          results and drive visitors to your site. We are happy to maintain your
          site or give you total control of updates. Showcase all your hard work
          with a professional portfolio.
        </p>
        <ProjectGrid
          projects={ourWorkPortfolios}
          onImageClick={openModal}
          showLink
        />
        <hr className='mt-16 mx-auto' />
        <h2
          className='text-2xl font-semibold tracking-tight sm:text-3xl mt-16'
          id='crm-db'
        >
          CRM and Database Solutions
        </h2>
        <p className='my-8 text-base md:text-lg text-justify'>
          Are you looking for a better way to manage and streamline your
          customer or donor data? We can build out a bespoke CRM to fit your
          needs—from sending mass emails to tracking budgets, we've got you
          covered. We can even integrate with services that you currently use so
          that you only have to remember one login and password.
        </p>
        <ProjectGrid projects={ourWorkCrmsDbs} onImageClick={openModal} />
        <hr className='mt-16 mx-auto' />
        <h2
          className='text-2xl font-semibold tracking-tight sm:text-3xl mt-16'
          id='webapp'
        >
          Bespoke Web Applications
        </h2>
        <p className='my-8 text-base md:text-lg text-justify'>
          Do you have an idea for a web application? We can bring your idea to
          life building a unique, mobile-first web application with features
          such as admin panels, dashboards, appointment scheduling, and payment
          systems. Need more? We can also integrate a CRM and database for you
          to keep up with all of your clients and data.
        </p>
        <ProjectGrid projects={ourWorkWebApps} onImageClick={openModal} />
        {/* modal */}
        {isOpen && (
          <div
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='relative max-w-4xl max-h-full bg-white rounded-lg shadow-2xl overflow-hidden'
            >
              <button
                onClick={closeModal}
                className='absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200 hover:scale-110'
                aria-label='close image'
              >
                <XMarkIcon className='h-6 w-6 cursor-pointer' />
              </button>
              {/* image */}
              {selectedImage && (
                <div className='relative'>
                  <img
                    src={selectedImage.imgUrl}
                    alt='enlarged thumbnail of project'
                    className='w-full h-auto max-h-[90vh] object-contain border border-greenDefault rounded-lg'
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function About() {
  
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
              <p>Have you ever heard of Houma, Louisiana? Well--that's where I was born and raised. It's a small town about an hour southeast of New Orleans... so way down at the bottom of the boot! After attending LSU (Geaux Tigers) and freshly armed with a marketing degree, I slowly made my way up the East Coast. I lived in Washington, D.C. for 5 years and lived the consulting life at Gartner, working with Chief Communications Officers at Fortune 500 companies. After realizing that corporate life wasn't for me, I fulfilled a childhood dream and moved to NYC. Can you imagine that? From the bayou all the way to Brooklyn--Carroll Gardens, to be exact. I continued my career in consulting, working at various startups--mainly in the Ed Tech space. I worked very closely with the Software Engineers on my team which inspired me to learn how to code. I loved solving problems with technology, and that motivated me to continue learning on my own and take advantage of several volunteer opportunities that helped strengthen my skills. Like most people, my life changed when the pandemic hit. I decided to take a huge leap of faith and completely changed careers. I saw an opportunity to do what I loved while getting paid for it. I signed up for a 3-week coding course with SheCodes to test the waters--and that made me hungry for more. I got serious about learning and completed the Software Engineering Immersive program at General Assembly. It was the hardest--yet most rewarding thing that I've ever done. I also realized that since technology is always changing and evolving, I had a lifetime of learning ahead of me--and that excited me because I figured that I'd never be bored again!</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

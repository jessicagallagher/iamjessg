export default function About() {

  const hobbies = [
    {
      name: 'Running',
      subheading: `What I'm Running:`,
      description: `This year I'm running the NYC Half Marathon, the Shape Women's Half Marathon, the Big Sur Marathon, the Brooklyn Half Marathon, and the Berlin Marathon.`,
    },
    {
      name: 'Reading',
      subheading: `What I'm Reading:`,
      description: `Currently I'm reading Princess Margaret by Christopher Warwick and Eloquent Javascript by Marijn Haverbeke.`,
    },
    { name: 'Coding', subheading: `What I'm Coding:` },

    { name: 'My Two Cats', subheading: `Meet Wiz Khatlifa and Max Just Max` },
  ];
  
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
              <dl className='grid grid-cols-1 gap-y-4 sm:grid-cols-2'>
                {hobbies.map((hobby) => (
                  <div key={hobby.id}>
                    <dt className='font-semibold font-lato'>{hobby.name}</dt>
                    <dd>{hobby.subheading}</dd>
                    <dd className='mt-4'>{hobby.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className='font-raleway text-lg py-4'>
              <p>
                Did I mention that I was a runner?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

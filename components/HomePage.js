import Typewriter from 'typewriter-effect';

export default function HomePage() {
  return (
    <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <div className='bg-pink-light overflow-hidden shadow rounded-lg mt-10 lg:mt-20 z-20'>
        <div className='px-6 py-5'>
          <h1 className='font-bold text-black text-2xl sm:text-3xl lg:text-4xl'>
            <Typewriter
              options={{
                strings: ['Hello, world!'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className='font-raleway font-bold text-black text-4xl sm:text-5xl mt-3 sm:mt-6'>
            <h1>I'm Jessica.</h1>
            <h1 className='mt-3 sm:mt-6'>I build things.</h1>
          </div>
          <div className='font-raleway font-bold text-black text-2xl sm:text-2xl mt-3 sm:mt-6'>
            <h2>... including this portfolio—which is under construction and will be up and running in another week or so.</h2>
          </div>
          <div className='text-black text-md sm:text-lg lg:text-xl mt-3 sm:mt-6'>
            <p>
              I’m a Brooklyn-based full-stack software engineer and designer{' '}
              <span className='font-raleway text-xl lg:text-2xl font-bold lg:font-normal text-white'>
                (sometimes)
              </span>{' '}
              with a passion for creating user-friendly, engaging, and intuitive
              experiences. I enjoy creating applications that solve real-world
              problems and day-to-day challenges. I like single quotes and
              semi-colons—even when they play hide-and-seek.
            </p>
            <br />
            <p>
              Currently, I'm working as an independent consultant. While my
              clients span multiple industries, I specialize in the non-profit
              space. I have an extensive background working with non-profits in
              different capacities—including serving as a Board President. I
              understand the technological challenges that non-profits face,
              including the biggest one... tight budgets!
            </p>
            <hr className='my-3 sm:my-6 lg:my-8 mx-auto' />
            <p className='font-raleway'>
              Got an idea for an app? Need a polished website stat? Missing a
              CRM? How about a database? I'm booked through the end of the year,
              but I'd love for you to be my next client.{' '}
              <span className='text-xl sm:text-2xl filter brightness-110'>
                👩🏼‍💻
              </span>
            </p>
            <div className='text-center text-md mb-2 sm:mb-4 lg:mb-6 mt-4 sm:mt-6'>
              <a
                href='mailto:jess@iamjessg.com'
                className='inline-flex items-center px-4 py-2 text-black bg-transparent border-t-2 border-b-2 border-pink-default hover:border-green-default hover:tracking-extra-wide cursor-pointer'
              >
                <div className='-ml-1 mr-3 -mt-1 sm:-mt-2 h-5 w-5 text-xl sm:text-2xl z-50 filter contrast-125 drop-shadow-xl'>
                  ✉️
                </div>
                Say hi!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

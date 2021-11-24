import Typewriter from 'typewriter-effect';

export default function HomePage() {
	return (
    <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <div className='bg-pink-light overflow-hidden shadow sm:rounded-lg mt-28 z-20'>
        <div className='px-4 py-5 sm:p-6'>
          <h1 className='font-bold text-black text-4xl'>
            <Typewriter
              options={{
                strings: ['Hello, world!'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h1 className='font-raleway font-bold text-black text-6xl mt-6'>
            I'm Jessica.
          </h1>
          <h1 className='font-raleway font-bold text-black text-6xl mt-6'>
            I build things.
          </h1>
          <p className='text-black text-lg mt-6'>
            I’m a Brooklyn-based full-stack software engineer and designer{' '}
            <span className='font-raleway text-3xl text-white'>
              (sometimes)
            </span>{' '}
            with a passion for creating user-friendly, engaging, and intuitive
            experiences. I enjoy creating applications that solve real-world
            problems and day-to-day challenges. I like single quotes and
            semi-colons—even when they play hide-and-seek.
          </p>
          <p className='text-black text-lg mt-6'>
            Currently, I'm working as an independent consultant. While my
            clients span multiple industries, I specialize in the non-profit
            space. I have an extensive background working with non-profits in
            different capacities—including serving as a Board President. I
            understand the technological challenges that non-profits face,
            including the biggest one... tight budgets!
          </p>

          <hr className='mt-6 mx-auto' />

          <p className='text-black text-lg mt-6'>
            Got an idea for an app? Need a polished website stat? Missing a CRM?
            How about a database? I'm booked through the end of the year, but
            I'd love for you to be my next client.{' '}
            <span className='text-3xl filter brightness-110'>👩🏼‍💻</span>
            <div className='text-center text-xl mb-2 mt-8'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 text-black bg-transparent border-t-2 border-b-2 border-pink-default hover:border-green-default hover:tracking-extra-wide'
              >
                <div className='-ml-1 mr-3 -mt-2.5 h-5 w-5 text-2xl z-50 filter contrast-125 drop-shadow-xl'>
                  ✉️
                </div>
                Say hi!
              </button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

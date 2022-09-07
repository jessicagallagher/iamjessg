import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  
  return (
    <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <div className='overflow-hidden border border-pinkLight rounded-lg mt-10 lg:mt-20 z-20 mb-6 shadow-pinkDefault grey-gradient'>
        <div className='px-6 py-5'>
          <h1 className='text-softBlack text-4xl sm:text-5xl mt-3 sm:mt-6'>
            
Rethink your systems
          </h1>
          <h1 className='text-softBlack text-4xl sm:text-5xl mt-3 sm:mt-6'>
              Visualize your strategy

          </h1>
          <div className='text-softBlack text-md sm:text-lg lg:text-xl mt-3 sm:mt-6'>
            <p>
              Tech Meowt believes that everyone—regardless of technical
              knowledge and budget constraints—should have access to
              user-friendly, engaging, and intuitive web applications and
              experiences that they n eed to solve real-world problems and
              day-to-day challenges. Our clients span multiple industries, but
              we specialize in the non-profit sector. Our services include
              building secure databases, CRMs, and bespoke web applications. We
              also provide website design, development, onboarding, and
              maintenance.
            </p>
            {/* <p>
              I'm a Brooklyn-based full-stack software engineer and designer{' '}
              <span className=' text-xl lg:text-2xl font-extrabold'>
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
            </p> */}
            <hr className='my-3 sm:my-6 lg:my-8 mx-auto' />
            <p>
              Got an idea for an app? Need a polished website stat? Missing a
              CRM? How about a database? Drop us a line to schedule a
              consultation.{' '}
              <span className='text-xl sm:text-2xl filter brightness-110'>
                👩🏼‍💻
              </span>
            </p>
            <div className='text-center text-md mb-2 sm:mb-4 lg:mb-6 mt-4 sm:mt-6'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 text-softBlack bg-transparent border-t-2 border-b-2 border-pinkDefault hover:border-greenDefault hover:tracking-extraWide'
              >
                <div className='mr-2 h-5 w-5'>
                  <EnvelopeIcon />
                </div>
                <div>Say hi!</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

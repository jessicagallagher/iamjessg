export default function About() {
  return (
    <div className='relative overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              <h1 className='text-4xl tracking-tight font-raleway font-bold text-green-default sm:text-5xl md:text-6xl'>
                <span className='block xl:inline'>About Me</span>
              </h1>
              <p className='mt-3 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-lato text-black'>I'm originally from a small town in Louisiana called Houma. It's way down at the bottom of the boot and around 45 minutes from New Orleans. I started coding as a hobby. My first language was Ruby, and I only learned it because it was the new cool language at the time. Over the course of 5 years, I taught myself how to code basic websites and applications by volunteering with several non-profits, and after 14 years of working in various management consulting roles, I decided to make a career change so that I could finally do something that I was really passionate and excited about. So, here I am!</p>
              <p className='mt-3 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-lato text-black'>When I'm not writing code for work, I'm usually writing code for fun! You can also find me exploring Carroll Gardens, knitting things that I never finish, running, and reading. I'm a Yankees fan, Saints fan, and bleed purple and gold for my LSU Tigers.</p>
            </div>
          </main>
        </div>
      </div>

      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>

      </div>
      
    </div>
  )
}

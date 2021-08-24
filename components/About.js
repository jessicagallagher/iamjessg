export default function About() {
  return (
    <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <img className='mx-auto h-40 w-40 rounded-sm sm:w-1/3 sm:h-1/3 border border-pink-default mt-28' src='./images/jessica.jpg' alt='cartoon jessica' />
      
      <div className='relative sm:mt-10 md:mt-14 lg:mt-20 md:mx-5 lg:mx-8 xl:mx-12 text-justify'>
        <p className='mx-auto mt-3 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl font-lato text-black inline'>I'm originally from a small town in Louisiana called Houma. It's way down at the bottom of the boot and around 45 minutes from New Orleans. I started coding as a hobby. My first language was Ruby, and I only learned it because it was the new cool language at the time. Over the course of 5 years, I taught myself how to code basic websites and applications by volunteering with several non-profits, and after 14 years of working in various management consulting roles, I decided to make a career change so that I could finally do something that I was really passionate and excited about. So, here I am!</p>
        <br />
        <br />
        <p className='mx-auto mt-3 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl font-lato text-black inline'>What drew me to engineering was the feeling of solving one giant problem (Did I mention that I'm a Virgo?). There's no right or wrong way, and you can take multiple paths to get there. Languages are always evolving and changing--so the learning never stops. While I call myself a full-stack engineer, I enjoy front-end the most. Don't get me wrong--routing, databases, and all of the behind-the-scenes goodness is super cool, but I like the instant gratification feeling of hitting save, refreshing my browser, and seeing what I've built. Unless it's an error message. I don't like that!</p>
        <br />
        <br />
        <p className='mx-auto mt-3 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl font-lato text-black inline'>When I'm not writing code for work, I'm usually writing code for fun! You can also find me exploring Carroll Gardens, knitting things that I never finish, training for my next marathon, and reading. I'm a Yankees fan, Saints fan, and bleed purple and gold for my LSU Tigers.</p>
      </div>

      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <ul role='list' className='space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8 text-center text-3xl lg:text-xl font-raleway'>
            <li className='py-8 px-6 bg-black xl:px-10 rounded-lg'>
              <h1 className='text-white mb-5'>What I'm Listening To:</h1>
              <iframe src='https://open.spotify.com/embed/playlist/7p1xmOvf52aqR1OVDY8yRE?theme=0' width='100%' height='380' frameBorder='0' allowtransparency='true' allow='encrypted-media'></iframe>
            </li>
            <li className='py-8 px-6 bg-margaret-cream xl:px-10 rounded-lg'>
              <h1 className='text-black mb-5'>What I'm Reading:</h1>
              <img className='mx-auto' src='./images/princess-margaret.jpg' alt='cover of book about princess margaret' />
            </li>
            <li className='py-8 px-6 bg-marathon-blue xl:px-10 rounded-lg'>
              <h1 className='text-white mb-8'>What I'm Training For:</h1>
              <img className='mx-auto' src='./images/nyc-marathon.jpg' alt='cover of book about princess margaret' />
            </li>
          </ul>

        </div>

      </div>
        
      
      
    </div>)
}

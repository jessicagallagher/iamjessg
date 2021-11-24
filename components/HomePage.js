import Typewriter from 'typewriter-effect';
import { MailIcon } from '@heroicons/react/solid';

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
						<span className='font-raleway text-3xl text-white'>(sometimes)</span>{' '}
						with a passion for creating user-friendly, engaging, and intuitive
						experiences. I enjoy creating applications that solve real-world problems and day-to-day challenges. I like single quotes and semi-colons—even when they
						play hide-and-seek.
					</p>
					<p className='text-black text-lg mt-6'>
						Currently, I'm working as an independent consultant. While my clients span multiple industries, I specialize in the non-profit space. My extensive background working with non-profits in different capacities—including serving as a Board President. I'm familiar with the technological challenges that non-profits face, including the biggest one... tight budgets!
					</p>

					<hr className='mt-6 mx-auto' />

					<p className='text-black text-lg mt-6'>
						Got an idea for an app? Need a polished website stat? Missing a CRM? How about a database? I'm booked through the end of the year, but I'd love for you to be my next client.{' '}
						<span className='text-3xl'>👩🏼‍💻</span>
					</p>
				</div>
				<div className='text-center mb-6'>
					<button
						type="button"
						className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<div className='-ml-1 mr-3 -mt-2.5 h-5 w-5 text-2xl'>
							👋
						</div>
						Say hi!
					</button>
				</div>

			</div>
		</div>
	)
}

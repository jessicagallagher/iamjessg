import { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import Game from './Game.js'

export default function HomePage() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <div className='bg-pink-light overflow-hidden shadow sm:rounded-lg mt-28 z-20'>
        <div className='px-4 py-5 sm:p-6'>
          <h1 className='font-lato font-bold text-black text-4xl'>
            <Typewriter
              options={{
                strings: ['Hello, world!'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h1 className='font-raleway font-bold text-black text-6xl mt-6'>I'm Jessica.</h1>
          <h1 className='font-raleway font-bold text-black text-6xl mt-6'>I build things.</h1>
          <p className='font-lato text-black text-lg mt-6'>I’m a Brooklyn-based full-stack software engineer with a passion for creating user-friendly and intuitive applications. I like single quotes and semi-colons—even when they play hide-and-seek. If necessary, I can rap “Starships” by Nicki Minaj in its entirety.</p>
        </div>
      </div>

      <div className='relative mt-20'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-green-light' />
        </div>
      
        <div className='relative flex justify-center'>
          <span className='px-3 bg-white text-4xl font-raleway text-black'>Here's a thing that I built.</span>
        </div>
      </div>

      <Game />
    </div>
  )
}
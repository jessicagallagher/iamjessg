import { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import { useSpring, animated as a } from 'react-spring'

export default function HomePage() {
  const [options, setOptions] = useState(null)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {

  }, []);





  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <div className='bg-pink-light overflow-hidden shadow sm:rounded-lg mt-28'>
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

      <div className='bg-white overflow-hidden mt-8'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='font-lato font-bold text-black text-xl text-center'>High Score: {highScore}</h2>
          {options === null ? (
            <>
              <span className='relative z-0 flex justify-center rounded-md mt-8'>
                <button onClick={() => setOptions(12)} type='button' className='relative inline-flex items-center px-4 py-2 rounded-l-md border border-black bg-white text-sm font-medium text-black hover:bg-green-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-default focus:border-green-default'>
                  Easy
                </button>
                <button onClick={() => setOptions(18)} type='button' className='-ml-px relative inline-flex items-center px-4 py-2 border border-black bg-white text-sm font-medium text-black hover:bg-yellow-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500'>
                  Medium
                </button>
                <button onClick={() => setOptions(24)} type='button' className='-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-black bg-white text-sm font-medium text-black hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500'>
                  Hard
                </button>
              </span>
            </>
          ) : (
            <>
          <span className='relative z-0 flex justify-center rounded-md mt-8'>
          <button onClick={() => {
            const prevOptions = options
            setOptions(null)
            setTimeout(() => {
              setOptions(prevOptions)
            }, 5)
          }} type='button' className='relative inline-flex items-center px-4 py-2 rounded-l-md border border-black bg-white text-sm font-medium text-black hover:bg-green-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-default focus:border-green-default'>
            Start Over
          </button>
          <button onClick={() => setOptions(null)} type='button' className='-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-black bg-white text-sm font-medium text-black hover:bg-green-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-default focus:border-green-default'>
            Main Menu
          </button>
          </span>
          </>
          )}
        </div>
      </div>

      {options ? (
        <MemoryGame
        options={options}
        setOptions={setOptions}
        highScore={highScore}
        setHighScore={setHighScore}
        />
      ) : (
        <h2 className='font-lato font-bold text-black text-xl text-center mt-1'>Pick your poison <svg className='inline' width='24' height='24' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='#f05c85' d='M12 0l8 9h-6v15h-4v-15h-6z'/></svg> to begin!</h2>
      )}
    </div>
  )
}

function MemoryGame({options, setOptions, highScore, setHighScore}) {
  const [game, setGame] = useState([])
  const [flippedCount, setFlippedCount] = useState(0)
  const [flippedIndexes, setFlippedIndexes] = useState([])

  const colors = [
    '#ecdb54',
    '#e34132',
    '#6ca0dc',
    '#944743',
    '#dbb2d1',
    '#ec9787',
    '#00a68c',
    '#645394',
    '#6c4f3d',
    '#ebe1df',
    '#bc6ca7',
    '#bfd833',
  ]

  useEffect(() => {
    const newGame = []
    for (let i = 0; i < options / 2; i++) {
      const firstOption = {
        id: 2 * i,
        colorId: i,
        color: colors[i],
        flipped: false,
      }
      const secondOption = {
        id: 2 * i + 1,
        colorId: i,
        color: colors[i],
        flipped: false,
      }

      newGame.push(firstOption)
      newGame.push(secondOption)
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5)
    setGame(shuffledGame)
  }, [])

  useEffect(() => {
    // Loads when the game variable changes
  }, [game])

  if (flippedIndexes.length === 2) {
    // Runs if two cards have been flipped
  }

  if (game.length === 0) return <div>loading...</div>
  else {
    return (
      <div id="cards">
        {game.map((card, index) => (
          <div className="card" key={index}>
            <Card
              id={index}
              color={card.color}
              game={game}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              flippedIndexes={flippedIndexes}
              setFlippedIndexes={setFlippedIndexes}
            />
          </div>
        ))}
      </div>
    )
  }
}

function Card(props) {
  return <div>i'm a card</div>
}
import { useState, useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring'

export default function Game() {
  const [options, setOptions] = useState(null);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    // loads when game starts
  }, []);



  return (
    <div className='text-center'>
      <h1 className='font-lato font-bold text-pink-default text-xl mt-6'>The Single Quote, Semi-Colon, Nicki Minaj Memory Game</h1>
      <h2 className='font-raleway mt-3 font-bold text-lg'>High Score: {highScore}</h2>
      
      
        <div>
          {options === null ? (
            <>
              <span className='relative z-0 flex justify-center rounded-md mt-8'>
              <button onClick={() => setOptions(12)} type='button' className='relative inline-flex items-center px-4 py-2 rounded-l-md border border-black bg-white text-sm font-medium text-black hover:bg-green-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-default focus:border-green-default'>Easy</button>
              <button onClick={() => setOptions(18)} type='button' className='-ml-px relative inline-flex items-center px-4 py-2 border border-black bg-white text-sm font-medium text-black hover:bg-yellow-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500'>Medium</button>
                <button onClick={() => setOptions(24)} type='button' className='-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-black bg-white text-sm font-medium text-black hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500'>Hard</button>
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
                <button onClick={() => setOptions(null)} type='button' className='-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-black bg-white text-sm font-medium text-black hover:bg-green-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-default focus:border-green-default'>Main Menu</button>
                </span>
              </>
          )}
      </div>
      
      {options ? (
        <MemoryGame
          options={options}
          setOptions={setOptions}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      ) : (
          <h2 className='font-lato font-bold text-black text-xl text-center mt-4'>Pick your poison <svg className='inline' width='24' height='24' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='#f05c85' d='M12 0l8 9h-6v15h-4v-15h-6z'/></svg> to begin.</h2>
      )}
    </div>
  )
}

function MemoryGame({ options, setOptions, highScore, setHighScore }) {
  const [game, setGame] = useState([]);
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  const images = [
    './images/game-images/single-quote-1.jpg',
    './images/game-images/single-quote-2.jpg',
    './images/game-images/single-quote-3.png',
    './images/game-images/single-quote-4.png',
    './images/game-images/semi-colon-1.png',
    './images/game-images/semi-colon-2.png',
    './images/game-images/semi-colon-3.png',
    './images/game-images/semi-colon-4.jpg',
    './images/game-images/nicki-minaj-1.jpg',
    './images/game-images/nicki-minaj-2.jpg',
    './images/game-images/nicki-minaj-3.jpg',
    './images/game-images/nicki-minaj-4.jpg',
  ]

  useEffect(() => {
    const newGame = []
    for (let i = 0; i < options / 2; i++) {
      const firstOption = {
        id: 2 * i,
        imageId: i,
        image: images[i],
        flipped: false,
      }
      const secondOption = {
        id: 2 * i + 1,
        imageId: i,
        image: images[i],
        flipped: false,
      }

      newGame.push(firstOption)
      newGame.push(secondOption)
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5)
    setGame(shuffledGame)
  }, []);

  useEffect(() => {
    // loads when game variables change
  }, [game]);

  if (flippedIndexes.length === 2) {
    // runs if two cards have been flipped
  }

  if (game.length === 0) return <div>Loading...</div>
  else {
    return (
      <div className='my-0 mx-auto flex flex-wrap'>
        {game.map((card, index) => (
          <div className='w-40 h-40 mb-5' key={index}>
            <Card
              id={index}
              image={card.image}
              game={game}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              flippedIndexes={flippedIndexes}
            />
          </div>
        ))}
      </div>
    )
  }  
}

function Card({
  id,
  image,
  game,
  flippedCount,
  setFlippedCount,
  flippedIndexes,
  setFlippedIndexes,
}) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0} deg)`,
    config: {mass: 5, tension: 500, friction: 80},
  })

  useEffect(() => {
    console.log('Flipped Indexes Changed')
  }, [flippedIndexes])

  const onCardClick = () => {
    console.log('Card Clicked')
    set(state => state)
  }

  return (
    <div onClick={onCardClick}>
      <a.div
        className='absolute cursor-pointer bg-cover bg-blue-300'
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      />
      <a.div
        className='absolute cursor-pointer bg-cover bg-purple-400'
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          background: image,
        }}
      />
    </div>
  )
}

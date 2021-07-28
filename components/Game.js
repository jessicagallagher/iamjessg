import { useState, useEffect } from 'react'
import { useSpring, animated as a } from 'react-spring'
import styles from '../styles/game.module.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Game() {
  const [options, setOptions] = useState(null)
  const [highScore, setHighScore] = useState(0)
  
  useEffect(() => {
    const json = localStorage.getItem('memorygamehighscore')
    const savedScore = JSON.parse(json)
    if(savedScore) {
      setHighScore(savedScore)
    }
  }, [])
  
  return (
    <div className='text-center'>
			<h1 className='font-lato font-bold text-pink-default text-xl mt-6'>
				The Single Quote, Semi-Colon, Nicki Minaj Memory Game
			</h1>
			<h2 className='font-raleway mt-3 font-bold text-lg'>
				High Score: {highScore}
			</h2>

			<div>
				{options === null ? (
					<>
						<span className='relative z-0 flex justify-center rounded-md mt-8'>
							<button
								onClick={() => setOptions(12)}
								type='button'
								className='relative inline-flex items-center px-4 py-2 rounded-l-md border border-black bg-white text-sm font-medium text-black hover:bg-green-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-default focus:border-green-default'>
								Easy
							</button>
							<button
								onClick={() => setOptions(18)}
								type='button'
								className='-ml-px relative inline-flex items-center px-4 py-2 border border-black bg-white text-sm font-medium text-black hover:bg-yellow-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500'>
								Medium
							</button>
							<button
								onClick={() => setOptions(24)}
								type='button'
								className='-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-black bg-white text-sm font-medium text-black hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500'>
								Hard
							</button>
						</span>
					</>
				) : (
					<>
						<span className='relative z-0 flex justify-center rounded-md mt-8'>
							<button
								onClick={() => {
									const prevOptions = options
									setOptions(null)
									setTimeout(() => {
										setOptions(prevOptions)
									}, 5)
								}}
								type='button'
								className='relative inline-flex items-center px-4 py-2 rounded-l-md border border-black bg-white text-sm font-medium text-black hover:bg-green-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-default focus:border-green-default'>
								Start Over
							</button>
							<button
								onClick={() => setOptions(null)}
								type='button'
								className='-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-black bg-white text-sm font-medium text-black hover:bg-green-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-default focus:border-green-default'>
								Main Menu
							</button>
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
				<h2 className='font-lato font-bold text-black text-xl text-center mt-4'>
					Pick your poison{' '}
					<svg
						className='inline'
						width='24'
						height='24'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'>
						<path fill='#f05c85' d='M12 0l8 9h-6v15h-4v-15h-6z' />
					</svg>{' '}
					to begin.
				</h2>
			)}
		</div>
  )
}

function MemoryGame({
  options,
  setOptions,
  highScore,
  setHighScore
}) {
  const [game, setGame] = useState([])
  const [flippedCount, setFlippedCount] = useState(0)
  const [flippedIndexes, setFlippedIndexes] = useState([])
  const MySwal = withReactContent(Swal)
  const images = [
		'./images/game-images/single-quote-1.jpg',
		'./images/game-images/semi-colon-1.png',
		'./images/game-images/nicki-minaj-1.jpg',
		'./images/game-images/single-quote-2.jpg',
		'./images/game-images/semi-colon-2.png',
		'./images/game-images/nicki-minaj-2.jpg',
		'./images/game-images/single-quote-3.png',
		'./images/game-images/semi-colon-3.png',
		'./images/game-images/nicki-minaj-3.jpg',
		'./images/game-images/single-quote-4.png',
		'./images/game-images/semi-colon-4.jpg',
		'./images/game-images/nicki-minaj-4.jpg',
	]
  
  useEffect(() => {
    const newGame = []
    for(let i = 0; i < options / 2; i++) {
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
  }, [])
  
  useEffect(() => {
    const finished = !game.some(card => !card.flipped)
    if(finished && game.length > 0) {
      setTimeout(() => {
        const bestPossible = game.length
        let multiplier
        
        if(options === 12) {
          multiplier = 5
        } else if(options === 18) {
          multiplier = 2.5
        } else if(options === 24) {
          multiplier = 1
        }
        
        const pointsLost = multiplier * (0.66 * flippedCount -
          bestPossible)
        
        let score
        if(pointsLost < 100) {
          score = Math.round(100 - pointsLost)
        } else {
          score = 0
        }
        
        if(score > highScore) {
          setHighScore(score)
          const json = JSON.stringify(score)
          localStorage.setItem('memorygamehighscore', json)
        }
        
        const newGame = MySwal.fire({
          title: <h1>You win! 🎉</h1>,
          text: `Your score is ${score}. Keep playing to try to beat your High Score... or do what you came here for, and check out the rest of my portfolio! 😘`,
          width: 600,
          padding: '3em',
          allowOutsideClick: true,
          allowEscapeKey: true,
          confirmButtonText: 'COOL!',
          confirmButtonColor: '#3085d6',
          showCancelButton: false,
          backdrop: `
            rgba(0,0,123,0.4)
            url("./images/nyan-cat.gif")
            left top
            no-repeat
          `,
        }).then(function() {
          const gameLength = game.length
          setOptions(null)
          setTimeout(() => {
            setOptions(gameLength)
          }, 5)
        }, function(dismiss) {
          setOptions(null)
        })
      }, 500)
    }
  }, [game])
  
  if(flippedIndexes.length === 2) {
    const match =
      game[flippedIndexes[0]].imageId === game[flippedIndexes[1]]
      .imageId
    
    if(match) {
      const newGame = [...game]
      newGame[flippedIndexes[0]].flipped = true
      newGame[flippedIndexes[1]].flipped = true
      setGame(newGame)
      
      const newIndexes = [...flippedIndexes]
      newIndexes.push(false)
      setFlippedIndexes(newIndexes)
    } else {
      const newIndexes = [...flippedIndexes]
      newIndexes.push(true)
      setFlippedIndexes(newIndexes)
    }
  }
  
  if(game.length === 0) return <div>Loading...</div>
  else {
    return (
      <div className={styles.container}>
				<div className={styles.cards}>
					{game.map((card, index) => (
						<div className={styles.card} key={index}>
							<Card
								id={index}
								image={card.image}
								game={game}
								flippedCount={flippedCount}
								setFlippedCount={setFlippedCount}
								flippedIndexes={flippedIndexes}
								setFlippedIndexes={setFlippedIndexes}
							/>
						</div>
					))}
				</div>
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
  const {
    transform,
    opacity
  } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: {
      mass: 5,
      tension: 500,
      friction: 80
    },
  })
  
  useEffect(() => {
    if(flippedIndexes[2] === true && flippedIndexes.indexOf(
        id) > -1) {
      setTimeout(() => {
        set(state => !state)
        setFlippedCount(flippedCount + 1)
        setFlippedIndexes([])
      }, 1000)
    } else if(flippedIndexes[2] === false && id === 0) {
      setFlippedCount(flippedCount + 1)
      setFlippedIndexes([])
    }
  }, [flippedIndexes])
  
  const onCardClick = () => {
    if(!game[id].flipped && flippedCount % 3 === 0) {
      set(state => !state)
      setFlippedCount(flippedCount + 1)
      const newIndexes = [...flippedIndexes]
      newIndexes.push(id)
      setFlippedIndexes(newIndexes)
    } else if(
      flippedCount % 3 === 1 &&
      !game[id].flipped &&
      flippedIndexes.indexOf(id) < 0
    ) {
      set(state => !state)
      setFlippedCount(flippedCount + 1)
      const newIndexes = [...flippedIndexes]
      newIndexes.push(id)
      setFlippedIndexes(newIndexes)
    }
  }
  
  return (
    <div onClick={onCardClick}>
			<a.div
				className={styles.back}
				style={{
					opacity: opacity.interpolate(o => 1 - o),
					transform,
				}}
			/>
			<a.div
				className={styles.front}
				style={{
					opacity,
					transform: transform.interpolate(t => `${t} rotateX(180deg)`),
					background: `url(${image})`,
				}}
			/>
		</div>
  )
}

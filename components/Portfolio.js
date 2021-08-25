import { useState } from 'react'
import { useTrail, animated as a } from '@react-spring/web'

const items = ["P", "O", "R", "T", "F", "O", "L", "I", "O"];
const config = { mass: 5, tension: 2000, friction: 200 };

export default function Portfolio() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });




  return (
    <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <div className='relative w-full h-full overflow-hidden cursor-pointer flex justify-items-center items-center'>

      </div>
    </div>
  )
}

// .trails - main {
//   position: relative;
//   width: 100 % ;
//   height: 100 % ;
//   overflow: hidden;
//   cursor: pointer;
//   display: flex;
//   justify - content: center;
//   align - items: center;
// }

import img from '../public/images/wiz-max.jpg'
import Image from 'next/image';

export default function Cats() {

  return (
    <dt className='font-semibold '>
      My Two Cats
      <div className='font-normal py-2'>Meet Wiz Khatlifa + Max Just Max</div>
      <div className='mx-auto mt-2'>
        <Image
          src={img}
          width={250}
          height={250}
        />
      </div>
    </dt>
  );
}

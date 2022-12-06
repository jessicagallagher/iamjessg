import { useState } from 'react';
import Image from 'next/image';
// import { app, database } from '../firebase/firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore'

// const dbInstance = collection(database, 'posts');

export default function BlogHome() {
  // const [posts, setPosts] = useState([])
  const [categoryColor, setCategoryColor] = useState('')

  // useEffect(() => {
  //   getPosts();
  // }, [])

  // const getPosts = () => {
  //   getDocs(dbInstance)
  //     .then((data) => {
  //       setPosts(data.docs.map((item) => {
  //       return { ...item.data(), id: item.id }
  //     }))
  //   })
  // };

  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 px-2 sm:px-10 xl:px-48'>
      <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none mx-auto text-center'>
        <h2 className='text-2xl font-thin tracking-tight sm:text-4xl'>Blog</h2>
        <p className='mt-3 text-base sm:text-lg lg:text-xl sm:mt-4'>
          Keep up with our latest news, products, + thoughts on technology.
        </p>
      </div>
      <div className='hr mx-auto my-8'></div>
      <div className='flex flex-row items-center'>
        <div className='pt-4 pr-24'>
          <Image
            src={
              'https://images.pexels.com/photos/9828302/pexels-photo-9828302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            width='300'
            height='300'
            className='rounded-xl shadow-2xl'
          />
        </div>
        <div className='grid gap-16 pt-4 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 sm:text-center lg:text-left'>
          <div>
            <div>
              <span className='inline-flex items-center rounded-full font-bold text-lg'>
                Category
              </span>
            </div>
            <div className='mt-4 block'>
              <p className='text-2xl font-semibold'>title</p>
            </div>
            <div className='mt-4 block'>
              <p className='text-lg'>teaser</p>
            </div>
            <div className='mt-6 flex items-center'>
              <div className='sm:mx-auto lg:mx-0'>
                <div className='flex space-x-1 text-sm text-gray-500'>
                  Date &middot; Reading Time read
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* <span
  className={`inline-flex items-center px-3 py-0.5 rounded-full font-bold ${
    post.postCategory === 'Cat1'
      ? 'green-category'
      : post.postCategory === 'Cat2'
      ? 'pink-category'
      : post.postCategory === 'Cat3'
      ? 'blue-category'
      : ''
  } `}
>
  {post.postCategory}
</span>; */}

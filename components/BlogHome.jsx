import { useState, useEffect } from 'react';
import { app, database } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore'

const dbInstance = collection(database, 'posts');

export default function BlogHome() {
  const [posts, setPosts] = useState([])
  const [categoryColor, setCategoryColor] = useState('')

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = () => {
    getDocs(dbInstance)
      .then((data) => {
        setPosts(data.docs.map((item) => {
        return { ...item.data(), id: item.id }
      }))
    })
  };

  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 px-2 sm:px-10 xl:px-48'>
      <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none mx-auto text-center'>
        <h2 className='text-2xl font-thin tracking-tight sm:text-4xl'>Blog</h2>
        <p className='mt-3 text-base sm:text-lg lg:text-xl sm:mt-4'>
          Keep up with our latest news, products, + thoughts on technology.
        </p>
      </div>
      <div className='hr mx-auto my-8'></div>
      <div className='grid gap-16 pt-4 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12 sm:text-center lg:text-left'>
        {posts.map((post) => (
          <div key={post.postTitle}>
            <div>
              <span
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
              </span>
            </div>
            <div className='mt-4 block'>
              <p className='text-lg font-semibold'>
                {post.postTitle}
              </p>
            </div>
            <div className='mt-4 block'>
              <p className='text-base'>
                {post.postTeaser}
              </p>
            </div>
            <div className='mt-6 flex items-center'>
                <div className='sm:mx-auto lg:mx-0'>
                  <div className='flex space-x-1 text-xs text-gray-500'>
                    {post.postDate} &middot; {post.postReadingTime} read
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { app, database } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore'

const dbInstance = collection(database, 'posts');

export default function BlogHome() {
  const [posts, setPosts] = useState([])

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
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 lg:px-10 xl:px-48'>
        <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none mx-auto text-center'>
          <h2 className='text-2xl font-thin tracking-tight sm:text-4xl'>
            Blog
          </h2>
          <p className='mt-3 text-base md:text-lg lg:text-xl sm:mt-4'>
            Keep up with our latest news, products, + thoughts on technology.
          </p>
      </div>
      <div className='hr mx-auto my-8'></div>
        <div className='mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
          {posts.map((post) => (
            <div key={post.postTitle}>
              {/* <div>
                <a href={post.category.href} className='inline-block'>
                  <span
                  >
                    {post.category.name}
                  </span>
                </a>
              </div> */}
              <div className='mt-4 block'>
                <p className='text-xl font-semibold text-gray-900'>
                  {post.postTitle}
                </p>
              </div>
              {/* <div className='mt-6 flex items-center'>
                <div className='flex-shrink-0'>
                  <a href={post.author.href}>
                    <span className='sr-only'>{post.author.name}</span>
                    <img
                      className='h-10 w-10 rounded-full'
                      src={post.author.imageUrl}
                      alt=''
                    />
                  </a>
                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-900'>
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <div className='flex space-x-1 text-sm text-gray-500'>
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden='true'>&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      
    </div>
  );
}

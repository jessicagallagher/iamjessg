import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import dynamic from 'next/dynamic';
import { app, database } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css';

const dbInstance = collection(database, 'posts');

export default function AddPost() {
  const [date, setDate] = useState(new Date());
  const [postTitle, setPostTitle] = useState('');
  const [postCategory, setPostCategory] = useState('');
  const [postDate, setPostDate] = useState();
  const [postReadingTime, setPostReadingTime] = useState('');
  const [postTeaser, setPostTeaser] = useState('');

  const savePost = (e) => {
    e.preventDefault()

    addDoc(dbInstance, {
      postTitle: postTitle,
      postCategory: postCategory,
      postDate: postDate,
      postReadingTime: postReadingTime,
      postTeaser: postTeaser
    });
  }

  return (
    <div className='w-full mx-auto mt-4 sm:mt-10 lg:mt-20 lg:px-4'>
      <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none mx-auto text-center'>
        <h2 className='text-2xl font-thin tracking-tight sm:text-4xl'>
          Add new post
        </h2>
      </div>
      <form className='space-y-8 divide-y divide-gray-200' onSubmit={savePost}>
        <div className='space-y-8 divide-y divide-gray-200'>
          <div className='my-10 flex justify-center gap-x-8'>
            <div className='w-64'>
              <label
                htmlFor='region'
                className='block text-base font-bold text-gray-700'
              >
                Title
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='postTitle'
                  id='postTitle'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
              </div>
            </div>

            <div className='w-32'>
              <label
                htmlFor='country'
                className='block text-base font-bold text-gray-700'
              >
                Category
              </label>
              <div className='mt-1'>
                <select
                  id='category'
                  name='category'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  onChange={(e) => setPostCategory(e.target.value)}
                  value={postCategory}
                >
                  <option>Cat1</option>
                  <option>Cat2</option>
                  <option>Cat3</option>
                </select>
              </div>
            </div>

            <div className='w-28'>
              <label
                htmlFor='country'
                className='block text-base font-bold text-gray-700'
              >
                Date
              </label>
              <div className='mt-1'>
                <DatePicker
                  selected={date}
                  onChange={(date) => setPostDate(date)}
                  allowSameDay={true}
                  value={postDate}
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>

            <div className='w-32'>
              <label
                htmlFor='region'
                className='block text-base font-bold text-gray-700'
              >
                Reading Time
              </label>
              <div className='mt-1'>
                <div className='flex flex-row'>
                  <input
                    type='text'
                    name='region'
                    id='region'
                    autoComplete='address-level1'
                    className='block w-full rounded-l-md rounded-r-none border-gray-300 border-r-0 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    onChange={(e) => setPostReadingTime(e.target.value)}
                    value={postReadingTime}
                  />

                  <span className='inline-flex items-center rounded-r-md border border-gray-300 bg-white px-3 text-gray-500 sm:text-sm'>
                    minutes
                  </span>
                </div>
              </div>
            </div>

            <div className='w-1/3'>
              <label
                htmlFor='region'
                className='block text-base font-bold text-gray-700'
              >
                Teaser
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='region'
                  id='region'
                  autoComplete='address-level1'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  onChange={(e) => setPostTeaser(e.target.value)}
                  value={postTeaser}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='pt-5'>
          <div className='flex justify-end'>
            <button
              type='button'
              className='rounded-md border border-gray-300 bg-white py-2 px-4 text-base font-bold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-bold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <div className='flex justify-center m-10'>
        <ReactQuill className='w-full h-96' />
      </div>
    </div>
  );
}

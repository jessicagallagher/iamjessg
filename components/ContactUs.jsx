import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactUs() {
  const [clicked, setClicked] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('sending');

    setClicked(true);

    await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        fullName: fullName,
        phone: phone,
        message: message,
      }),
    });
    setEmail('');
    setFullName('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 bg-white'>
      <div className='w-full' aria-hidden='true'>
        <img
          src='https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
          className='w-full h-48 lg:h-96 object-cover'
        />
      </div>
      <div className='relative bg-white'>
        <div className='absolute inset-0'>
          <div className='absolute inset-y-0 left-0 w-1/2' />
        </div>
        <div className='relative mx-auto max-w-7xl lg:grid lg:grid-cols-5'>
          <div className='py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
            <div className='mx-auto max-w-lg'>
              <h2 className='text-5xl font-bold tracking-tight sm:text-3xl text-pinkDefault'>
                Get in touch
              </h2>
              <dl className='mt-8 text-base'>
                <div className='mt-6'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd className='flex'>
                    <PhoneIcon
                      className='h-6 w-6 flex-shrink-0'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>+1 (646) 926-4775</span>
                  </dd>
                </div>
                <div className='mt-3'>
                  <dt className='sr-only'>Email</dt>
                  <dd className='flex'>
                    <EnvelopeIcon
                      className='h-6 w-6 flex-shrink-0'
                      aria-hidden='true'
                    />
                    <a href='mailto:hello@techmeowt.com'>
                      <span className='ml-3'>hello@techmeowt.com</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className='bg-white px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
            <div className='mx-auto max-w-lg lg:max-w-none'>
              <form
                onSubmit={handleSubmit}
                className='grid grid-cols-1 gap-y-6'
              >
                <div>
                  <label htmlFor='full-name' className='sr-only'>
                    Full name
                  </label>
                  <input
                    type='text'
                    name='fullName'
                    id='fullName'
                    autoComplete='name'
                    className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm'
                    placeholder='Full name'
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm'
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor='phone' className='sr-only'>
                    Phone
                  </label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    autoComplete='tel'
                    className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm'
                    placeholder='Phone (optional)'
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor='message' className='sr-only'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm'
                    placeholder='Message'
                    required
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                  />
                </div>
                {!clicked && (
                  <div>
                    <button
                      type='submit'
                      className='inline-flex justify-center rounded-md border border-pinkDefault py-3 px-6 text-base font-semibold shadow-xl hover:-translate-y-2 hover:translate-x-2 rounded-3xl'
                    >
                      Submit
                    </button>
                  </div>
                )}
                {clicked && (
                  <div>
                    <button className='cursor-not-allowed inline-flex justify-between rounded-md border border-pinkDefault py-3 px-6 text-base font-semibold shadow-xl rounded-3xl'>
                      Thanks <span className='ml-1'>✔️</span>
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

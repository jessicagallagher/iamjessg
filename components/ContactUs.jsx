import { useState, useRef } from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const recaptchaRef = useRef();
  const [clicked, setClicked] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [recaptchaStatus, setRecaptchaStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('');

    const token = recaptchaRef.current.getValue();

    if (!token) {
      setRecaptchaStatus('Please complete the reCAPTCHA');
      toast.error('Please complete the reCAPTCHA');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: process.env.TO_EMAIL,
          subject: process.env.EMAIL_SUBJECT,
          from: process.env.FROM_EMAIL,
          replyTo: email,
          html: `
          <h2><strong>New Contact Form Submission</strong></h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
          `,
          text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
          recaptchaToken: token,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setClicked(true);
        setStatus('Email sent!');
        toast.success('Email sent!');
        setRecaptchaStatus('reCAPTCHA submitted');
        recaptchaRef.current.reset();
      } else {
        setStatus('Failed to send email. Please try again.');
        toast.error(`Error sending email. Please try again.`);
        setRecaptchaStatus(result.message || 'Error submitting reCAPTCHA');
        toast.error(`Error submitting reCAPTCHA. Please try again.`);
        setClicked(false);
      }
    } catch (error) {
      console.error(`Error: ${error}`);
      setStatus('An error occurred. Please try again.');
      setRecaptchaStatus('An error occurred. Please try again');
    } finally {
      setEmail('');
      setFullName('');
      setPhone('');
      setMessage('');
    }
  };

  const phoneNumberAutoFormat = (phoneNumber) => {
    const number = phoneNumber.trim().replace(/[^0-9]/g, '');
    if (number.length < 4) return number;
    if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, '($1) $2');
    if (number.length < 11)
      return number.replace(/(\d{3})(\d{3})(\d{1})/, '($1) $2-$3');
    return number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  };

  const handleChange = (e) => {
    const targetValue = phoneNumberAutoFormat(e.target.value);
    setPhone(targetValue);
  };

  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 bg-white'>
      <div className='w-full' aria-hidden='true'>
        <img
          src='https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='generic skyline image'
          className='w-full h-48 lg:h-96 object-cover rounded-lg'
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
                    onChange={handleChange}
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
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />
                {!clicked && (
                  <div>
                    <button
                      type='submit'
                      className='inline-flex justify-center rounded-md border border-pinkDefault py-3 px-6 text-base font-semibold shadow-xl hover:bg-pinkDefault hover:text-white rounded-3xl'
                    >
                      Submit
                    </button>
                  </div>
                )}
                {clicked && (
                  <div>
                    <button
                      disabled
                      className='cursor-not-allowed inline-flex justify-between rounded-md border border-pinkDefault py-3 px-6 text-base font-semibold shadow-xl rounded-3xl'
                    >
                      Thanks <span className='ml-1'>✔️</span>
                    </button>
                  </div>
                )}
              </form>
              <ToastContainer position='bottom-center' theme='colored' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

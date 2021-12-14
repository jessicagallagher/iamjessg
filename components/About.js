export default function About() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20 lg:px-10 xl:px-48'>
      <img
        className='w-full object-cover h-[9rem] sm:h-60 md:h-72 lg:h-96 rounded-md'
        src='./images/cover-photo.jpg'
        alt='brooklyn bridge'
        loading='lazy'
      />
      <div className='max-w-5xl'>
        <div className='-mt-16 sm:-mt-20 lg:-mt-10 flex flex-col lg:flex-row items-end lg:items-center'>
          <div className='mx-auto lg:mx-10'>
            <img
              className='h-40 w-40 rounded-full ring-4 ring-green-default'
              src='./images/profile-photo.jpg'
              alt='girl holding cat'
              loading='lazy'
            />
          </div>
          <div className='font-bold mt-4 flex flex-col mx-auto lg:m-0'>
            <div className='text-center lg:text-left '>
              <h1 className='text-3xl lg:mt-6'>Jessica Gallagher</h1>
              <h2 className='text-2xl'>Brooklyn, NY</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

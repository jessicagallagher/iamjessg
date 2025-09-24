import { useRouter } from 'next/navigation';

export default function Custom404Page() {
  const router = useRouter();
  
  return (
    <section className='grid min-h-full place-items-center py-24 sm:py-32'>
      <div className='text-center'>
        <h1 className='text-3xl md:text-4xl'>404</h1>
        <h1 className='mt-4 text-4xl md:text-6xl tracking-tight'>
          Page not found
        </h1>
        <p className='mt-6 text-pretty text-xl'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <button
            type='submit'
            className='inline-flex justify-center rounded-md border border-pinkDefault py-3 px-6 text-base font-semibold shadow-xl hover:bg-pinkDefault hover:text-white rounded-3xl'
          onClick={() => {router.back()}}
          >
            Back
          </button>
        </div>
      </div>
    </section>
  );
}

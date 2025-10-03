import { useRouter } from 'next/navigation';
import { HeadTag } from '../components';

export default function Custom500Page() {
  const router = useRouter();

  return (
    <div>
      <HeadTag title={'Internal server error'} />
      <main className='grid min-h-full place-items-center py-24 sm:py-32'>
        <div className='text-center'>
          <h1 className='text-3xl md:text-4xl'>Oops!</h1>
          <h1 className='mt-4 text-4xl md:text-6xl tracking-tight'>
            Something went wrong
          </h1>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <button
              type='submit'
              className='inline-flex justify-center rounded-md border border-pinkDefault py-3 px-6 text-base font-semibold shadow-xl hover:bg-pinkDefault hover:text-white rounded-3xl'
              onClick={() => {
                router.refresh();
              }}
            >
              Retry
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

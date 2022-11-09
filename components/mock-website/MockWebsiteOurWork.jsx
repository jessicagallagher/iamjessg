import { MockWebsiteNav, MockWebsiteFooter } from '../../components'

const examples = [
  {
    name: 'Sed',
    description:
      'Nam mattis nunc sed erat posuere, id pharetra leo posuere. Donec quis mauris id est lacinia laoreet.',
  },
  {
    name: 'Pellentesque',
    description:
      'In dignissim justo id odio interdum bibendum. Integer ut nunc dapibus, dapibus nibh ac, euismod ex.',
  },
  {
    name: 'Aenean',
    description:
      'Morbi quis est id eros pretium consectetur. Cras molestie purus at risus rutrum suscipit.',
  },
  {
    name: 'Vivamus',
    description:
      'Aenean sit amet lectus sed augue faucibus sagittis. In et eros et elit fermentum consectetur quis id mauris.',
  },
  {
    name: 'Mauris',
    description:
      'Cras pellentesque tellus et placerat interdum. Phasellus accumsan ligula id lectus vehicula accumsan. Vivamus sit amet lacus lacinia, viverra elit in, viverra mi.',
  },
  {
    name: 'Vestibulum',
    description:
      'Sed quis est ut sem auctor efficitur. Nullam porta felis sagittis diam viverra, eu consectetur massa blandit.',
  },
];

const features = [
  {
    name: 'Vivamus lobortis',
    description:
      'Praesent cursus ligula quis mi blandit, ac iaculis felis aliquam. Sed dignissim nisi non magna pretium, a lacinia libero luctus. Sed in tellus fermentum, viverra ligula a, bibendum nibh. Nulla nec diam vitae nulla pulvinar aliquam sed vel ligula.',
    imageSrc:
      'https://images.unsplash.com/photo-1582721570262-b6fed9bd5fe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVybyUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    imageAlt: '',
  },
  {
    name: 'Suspendisse pretium',
    description:
      'Curabitur eget orci sed dolor vulputate fermentum. Nunc cursus magna eu ante ullamcorper, et eleifend dolor condimentum. Nullam eget diam ac ante porttitor consequat vitae ac magna. Sed non dolor ac nibh mollis scelerisque. Integer condimentum nulla quis nunc malesuada finibus. Maecenas nec nunc id nulla dictum molestie in mollis neque.',
    imageSrc:
      'https://images.unsplash.com/photo-1623140696875-89ffab1e518a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhlcm8lMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    imageAlt: '',
  },
  {
    name: 'Donec',
    description:
      'Donec in neque eu libero maximus eleifend. Aenean non nisi quis magna pharetra iaculis eget non urna. Quisque pretium enim ut sodales volutpat. Morbi at magna ac arcu aliquam vulputate. Fusce non elit a leo tincidunt imperdiet.',
    imageSrc:
      'https://images.unsplash.com/photo-1625740794218-782f3fc8fd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxoZXJvJTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    imageAlt: '',
  },
];

const featuresGrid = [
  {
    name: 'Donec fermentum',
    description:
      'Phasellus pulvinar leo non justo ultricies, eget gravida dolor eleifend.',
    imageSrc:
      'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    imageAlt: '',
  },
  {
    name: 'Sed efficitur',
    description: 'Ut eget dolor nec justo scelerisque pretium a ac tellus.',
    imageSrc:
      'https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    imageAlt: '',
  },
  {
    name: 'Sed massa',
    description: 'Aliquam cursus erat non urna feugiat feugiat.',
    imageSrc:
      'https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    imageAlt: '',
  },
  {
    name: 'Praesent scelerisque',
    description:
      'Integer porttitor dolor at viverra elementum.',
    imageSrc:
      'https://images.unsplash.com/photo-1572099606223-6e29045d7de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    imageAlt: '',
  },
];

export default function MockWebsiteOurWork() {
  return (
    <div className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20'>
      {/* nav */}
      <MockWebsiteNav />

      {/* hero */}
      <div>
        <div className='relative w-full' aria-hidden='true'>
          <img
            src='https://images.unsplash.com/photo-1565932887479-b18108f07ffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGhlcm8lMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format'
            alt=''
            className='w-full h-48 lg:h-96 object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-indigo-200' />
        </div>

        {/* header */}
        <div className='relative mx-auto -mt-12 max-w-7xl px-4 pb-16 xl:px-0'>
          <div className='mx-auto max-w-2xl text-center lg:max-w-4xl'>
            <h2 className='text-2xl sm:text-3xl font-bold tracking-tight text-indigo-500'>
              Our Work
            </h2>
            <p className='mt-10 lg:text-lg text-indigo-800 font-bold'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              vero deleniti amet iste quae illum aperiam delectus velit qui
              voluptatibus, aliquid animi quaerat aliquam laudantium in!
              Consectetur temporibus aut quo.
            </p>
          </div>

          {/* examples */}
          <dl className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:px-8 xl:px-28'>
            {examples.map((example) => (
              <div key={example.name} className='border-t border-indigo-500 pt-4 xl:text-lg'>
                <dt className='font-medium'>{example.name}</dt>
                <dd className='mt-2 text-sm xl:text-base'>
                  {example.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* features header */}
      <div className='mx-auto max-w-7xl px-2 lg:px-8 xl:px-28'>
        <div className='mx-auto max-w-2xl px-2 md:px-0 lg:max-w-none'>
          <div className='max-w-3xl'>
            <p className='text-2xl lg:text-3xl font-bold tracking-tight'>
              Sed eget quisque at
            </p>
            <p className='mt-4 text-indigo-800 font-bold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cras sit
              amet ligula non odio elementum tempor. Nullam aliquet enim ac
              lorem condimentum elementum.
            </p>
          </div>
        </div>
      </div>

      {/* features */}
      <div className='space-y-10 sm:mt-10 px-2 mt-6 xl:px-28'>
        {features.map((feature) => (
          <div
            key={feature.name}
            className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 md:px-8 xl:px-0'
          >
            <div className='mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4'>
              <h3 className='text-lg font-medium'>
                {feature.name}
              </h3>
              <p className='mt-2 text-sm xl:text-base'>
                {feature.description}
              </p>
            </div>
            <div className='flex-auto lg:col-span-7 xl:col-span-8'>
              <div className='aspect-w-5 aspect-h-2 overflow-hidden rounded-lg'>
                <img
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className='object-cover object-center'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* features grid header */}
      <div className='mx-auto max-w-7xl px-2 mt-10 md:px-8 xl:px-28'>
        <div className='mx-auto md:mx-0 max-w-2xl lg:max-w-none'>
          <div className='max-w-3xl'>
            <p className='text-2xl font-bold tracking-tight lg:text-3xl'>
              Nullam a sed nec.
            </p>
            <p className='mt-4 text-indigo-800 font-bold'>
              Aliquam viverra purus malesuada mi commodo viverra. Fusce sed
              augue non est vehicula pharetra. Vivamus efficitur nibh et nunc
              tempor, non commodo ante aliquam.
            </p>
          </div>
        </div>
      </div>

      {/* features grid */}
      <div className='grid grid-cols-1 items-start gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 px-2 py-10 md:px-8 xl:px-28'>
        {featuresGrid.map((feature) => (
          <div key={feature.name} className='flex flex-col-reverse'>
            <div className='mt-6'>
              <h3 className='text-lg font-medium'>
                {feature.name}
              </h3>
              <p className='mt-2 text-sm xl:text-base'>
                {feature.description}
              </p>
            </div>
            <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-lg'>
              <img
                src={feature.imageSrc}
                alt={feature.imageAlt}
                className='object-cover object-center'
              />
            </div>
          </div>
        ))}
      </div>

      {/* footer */}
      <MockWebsiteFooter />
    </div>
  );
}

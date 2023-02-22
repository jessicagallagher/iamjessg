export const projects = [
  {
    projectName: 'This website',
    projectRepoUrl: 'https://github.com/jessicagallagher/iamjessg',
    projectUrl: 'https://www.techmeowt.com',
    projectFramework: 'Next.js',
    projectCss: 'Tailwind CSS',
    hasDb: false,
    projectDb: '',
  },
  {
    projectName: 'Candy Crush Clone',
    projectRepoUrl: 'https://github.com/jessicagallagher/react-candy-crush',
    projectUrl: 'https://jess-candy-crush.vercel.app/',
    projectFramework: 'React',
    projectCss: 'Vanilla',
    hasDb: false,
    projectDb: '',
  },
];

export const running = [
  {
    raceName: 'NYC Half',
    raceHref: 'https://www.nyrr.org/races/unitedairlinesnychalf',
  },
  {
    raceName: 'Brooklyn Half',
    raceHref: 'https://www.nyrr.org/races/rbcbrooklynhalf',
  },
  {
    raceName: 'The Chicago Marathon',
    raceHref: 'https://www.chicagomarathon.com/',
  },
];

export const books = [
  {
    bookName: 'The Effective Engineer',
    bookHref:
      'https://www.amazon.com/Effective-Engineer-Engineering-Disproportionate-Meaningful/dp/0996128107/ref=sr_1_1?crid=2VDVNP5V07SMX&keywords=the+effective+engineer&qid=1662578648&sprefix=the+effecti%2Caps%2C77&sr=8-1',
    bookAuthor: 'Edmond Lau',
  },
  {
    bookName: 'Vanderbilt: The Rise and Fall of an American Dynasty',
    bookHref:
      'https://www.amazon.com/Vanderbilt-Rise-Fall-American-Dynasty-ebook/dp/B08R3WD7WD/ref=sr_1_1?crid=M6YM4K0QBJ5K&keywords=vanderbilt+the+rise+and+fall+of+an+american+dynasty&qid=1662578731&sprefix=vanderbilt%2Caps%2C71&sr=8-1',
    bookAuthor: 'Anderson Cooper + Katherine Howe',
  },
];

export const mainNav = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Work', href: '/our-work' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/Tech-Meowt',
      icon: (props) => (
        <svg fill='#212121' viewBox='0 0 24 24' {...props}>
          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/tech-meowt',
      icon: (props) => (
        <svg fill='#212121' viewBox='0 0 24 24' {...props}>
          <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
        </svg>
      ),
    },
  ],
};

export const ourWork = [
  {
    projectName: 'Website Design, Development, and Refresh',
    imgUrl: '/images/our-work-images/website.png',
    pageUrl: '/our-work/website/home',
    projectDescription:
      'We can build a custom website for you from the ground up. We use the latest technologies to ensure lightning-fast page load times and a responsive, mobile-friendly website. We also offer ongoing, as-needed maintenance. Looking to refresh your current website? Great! Send us your ideas.',
  },
  {
    projectName: 'Database and CRM Solutions',
    imgUrl: '/images/our-work-images/website.png',
    pageUrl: '/our-work/crm/complete-solution/home',
    projectDescription:
      'Are you looking for a better way to manage and streamline your customer or donor data? We can build out a bespoke CRM to fit your needs—from sending mass emails to tracking budgets, we\'ve got you covered. We can even integrate with services that you currently use so that you only have to remember one login and password.',
  },
  // {
  //   projectName: 'Blog',
  //   imgUrl: '',
  //   pageUrl: '/',
  //   projectDescription:
  //     'Donec semper elit libero, ut convallis tortor finibus vel. Sed blandit mi in sollicitudin suscipit. Sed rutrum rutrum quam, sit amet consequat nisl placerat ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  // },
  // {
  //   projectName: 'Database',
  //   imgUrl: '',
  //   pageUrl: '/',
  //   projectDescription:
  //     'Donec semper elit libero, ut convallis tortor finibus vel. Sed blandit mi in sollicitudin suscipit. Sed rutrum rutrum quam, sit amet consequat nisl placerat ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  // },
];

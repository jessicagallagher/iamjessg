export const projects = [
  {
    projectName: `Tech Meowt's Website`,
    projectRepoUrl: 'https://github.com/jessicagallagher/iamjessg/tree/dev',
    projectUrl: 'https://www.techmeowt.com',
    projectFramework: 'Next.js',
    projectCss: 'Tailwind CSS',
    hasDb: false,
    projectDb: '',
  },
  {
    projectName: 'A tracking application for the popular videogame Stardew Valley',
    projectRepoUrl: null,
    projectUrl: '',
    projectFramework:
      'Next.js, Supabase,',
    projectCss: 'Tailwind CSS',
    hasDb: true,
    projectDb: '',
  },
];

export const running = [
  {
    raceName: 'Hudson Valley Marathon',
    raceHref: 'https://hudsonvalleymarathon.com/',
  },
  {
    raceName: `Amsterdam Marathon`,
    raceHref: 'https://www.tcsamsterdammarathon.eu/',
  },
];

export const books = [
  {
    bookName: 'A Philosophy of Software Design',
    bookHref:
      'https://www.amazon.com/Philosophy-Software-Design-2nd/dp/173210221X/ref=sr_1_1?crid=289BZ69F77XKZ&dib=eyJ2IjoiMSJ9.thuonFC3GnLB3dGZfHxZosqdfUQXlSdb6tCpAeBE0kqzv-AT3ltocUX2szt0Zc-r_u9sSjfleB9ZI-irNxyH7T2KksZ6yc6wKdyoX1_tjeko4fB4y_x58o_1rB1zbl_4IhYrbh40hS793buHll1E2OwFs2ryHBpsc8lrdIVOIeC-YRoY5G49kXxFbMxiYdeQNmfK-P67AHH87VnncME2X12CAx6X9UqYrn5XNbcuwzE.j10P6MgoA-c8zSJ4RtbMkYypuccpoqxSWj0UW2RblBk&dib_tag=se&keywords=the+philosophy+of+software+design&qid=1758038321&sprefix=the+philosphy+of+softw%2Caps%2C100&sr=8-1',
    bookAuthor: 'John Ousterhout',
  },
  {
    bookName: 'Norwegian Wood',
    bookHref:
      'https://www.amazon.com/s?k=norweigan+wood&crid=2PNB7GQJ0OMKD&sprefix=norweigan+wood%2Caps%2C118&ref=nb_sb_noss_2',
    bookAuthor: 'Haruki Murakami',
  },
];

export const mainNav = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
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

export const ourWorkWebsites = [
  {
    projectName: 'Nonprofit Website Example',
    imgUrl: '/images/our-work-images/mock-website.png',
    pageUrl: '/website-example',
    projectDescription:
      'An example website for a nonprofit organization built with Next.js and Tailwind CSS',
  },
  {
    projectName: 'Southpaw Martial Arts',
    imgUrl: '/images/our-work-images/spmafc.png',
    pageUrl: 'https://southpawmafc.vercel.app',
    projectDescription:
      'A website built and maintained for Southpaw Martial Arts using Next.js, Tailwind CSS, and Resend',
  },
];

export const ourWorkCrmsDbs = [
  {
    projectName: 'Custom CRM and Database',
    imgUrl: '/images/our-work-images/crm-database.gif',
    projectDescription:
    'A custom built and maintained CRM and database for a private nonprofit client using React, Bootstrap, MongoDB, Express, Prisma ORM, and Nodemailer'
  },
]

export const ourWorkWebApps = [
  {
    projectName: 'Custom Petsitting Application',
    imgUrl: '/images/our-work-images/petsitting.png',
    projectDescription:
      'A custom built and maintained web application for a private client using Next.js, Tailwind CSS, Supabase, Prismic CMS, and Mapbox',
  },
];

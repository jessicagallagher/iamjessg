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
    projectName: 'A networking database that integrates with LinkedIn',
    projectRepoUrl: null,
    projectUrl: '',
    projectFramework:
      'Next.js, NextAuth.js, MongoDB,',
    projectCss: 'Tailwind CSS',
    hasDb: true,
    projectDb: '',
  },
];

export const running = [
  {
    raceName: `Amsterdam Marathon`,
    raceHref: 'https://www.tcsamsterdammarathon.eu/',
  },
  {
    raceName: 'Prospect Park 50k',
    raceHref: 'https://pptc.org/50-miler',
  },
];

export const books = [
  {
    bookName:
      'Algospeak: How Social Media Is Transforming the Future of Language',
    bookHref:
      'https://www.amazon.com/dp/0593804074?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_1',
    bookAuthor: 'Adam Aleksic',
  },
  {
    bookName: `Even the Good Girls Will Cry: A '90s Rock Memoir`,
    bookHref:
      'https://www.amazon.com/dp/0306833751?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_1',
    bookAuthor: 'Melissa Auf der Maur',
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

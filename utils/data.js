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
    projectName: 'Nonprofit Website',
    imgUrl: '/images/our-work-images/mock-website.png',
    pageUrl: '/website-example',
    projectDescription:
      'An example website for a nonprofit organization built with Next.js and Tailwind CSS',
  },
  {
    projectName: 'Business Website',
    imgUrl: '/images/our-work-images/spmafc.png',
    pageUrl: 'https://southpawmafc.vercel.app',
    projectDescription:
      'A website built and maintained for Southpaw Martial Arts using Next.js, Tailwind CSS, and Resend',
  },
];

export const ourWorkPortfolios = [
  {
    projectName: 'Creative Professional Portfolio',
    imgUrl: '/images/our-work-images/actor-1.png',
    pageUrl: 'https://actor-portfolio-1-example.vercel.app/',
    projectDescription:
      'An example website for a creative professional built with Next.js and Tailwind CSS',
  },
  {
    projectName: 'Creative Professional Portfolio',
    imgUrl: '/images/our-work-images/actor-2.png',
    pageUrl: 'https://actor-portfolio-2-example.vercel.app/',
    projectDescription:
      'An example website for a creative professional built with Next.js and Tailwind CSS',
  },
  {
    projectName: 'Creative Professional Portfolio',
    imgUrl: '/images/our-work-images/actor-3.png',
    pageUrl: 'https://actor-portfolio-3-example.vercel.app/',
    projectDescription:
      'An example website for a creative professional built with Next.js, Tailwind CSS, and Embla Carousel',
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
    projectName: 'Custom Web Application',
    imgUrl: '/images/our-work-images/petsitting.png',
    projectDescription:
      'A custom built and maintained web application for a private client using Next.js, Tailwind CSS, Supabase, Prismic CMS, and Mapbox',
  },
];

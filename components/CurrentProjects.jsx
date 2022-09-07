export default function CurrentProjects() {
  const projects = [
    {
      projectName: 'This Website',
      projectRepoUrl: 'https://github.com/jessicagallagher/iamjessg',
      projectUrl: 'https://www.iamjessg.com',
      projectFramework: 'Next.js',
      projectCss: 'Tailwind CSS',
      hasDb: false,
      projectDb: '',
    },
    {
      projectName: "Red2Blue's Database",
      projectRepoUrl: 'https://github.com/jessicagallagher/red2blue-db',
      projectUrl: '',
      projectFramework: 'Next.js',
      projectCss: 'Tailwind CSS',
      hasDb: true,
      projectDb:
        'It also uses Firebase for authentication along with MongoDB as its database.',
    },
    {
      projectName: 'Marathon Training App',
      projectRepoUrl:
        'https://github.com/jessicagallagher/marathon-training-plan',
      projectUrl: '',
      projectFramework: 'Next.js',
      projectCss: 'Tailwind CSS',
      hasDb: true,
      projectDb: 'It also uses Prisma ORM as its database.',
    },
  ];

  const getDb = (hasDb, projectDb) => {
    if (hasDb) {
      let db = project.projectDb;
      return db;
    } else {
      null;
    }
  };
  getDb();

  return (
    <dt className='font-semibold font-lato'>
      Current Projects
      <div className='font-raleway font-normal py-2'>What I'm Working On:</div>
      {projects.map((project) => (
        <li
          key={project.id}
          className='font-raleway list-none list-outside even:text-greenDefault odd:text-pinkDefault font-semibold'
        >
          <a href={project.projectRepoUrl} target='blank'>
            {project.projectName}
          </a>{' '}
          which uses {project.projectFramework} and {project.projectCss}.{' '}
          <p className='italic'>{project.projectDb}</p>
        </li>
      ))}
    </dt>
  );
}

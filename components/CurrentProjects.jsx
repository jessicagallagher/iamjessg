export default function CurrentProjects() {
  const projects = [
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
      projectName: 'Racecation app',
      projectRepoUrl: 'https://github.com/jessicagallagher/racecation',
      projectUrl: '',
      projectFramework: 'Next.js',
      projectCss: 'Tailwind CSS',
      hasDb: true,
      projectDb: 'It also uses Firebase for authentication and for its database',
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
    <dt className='font-semibold '>
      Current Projects
      <div className='font-normal py-2'>What I'm working on for fun</div>
      {projects.map((project) => (
        <li
          key={project.id}
          className=' list-none list-outside even:text-greenDefault odd:text-pinkDefault hover:text-xl font-semibold'
        >
          <a href={project.projectRepoUrl} target='blank'>
            {project.projectName} which uses {project.projectFramework} and{' '}
            {project.projectCss}. <p className='italic'>{project.projectDb}</p>
          </a>
        </li>
      ))}
    </dt>
  );
}

import { projects } from '../utils/data';

export default function CurrentProjects() {
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
          className='list-outside list-disc mx-6 hover:text-pinkDefault text-base'
        >
          <a
            href={project.projectRepoUrl}
            target='blank'
            className={`${
              project.projectRepoUrl ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            {project.projectName} which uses {project.projectFramework} and{' '}
            {project.projectCss}
            {project.projectDb ? `, and ${project.projectDb}.` : '.'}
          </a>
        </li>
      ))}
    </dt>
  );
}

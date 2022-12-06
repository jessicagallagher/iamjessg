import { running } from '../utils/data.js'

export default function Running() {
  return (
    <dt className='font-semibold '>
      Running
      <div className='font-normal py-2'>What I'm currently training for</div>
      {running.map((run) => (
        <li
          key={run.id}
          className='list-outside list-disc mx-6 hover:text-pinkDefault text-base'
        >
          <a href={run.raceHref}>{run.raceName}</a>
        </li>
      ))}
    </dt>
  );
}

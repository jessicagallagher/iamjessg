export default function Running() {
  const running = [
    {
      raceName: 'The Brooklyn Marathon',
      raceHref:
        'https://nycruns.com/race/nycruns-brooklyn-marathon-half-marathon',
    },
    {
      raceName: 'The Chicago Marathon',
      raceHref: 'https://www.chicagomarathon.com/',
    },
  ];

  return (
    <dt className='font-semibold '>
      Running
      <div className=' font-normal py-2'>What I'm currently training for</div>
      {running.map((run) => (
        <li
          key={run.id}
          className=' list-none list-outside even:text-greenDefault odd:text-pinkDefault font-semibold'
        >
          <a href={run.raceHref}>{run.raceName}</a>
        </li>
      ))}
    </dt>
  );
}

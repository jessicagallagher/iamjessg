export default function Running() {
  const running = [
    {
      raceName: 'The NYC Half',
      raceHref: 'https://www.nyrr.org/races/2022unitedairlinesnychalf',
    },
    {
      raceName: "The Shape + Women's Half",
      raceHref: 'https://shapehealthhalf.com/',
    },
    {
      raceName: 'The Big Sur Marathon',
      raceHref: 'https://www.bigsurmarathon.org/',
    },
    {
      raceName: 'The Brooklyn Half',
      raceHref: 'https://www.nyrr.org/races/rbcbrooklynhalf',
    },
    {
      raceName: 'The Berlin Marathon',
      raceHref: 'https://www.bmw-berlin-marathon.com/en/',
    },
  ];
  
  return (
    <dt className='font-semibold font-lato'>
      Running
      <div className='font-raleway font-normal py-2'>
        What I'm Training For:
      </div>
      {running.map((run) => (
        <li key={run.id} className='font-raleway list-none list-outside even:text-green-default odd:text-pink-default font-semibold'>
          <a href={run.raceHref}>
            {run.raceName}
          </a>
        </li>
      ))}
    </dt>
  );
}

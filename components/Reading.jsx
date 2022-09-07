export default function Reading() {
  const books = [
    {
      bookName: 'Do You Mind If I Cancel?',
      bookHref: 'https://www.amazon.com/Do-You-Mind-If-Cancel/dp/1250225825',
      bookAuthor: 'Gary Janetti',
    },
    {
      bookName: 'To Kill a Mockingbird',
      bookHref:
        'https://www.amazon.com/Kill-Mockingbird-50th-Anniversary/dp/0062420704/ref=sr_1_1?crid=SDDMU3JP5C5I&keywords=to+kill+a+mockingbird+hardcover&qid=1643986588&s=books&sprefix=to+kill+a+mock%2Cstripbooks%2C74&sr=1-1',
      bookAuthor: 'Haper Lee',
    },
    {
      bookName: 'The Cat Whisperer',
      bookHref:
        'https://www.amazon.com/Cat-Whisperer-Cats-What-Do/dp/0553807854/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1643986950&sr=1-1',
      bookAuthor: 'Mieshelle Nagelschneider',
    },
    {
      bookName: 'Everyday Zen',
      bookHref:
        'https://www.amazon.com/Everyday-Zen-Love-Work-Plus/dp/0061285897/ref=sr_1_2?crid=26P0EMT4A9AVZ&keywords=everyday+zen+by+charlotte+joko+beck&qid=1643986991&s=books&sprefix=everyday+z%2Cstripbooks%2C72&sr=1-2',
      bookAuthor: 'Charlotte J. Beck',
    },
    {
      bookName: 'Princess Margaret',
      bookHref:
        'https://www.amazon.com/Princess-Margaret-Contrasts-Christopher-Warwick/dp/0233005315/ref=sr_1_6?crid=1F9K96HV14NVO&keywords=princess+margaret&qid=1643987052&s=books&sprefix=princess+margaret%2Cstripbooks%2C65&sr=1-6',
      bookAuthor: 'Christopher Warwick',
    },
  ];

  return (
    <dt className='font-semibold '>
      Books
      <div className=' font-normal py-2'>What I'm Reading This Year:</div>
      {books.map((book) => (
        <li
          key={book.id}
          className=' hover:text-pinkDefault list-none list-outside even:text-greenDefault odd:text-pinkDefault font-semibold'
        >
          <a href={book.bookHref} target='blank' className='italic'>
            {book.bookName}{' '}
          </a>
          by {book.bookAuthor}
        </li>
      ))}
    </dt>
  );
}

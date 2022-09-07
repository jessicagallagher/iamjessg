export default function Reading() {
  const books = [
    {
      bookName: 'The Effective Engineer',
      bookHref:
        'https://www.amazon.com/Effective-Engineer-Engineering-Disproportionate-Meaningful/dp/0996128107/ref=sr_1_1?crid=2VDVNP5V07SMX&keywords=the+effective+engineer&qid=1662578648&sprefix=the+effecti%2Caps%2C77&sr=8-1',
      bookAuthor: 'Edmond Lau',
    },
    {
      bookName: 'Vanderbilt: The Rise and Fall of an American Dynasty',
      bookHref:
        'https://www.amazon.com/Vanderbilt-Rise-Fall-American-Dynasty-ebook/dp/B08R3WD7WD/ref=sr_1_1?crid=M6YM4K0QBJ5K&keywords=vanderbilt+the+rise+and+fall+of+an+american+dynasty&qid=1662578731&sprefix=vanderbilt%2Caps%2C71&sr=8-1',
      bookAuthor: 'Anderson Cooper + Katherine Howe',
    },
  ];

  return (
    <dt className='font-semibold '>
      Books
      <div className=' font-normal py-2'>What I'm currently reading</div>
      {books.map((book) => (
        <li
          key={book.id}
          className='list-none list-outside even:text-greenDefault odd:text-pinkDefault font-semibold hover:text-xl'
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

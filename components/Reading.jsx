import { books } from '../utils/data';

export default function Reading() {
  return (
    <dt className='font-semibold '>
      Books
      <div className='font-normal py-2'>What I'm currently reading</div>
      {books.map((book) => (
        <li
          key={book.id}
          className='list-outside list-disc mx-6 hover:text-pinkDefault text-base'
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

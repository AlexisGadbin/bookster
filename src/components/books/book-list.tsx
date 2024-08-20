import { BookModel } from '@/models/book'
import BookCard from './book-card'

type BooksListProps = {
  books: BookModel[]
}

const BooksList = (props: BooksListProps) => {
  const { books } = props
  console.log(books)

  return (
    <>
      <section className="flex gap-6 overflow-x-auto pb-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} showContributor={false} />
        ))}
      </section>
    </>
  )
}

export default BooksList

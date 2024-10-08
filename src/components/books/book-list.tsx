import { BookModel } from '@/models/book'
import { useTranslation } from 'react-i18next'
import BookCard from './book-card'

type BooksListProps = {
  books: BookModel[]
}

const BooksList = (props: BooksListProps) => {
  const { books } = props
  const { t } = useTranslation()

  return (
    <>
      <section className="flex gap-6 overflow-x-auto pb-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} showContributor={false} />
        ))}
        {books.length === 0 && (
          <div className="w-full text-center">
            <p>{t('components.book_list.empty')}</p>
          </div>
        )}
      </section>
    </>
  )
}

export default BooksList

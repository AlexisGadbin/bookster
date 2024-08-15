import { getBooks } from '@/api/services/book.service'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import BookCard from './book-card'

const BooksList = () => {
  const { t } = useTranslation()
  const { data: paginatedBooks } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  })

  if (!paginatedBooks) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2>{t('home.books_list_title')}</h2>
      <section className="flex gap-6 overflow-x-auto pb-4">
        {paginatedBooks.data.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </section>
    </>
  )
}

export default BooksList

import { searchBooks } from '@/api/services/book.service'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import BookCard from './book-card'

const SearchResult = () => {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()

  const { data: books } = useQuery({
    queryKey: ['books', { search: searchParams.get('search') }],
    queryFn: () => searchBooks(searchParams.get('search')!),
  })

  return (
    <>
      <h4>
        {t('home.search_result_title', {
          query: searchParams.get('search'),
        })}
      </h4>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {books?.data.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </>
  )
}

export default SearchResult

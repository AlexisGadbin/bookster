import BooksList from '@/components/books/book-list'
import SearchResult from '@/components/books/search-result'
import { useSearchParams } from 'react-router-dom'

export default function Home() {
  const [searchParams] = useSearchParams()

  return (
    <main className="flex min-h-screen flex-col gap-4 p-8 lg:p-24">
      {searchParams.get('search') ? <SearchResult /> : <BooksList />}
    </main>
  )
}

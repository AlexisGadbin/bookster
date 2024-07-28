import { getBooks } from '@/api/services/book.service'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const BooksList = () => {
  const { data: paginatedBooks } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  })

  if (!paginatedBooks) {
    return <div>Loading...</div>
  }

  return (
    <section className="flex flex-wrap gap-6">
      {paginatedBooks.data.map((book) => (
        <Link key={book.id} to={`/books/${book.id}`} className="select-none">
          <div className="overflow-hidden rounded-md">
            <img
              src={book.coverImageUrl}
              alt="Book cover"
              className={cn(
                'aspect-[3/4] h-80 w-60 object-cover transition-all hover:scale-105'
              )}
            />
          </div>
          <h3>{book.title}</h3>
          <span>{book.description}</span>
        </Link>
      ))}
    </section>
  )
}

export default BooksList

import { cn } from '@/lib/utils'
import { BookModel } from '@/models/book'
import { Link } from 'react-router-dom'

type BookCardProps = {
  book: BookModel
  showContributor?: boolean
}

const BookCard = (props: BookCardProps) => {
  const { book, showContributor = true } = props

  return (
    <Link
      key={book.id}
      to={`/books/${book.id}`}
      className="relative min-w-20 max-w-20 select-none md:min-w-32 md:max-w-32 lg:min-w-36 lg:max-w-36 xl:min-w-44 xl:max-w-44"
    >
      {showContributor && (
        <img
          src={`https://ui-avatars.com/api/?name=${book.contributor.firstName}+${book.contributor.lastName}&size=256&background=${book.contributor.avatarBackgroundColor}&color=fff`}
          alt="avatar"
          className="absolute right-1 top-1 h-6 w-6 rounded-full opacity-75"
        />
      )}
      <div className="w-fit overflow-hidden rounded-md">
        <img
          src={book.coverImageUrl}
          alt="Book cover"
          className={cn(
            'aspect-[3/4] h-28 w-20 object-cover transition-all hover:scale-105 sm:h-36 sm:w-28 md:h-44 md:w-32 lg:h-52 lg:w-36 xl:h-64 xl:w-44'
          )}
        />
      </div>
      <h4 className="text-wrap text-xs">{book.title}</h4>
    </Link>
  )
}

export default BookCard

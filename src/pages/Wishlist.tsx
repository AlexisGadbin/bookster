import { getWishlistedBooks } from '@/api/services/book.service'
import BookCard from '@/components/books/book-card'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

const Wishlist = () => {
  const { t } = useTranslation()
  const { data: wishlist } = useQuery({
    queryKey: ['wishlist'],
    queryFn: getWishlistedBooks,
  })

  return (
    <main className="flex min-h-screen flex-col gap-4 p-8 lg:p-24">
      <h2>{t('wishlist.title')}</h2>
      <div className="flex flex-wrap">
        {wishlist?.data.map((book) => (
          <BookCard key={book.id} book={book} showContributor={false} />
        ))}
      </div>
      {wishlist?.data.length === 0 && <p>{t('wishlist.empty')}</p>}
    </main>
  )
}

export default Wishlist

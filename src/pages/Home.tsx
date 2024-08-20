import { getMyBooks, getWishlistedBooks } from '@/api/services/book.service'
import AddBookButton from '@/components/books/add-books-button'
import BooksList from '@/components/books/book-list'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  const { data: myBooks } = useQuery({
    queryKey: ['myBooks'],
    queryFn: () => getMyBooks(),
  })

  const { data: wishlist } = useQuery({
    queryKey: ['wishlist'],
    queryFn: () => getWishlistedBooks(),
  })

  return (
    <main className="flex min-h-screen flex-col gap-4 p-8 lg:p-24">
      <h2>{t('home.my_books_title')}</h2>
      <BooksList books={myBooks?.data ?? []} />
      <h2>{t('home.my_wishlist_title')}</h2>
      <BooksList books={wishlist?.data ?? []} />
      <AddBookButton>
        <Button>{t('home.add_book_button')}</Button>
      </AddBookButton>
    </main>
  )
}

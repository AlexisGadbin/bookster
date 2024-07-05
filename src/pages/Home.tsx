import AddBookButton from '@/components/books/add-books-button'
import BooksList from '@/components/books/book-list'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className="flex min-h-screen flex-col gap-4 p-8 lg:p-24">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <h1>{t('site.title')}</h1>
        <AddBookButton />
      </div>

      <h2>{t('home.books_list_title')}</h2>
      <BooksList />
    </main>
  )
}

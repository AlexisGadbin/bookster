import BooksList from '@/components/books/book-list'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className="flex min-h-screen flex-col gap-4 p-8 lg:p-24">
      <h2>{t('home.books_list_title')}</h2>
      <BooksList />
    </main>
  )
}

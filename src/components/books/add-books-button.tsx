import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import BookForm from './book-form'

const AddBookButton = () => {
  const { t } = useTranslation()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>{t('home.add_book_button')}</Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mx-auto w-full max-w-sm">
          <SheetHeader>
            <SheetTitle>{t('add_book.title')}</SheetTitle>
          </SheetHeader>
          <div className="p-4 pb-0">
            <BookForm />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default AddBookButton

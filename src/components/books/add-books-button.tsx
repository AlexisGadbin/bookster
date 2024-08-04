import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { BookModel } from '@/models/book'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import BookForm from './book-form'

type AddBookButtonProps = {
  children: React.ReactNode
  existingBook?: BookModel
}

const AddBookButton = (props: AddBookButtonProps) => {
  const { t } = useTranslation()
  const { children, existingBook } = props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen}>
      <SheetTrigger asChild onClick={() => setIsOpen(true)}>
        {children}
      </SheetTrigger>
      <SheetContent>
        <div className="mx-auto w-full max-w-sm">
          <SheetHeader>
            <SheetTitle>{t('add_book.title')}</SheetTitle>
          </SheetHeader>
          <div className="p-4 pb-0">
            <BookForm
              existingBook={existingBook}
              closeSheet={() => setIsOpen(false)}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default AddBookButton

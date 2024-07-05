import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import BookForm from './book-form'

const AddBookButton = () => {
  const { t } = useTranslation()

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>{t('home.add_book_button')}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{t('add_book.title')}</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <BookForm />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default AddBookButton

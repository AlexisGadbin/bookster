import { useTranslation } from 'react-i18next'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog'

const NotResponsiveDialog = () => {
  const { t } = useTranslation()

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className="hidden lg:block">
        <AlertDialogHeader>
          <AlertDialogTitle className="whitespace-pre-line">
            {t('common.not_responsive_title')}
          </AlertDialogTitle>
          <AlertDialogDescription className="whitespace-pre-line">
            {t('common.not_responsive_description')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>{t('common.understand')}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default NotResponsiveDialog

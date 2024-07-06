import { useTranslation } from 'react-i18next'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import AuthForm from './auth-form'

const AuthModal = () => {
  const { t } = useTranslation()

  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('auth.modal.title')}</DialogTitle>
          <DialogDescription>{t('auth.modal.description')}</DialogDescription>
        </DialogHeader>
        <AuthForm />
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal

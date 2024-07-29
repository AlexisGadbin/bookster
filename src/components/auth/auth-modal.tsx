import { useAuthenticatedUser } from '@/utils/hooks/authenticated-user'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import AuthForm from './auth-form'
import RegisterForm from './register-form'

type ModalProps = {
  changeModal: (isSigningUp: boolean) => void
}

const SignInModal = (props: ModalProps) => {
  const { changeModal } = props
  const { t } = useTranslation()
  const { user, isLoading } = useAuthenticatedUser()

  return (
    <Dialog open={!isLoading && !user}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('auth.modal.sign_in.title')}</DialogTitle>
          <DialogDescription>
            {t('auth.modal.sign_in.description')}
          </DialogDescription>
        </DialogHeader>
        <AuthForm />
        <DialogFooter>
          <p className="text-xs text-gray-500">
            {t('auth.modal.sign_in.no_account_text')}{' '}
            <a
              className="cursor-pointer text-primary"
              onClick={() => changeModal(true)}
            >
              {t('auth.modal.sign_in.sign_up_link')}
            </a>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const SignUpModal = (props: ModalProps) => {
  const { changeModal } = props
  const { t } = useTranslation()
  const { user, isLoading } = useAuthenticatedUser()

  return (
    <Dialog open={!isLoading && !user}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('auth.modal.sign_in.title')}</DialogTitle>
          <DialogDescription>
            {t('auth.modal.sign_in.description')}
          </DialogDescription>
        </DialogHeader>
        <RegisterForm />
        <DialogFooter>
          <p className="text-xs text-gray-500">
            {t('auth.modal.sign_in.no_account_text')}{' '}
            <a
              className="cursor-pointer text-primary"
              onClick={() => changeModal(false)}
            >
              {t('auth.modal.sign_in.sign_up_link')}
            </a>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const AuthModal = () => {
  const [isSigningUp, setIsSigningUp] = useState(false)

  const changeModal = (isSigningUp: boolean) => {
    setIsSigningUp(isSigningUp)
  }

  return isSigningUp ? (
    <SignUpModal changeModal={changeModal} />
  ) : (
    <SignInModal changeModal={changeModal} />
  )
}

export default AuthModal

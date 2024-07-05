import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import AuthForm from './auth-form'

const AuthModal = () => {
  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign in</DialogTitle>
          <DialogDescription>
            Sign in to your account to continue
          </DialogDescription>
        </DialogHeader>
        <AuthForm />
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal

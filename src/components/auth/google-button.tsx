import { Icons } from '../icons'
import { Button } from '../ui/button'

type GoogleButtonProps = {
  isLoading: boolean
  handleGoogleLogin: () => void
  className?: string
  children?: React.ReactNode
}

const GoogleButton = (props: GoogleButtonProps) => {
  const { isLoading, handleGoogleLogin, children, className } = props

  return (
    <Button
      variant="outline"
      type="button"
      disabled={isLoading}
      onClick={handleGoogleLogin}
      className={className}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.google className="mr-2 h-4 w-4" />
      )}{' '}
      {children}
    </Button>
  )
}

export default GoogleButton

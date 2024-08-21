import { logout } from '@/api/services/auth.service'
import { useAuthenticatedUser } from '@/utils/hooks/authenticated-user'
import { useMutation } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import AuthModal from '../auth/auth-modal'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const NavUserProfile = () => {
  const { t } = useTranslation()
  const { user, isLoading } = useAuthenticatedUser()

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      window.location.reload()
    },
    onError: () => {
      toast.error('An error occurred while logging out')
    },
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  if (!user || isLoading) return <AuthModal />

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&size=256&background=${user.avatarBackgroundColor}&color=fff`}
              alt="@shadcn"
            />
            <AvatarFallback>
              <Loader className="animate-spin" size={14} />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to={`/profile`}>
            <DropdownMenuItem className="cursor-pointer">
              {t('nav.user-profile.profile')}
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <button type="button" onClick={handleLogout} className="w-full">
          <DropdownMenuItem className="cursor-pointer">
            {t('nav.user-profile.logout')}
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default NavUserProfile

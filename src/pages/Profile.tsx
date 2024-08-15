import { updateUser } from '@/api/services/user.service'
import SwitchLanguage from '@/components/settings/switch-language'
import { ThemeToggle } from '@/components/settings/theme-toggle'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { colors } from '@/utils/constants'
import { useAuthenticatedUser } from '@/utils/hooks/authenticated-user'
import { EditUser } from '@/validation/user.schema'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

export default function Settings() {
  const { user } = useAuthenticatedUser()
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  const updateUserMutation = useMutation({
    mutationFn: ({ id, user }: { id: number; user: EditUser }) =>
      updateUser(id, user),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['current-user'],
      })
    },
  })

  if (!user) return null

  const handleChangeAvatarBackgroundColor = (color: string) => {
    updateUserMutation.mutate({
      id: user.id,
      user: { ...user, avatarBackgroundColor: color },
    })
  }

  return (
    <main className="flex min-h-screen flex-col gap-10 px-12 py-8">
      <div className="flex flex-col items-center justify-center">
        <Popover>
          <PopoverTrigger>
            <img
              src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&size=256&background=${user.avatarBackgroundColor}&color=fff`}
              alt="avatar"
              className="h-20 w-20 rounded-full"
            />
          </PopoverTrigger>
          <PopoverContent>
            <div>{t('settings.profile.avatar_background_color')} :</div>
            <div className="mt-4 flex flex-wrap gap-4">
              {Object.values(colors).map((color) => (
                <button
                  key={color}
                  className="h-6 w-6 rounded-full"
                  style={{ backgroundColor: `#${color}` }}
                  onClick={() => handleChangeAvatarBackgroundColor(color)}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <h1 className="text-2xl font-semibold">
          {user.firstName} {user.lastName}
        </h1>
        <span className="text-gray-500">{user.email}</span>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg text-gray-600">
          {t('settings.preferences.title')}
        </h2>
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm">{t('settings.preferences.language')}</span>
          <SwitchLanguage />
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm">{t('settings.preferences.theme')}</span>
          <ThemeToggle />
        </div>
      </div>
    </main>
  )
}

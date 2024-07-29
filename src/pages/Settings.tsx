import SwitchLanguage from '@/components/settings/switch-language'
import { ThemeToggle } from '@/components/settings/theme-toggle'
import { colors } from '@/utils/constants'
import { useAuthenticatedUser } from '@/utils/hooks/authenticated-user'
import { useTranslation } from 'react-i18next'

export default function Settings() {
  const { user } = useAuthenticatedUser()
  const { t } = useTranslation()

  if (!user) return null

  return (
    <main className="flex min-h-screen flex-col gap-10 px-12 py-8">
      <div className="flex flex-col items-center justify-center">
        <img
          src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&size=256&background=${user.avatarBackgroundColor || colors.blue}&color=fff`}
          alt="avatar"
          className="h-20 w-20 rounded-full"
        />
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

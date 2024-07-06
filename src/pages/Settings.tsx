import SwitchLanguage from '@/components/settings/switch-language'
import { ThemeToggle } from '@/components/settings/theme-toggle'

export default function Settings() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SwitchLanguage />
      <ThemeToggle />
    </main>
  )
}

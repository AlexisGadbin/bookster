import { locales } from '@/i18n'
import { useState, useTransition } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

const SwitchLanguage = () => {
  const [isPending, startTransition] = useTransition()
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  const changeLanguage = (newLanguage: string) => {
    startTransition(() => {
      i18n.changeLanguage(newLanguage)
      setLanguage(newLanguage)
    })
  }

  return (
    <Select
      defaultValue={language}
      onValueChange={changeLanguage}
      disabled={isPending}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {t('locales.' + locale)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SwitchLanguage

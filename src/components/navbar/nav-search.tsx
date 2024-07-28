import { useTranslation } from 'react-i18next'
import { Input } from '../ui/input'

const NavSearch = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Input
        type="search"
        placeholder={t('nav.search.placeholder')}
        className="md:w-[300px] lg:w-[500px]"
      />
    </div>
  )
}
export default NavSearch

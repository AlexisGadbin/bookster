import { useTranslation } from 'react-i18next'
import { Input } from '../ui/input'

const NavSearch = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Input
        type="search"
        placeholder={t('nav.search.placeholder')}
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  )
}
export default NavSearch

import { SearchSchema, SearchType } from '@/validation/search.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Input } from '../ui/input'

const NavSearch = () => {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const { register, handleSubmit, watch, setValue } = useForm<SearchType>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      search: searchParams.get('search') || '',
    },
  })

  const onSubmit = (data: SearchType) => {
    navigate('/?search=' + data.search)
  }

  useEffect(() => {
    setValue('search', searchParams.get('search') || '')
  }, [searchParams, setValue])

  const watchedForm = watch()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <Input
        {...register('search')}
        type="search"
        placeholder={t('nav.search.placeholder')}
        className="md:w-[300px] lg:w-[500px]"
      />
      {watchedForm.search && (
        <button className="absolute right-2 top-1/2 -translate-y-1/2 transform">
          <Search size={24} />
        </button>
      )}
    </form>
  )
}
export default NavSearch

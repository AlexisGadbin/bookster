import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import NavSearch from './nav-search'
import NavUserProfile from './nav-user-profile'

type NavLink = { name: 'home'; href: string }

const navLinks: NavLink[] = [{ name: 'home', href: '/' }]

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <div className="sticky top-0 z-10 flex h-nav items-center bg-background px-4">
      <nav className={cn('mx-6 flex items-center space-x-4 lg:space-x-6')}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('nav.links.' + link.name)}
          </Link>
        ))}
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <NavSearch />
        <NavUserProfile />
      </div>
    </div>
  )
}
export default Navbar

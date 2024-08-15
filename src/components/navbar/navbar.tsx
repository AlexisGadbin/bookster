import { cn } from '@/lib/utils'
import { Library } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import NavSearch from './nav-search'
import NavUserProfile from './nav-user-profile'

type NavLink = { name: 'home' | 'wishlist'; href: string }

const navLinks: NavLink[] = [
  { name: 'home', href: '/' },
  {
    name: 'wishlist',
    href: '/wishlist',
  },
]

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <div className="sticky top-0 z-10 flex h-nav items-center bg-background px-4">
      <nav className={cn('mx-6 flex items-center space-x-4 lg:space-x-6')}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive ? 'text-primary' : 'hover:text-primary'
            )
          }
          title="Bookster"
        >
          <Library size={24} />
        </NavLink>
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) =>
              cn(
                'hidden text-sm font-medium transition-colors hover:text-primary sm:block',
                isActive ? 'text-primary' : 'hover:text-primary'
              )
            }
          >
            {t('nav.links.' + link.name)}
          </NavLink>
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

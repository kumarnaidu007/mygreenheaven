import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '@/app/providers/theme'
import logo from '@/assets/mygreenheaven-brand-leaf.png'
import { APP_NAME } from '@/shared/constants/env'
import { ROUTES } from '@/shared/constants/routes'
import styles from './Header.module.css'

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8h12l1 12H5L6 8Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  )
}

function ThemeIcon({ isDark }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {isDark ? (
        <>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
        </>
      ) : (
        <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
      )}
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {open ? (
        <>
          <path d="m6 6 12 12" />
          <path d="M18 6 6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const handleSearch = (event) => {
    event.preventDefault()
  }

  const closeMenu = () => setIsMenuOpen(false)

  const handleLogoClick = () => {
    closeMenu()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink
          to={ROUTES.HOME}
          className={styles.brand}
          aria-label={`${APP_NAME} home`}
          onClick={handleLogoClick}
        >
          <img className={styles.logo} src={logo} alt="" />
          <span className={styles.brandContent}>
            <span className={styles.wordmark}>
              my<span>green</span>heaven.in
            </span>
            <span className={styles.ornament} aria-hidden="true">
              <span className={styles.line} />
              <span className={styles.dot} />
              <span className={styles.line} />
            </span>
          </span>
        </NavLink>

        <form
          className={styles.search}
          role="search"
          onSubmit={handleSearch}
        >
          <label className={styles.srOnly} htmlFor="site-search">
            Search products
          </label>
          <SearchIcon />
          <input
            id="site-search"
            name="search"
            type="search"
            placeholder="Search products..."
            autoComplete="off"
          />
          <button
            className={styles.locationButton}
            type="button"
            aria-label="Choose location"
          >
            <LocationIcon />
          </button>
        </form>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Primary navigation"
        >
          <NavLink to={ROUTES.HOME} end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to={ROUTES.BOOK_CONSULTATION} onClick={closeMenu}>
            Book Consultation
          </NavLink>
          <NavLink to={ROUTES.CONTACT} onClick={closeMenu}>
            Contact Us
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <button
            className={`${styles.actionButton} ${styles.themeButton}`}
            type="button"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Light theme' : 'Dark theme'}
            onClick={toggleTheme}
          >
            <ThemeIcon isDark={isDark} />
          </button>
          <button
            className={`${styles.actionButton} ${styles.menuButton}`}
            type="button"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <MenuIcon open={isMenuOpen} />
          </button>
          <button
            className={styles.actionButton}
            type="button"
            aria-label="Shopping bag"
          >
            <BagIcon />
          </button>
          <button
            className={styles.actionButton}
            type="button"
            aria-label="Log in"
          >
            <UserIcon />
          </button>
        </div>
      </div>
    </header>
  )
}

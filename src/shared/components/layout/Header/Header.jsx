import { useState } from 'react'
import { NavLink } from 'react-router-dom'
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

  const handleSearch = (event) => {
    event.preventDefault()
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink
          to={ROUTES.HOME}
          className={styles.brand}
          aria-label={`${APP_NAME} home`}
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
          <NavLink to={ROUTES.SERVICES} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to={ROUTES.CONTACT} onClick={closeMenu}>
            Contact Us
          </NavLink>
        </nav>

        <div className={styles.actions}>
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

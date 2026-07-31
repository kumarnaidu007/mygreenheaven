import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '@/app/providers/theme'
import logo from '@/assets/mygreenheaven-brand-leaf.png'
import { APP_NAME } from '@/shared/constants/env'
import { CONSULTATION_SECTION_ID } from '@/shared/constants/sections'
import { ROUTES } from '@/shared/constants/routes'
import styles from './Header.module.css'

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

function scrollToConsultation() {
  document
    .getElementById(CONSULTATION_SECTION_ID)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  const handleLogoClick = () => {
    closeMenu()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleConsultationClick = (event) => {
    event.preventDefault()
    closeMenu()

    if (location.pathname === ROUTES.HOME) {
      scrollToConsultation()
      return
    }

    navigate(ROUTES.HOME)
    window.requestAnimationFrame(() =>
      window.requestAnimationFrame(scrollToConsultation),
    )
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

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Primary navigation"
        >
          <NavLink to={ROUTES.HOME} end onClick={closeMenu}>
            Home
          </NavLink>
          <a
            href={`#${CONSULTATION_SECTION_ID}`}
            onClick={handleConsultationClick}
          >
            Book Consultation
          </a>
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
        </div>
      </div>
    </header>
  )
}

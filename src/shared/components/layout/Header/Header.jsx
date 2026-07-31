import { NavLink } from 'react-router-dom'
import { useTheme } from '@/app/providers/theme'
import logo from '@/assets/mygreenheaven-brand-leaf.png'
import { APP_NAME } from '@/shared/constants/env'
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

export function Header() {
  const { isDark, toggleTheme } = useTheme()

  const handleLogoClick = () => {
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

        <button
          className={styles.themeButton}
          type="button"
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          title={isDark ? 'Light theme' : 'Dark theme'}
          onClick={toggleTheme}
        >
          <ThemeIcon isDark={isDark} />
        </button>
      </div>
    </header>
  )
}

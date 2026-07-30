import { NavLink } from 'react-router-dom'
import logo from '@/assets/mygreenheaven-brand-leaf.png'
import { APP_NAME } from '@/shared/constants/env'
import { ROUTES } from '@/shared/constants/routes'
import styles from './Header.module.css'

export function Header() {
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
        <nav className={styles.nav} aria-label="Primary">
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

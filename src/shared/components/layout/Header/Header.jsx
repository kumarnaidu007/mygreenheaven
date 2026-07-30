import { NavLink } from 'react-router-dom'
import { APP_NAME } from '@/shared/constants/env'
import { ROUTES } from '@/shared/constants/routes'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to={ROUTES.HOME} className={styles.brand}>
          {APP_NAME}
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

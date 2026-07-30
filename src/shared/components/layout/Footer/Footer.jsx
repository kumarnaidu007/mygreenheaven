import { APP_NAME } from '@/shared/constants/env'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {year} {APP_NAME}. Grown with care.
        </p>
      </div>
    </footer>
  )
}

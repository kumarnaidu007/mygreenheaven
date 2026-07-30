import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/constants/routes'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <section className={styles.wrapper}>
      <p className={styles.code}>404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={ROUTES.HOME} className={styles.link}>
        Back to home
      </Link>
    </section>
  )
}

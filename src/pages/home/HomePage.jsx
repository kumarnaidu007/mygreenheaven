import { Button } from '@/shared/components/ui/Button'
import { APP_NAME } from '@/shared/constants/env'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Production-ready React + Vite</p>
      <h1>{APP_NAME}</h1>
      <p className={styles.lead}>
        Clean architecture with app shell, routed pages, shared UI, API client,
        environment config, and CI-ready tooling — ready for production
        deployment.
      </p>
      <div className={styles.actions}>
        <Button type="button">Start building</Button>
        <a
          className={styles.secondaryLink}
          href="https://vite.dev/guide/"
          target="_blank"
          rel="noreferrer"
        >
          Vite docs
        </a>
      </div>
    </section>
  )
}

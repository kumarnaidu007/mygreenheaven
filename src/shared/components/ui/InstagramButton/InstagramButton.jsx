import { APP_NAME } from '@/shared/constants/env'
import { INSTAGRAM_URL } from '@/shared/constants/sections'
import styles from './InstagramButton.module.css'

export function InstagramButton() {
  return (
    <a
      className={styles.button}
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${APP_NAME} on Instagram`}
      title="Follow us on Instagram"
    >
      <span className={styles.pulse} aria-hidden="true" />
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" stroke="none" />
      </svg>
      <span className={styles.label}>Follow us</span>
    </a>
  )
}

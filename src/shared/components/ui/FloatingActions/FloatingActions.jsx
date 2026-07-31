import { useLocation, useNavigate } from 'react-router-dom'
import { APP_NAME } from '@/shared/constants/env'
import { ROUTES } from '@/shared/constants/routes'
import {
  CONSULTATION_SECTION_ID,
  INSTAGRAM_URL,
} from '@/shared/constants/sections'
import styles from './FloatingActions.module.css'

function scrollToConsultation() {
  document
    .getElementById(CONSULTATION_SECTION_ID)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function FloatingActions() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleConsultationClick = (event) => {
    event.preventDefault()

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
    <div className={styles.actions}>
      <a
        className={styles.instagram}
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
      </a>

      <a
        className={styles.consultation}
        href={`#${CONSULTATION_SECTION_ID}`}
        onClick={handleConsultationClick}
        aria-label="Book a consultation"
        title="Book a consultation"
      >
        <span className={styles.pulse} aria-hidden="true" />
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 11.8c0 3.9-3.8 7.1-8.5 7.1-.98 0-1.92-.14-2.8-.4L4 20.5l1.45-3.75C4.2 15.4 3.5 13.7 3.5 11.8 3.5 7.9 7.3 4.7 12 4.7s8.5 3.2 8.5 7.1Z" />
          <circle cx="8.6" cy="11.8" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="11.8" r="1" fill="currentColor" stroke="none" />
          <circle cx="15.4" cy="11.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  )
}

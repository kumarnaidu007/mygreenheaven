import { useEffect, useState } from 'react'
import styles from './Carousel.module.css'

const AUTOPLAY_DELAY = 6000

export function Carousel({ slides = [], ariaLabel = 'Featured content' }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

    if (isPaused || slides.length < 2 || prefersReducedMotion) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, AUTOPLAY_DELAY)

    return () => window.clearInterval(timer)
  }, [isPaused, slides.length])

  if (slides.length === 0) {
    return null
  }

  return (
    <section
      className={styles.carousel}
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className={styles.slides} aria-live="polite">
        {slides.map((slide, index) => (
          <article
            key={slide.id}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ''
            }`}
            aria-hidden={index !== activeIndex}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <p className={styles.eyebrow}>{slide.eyebrow}</p>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.indicators} aria-label="Choose slide">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={index === activeIndex ? styles.current : ''}
            type="button"
            aria-label={`Show slide ${index + 1}: ${slide.title}`}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

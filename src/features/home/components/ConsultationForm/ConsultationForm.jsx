import { useState } from 'react'
import { submitWeb3Form } from '@/shared/lib/web3forms'
import styles from '../HomeContent/HomeContent.module.css'

const initialStatus = {
  type: 'idle',
  message: '',
}

export function ConsultationForm() {
  const [status, setStatus] = useState(initialStatus)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setStatus(initialStatus)

    try {
      await submitWeb3Form({
        name: String(formData.get('name') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        message: String(formData.get('message') || '').trim(),
        subject: 'New consultation request — mygreenheaven.in',
        from_name: 'mygreenheaven.in website',
      })

      form.reset()
      setStatus({
        type: 'success',
        message: 'Thank you! We received your request and will call you soon.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Unable to send your request right now. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      <label>
        Name
        <input type="text" name="name" autoComplete="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <label>
        Mobile number
        <input type="tel" name="phone" autoComplete="tel" required />
      </label>
      <label>
        Tell us about your space
        <textarea name="message" rows="3" />
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Book consultation'}
      </button>
      {status.type !== 'idle' ? (
        <p
          className={
            status.type === 'success'
              ? styles.formSuccess
              : styles.formError
          }
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  )
}

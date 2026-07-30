import { Component } from 'react'
import { Button } from '@/shared/components/ui/Button'
import styles from './ErrorBoundary.module.css'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      console.error('Unhandled UI error:', error, errorInfo)
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper} role="alert">
          <h1>Something went wrong</h1>
          <p>
            An unexpected error occurred. You can try again, or reload the page.
          </p>
          {import.meta.env.DEV && this.state.error?.message ? (
            <pre className={styles.details}>{this.state.error.message}</pre>
          ) : null}
          <div className={styles.actions}>
            <Button onClick={this.handleReset}>Try again</Button>
            <Button variant="secondary" onClick={() => window.location.reload()}>
              Reload
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

import { cn } from '@/shared/utils'
import styles from './Button.module.css'

export function Button({
  children,
  variant = 'primary',
  type = 'button',
  className,
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

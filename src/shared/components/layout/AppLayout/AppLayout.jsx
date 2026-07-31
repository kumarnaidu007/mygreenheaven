import { Outlet } from 'react-router-dom'
import { Footer } from '@/shared/components/layout/Footer'
import { Header } from '@/shared/components/layout/Header'
import { FloatingActions } from '@/shared/components/ui/FloatingActions'
import styles from './AppLayout.module.css'

export function AppLayout() {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}

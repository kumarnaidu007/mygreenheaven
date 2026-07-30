import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from '@/shared/components/ui/ErrorBoundary'
import { queryClient } from '@/shared/lib/queryClient'
import { router } from '@/app/router'
import { ThemeProvider } from '@/app/providers/theme'

export function AppProviders() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

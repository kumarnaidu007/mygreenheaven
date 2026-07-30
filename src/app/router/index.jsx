import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/shared/components/layout/AppLayout'
import { ROUTES } from '@/shared/constants/routes'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
])

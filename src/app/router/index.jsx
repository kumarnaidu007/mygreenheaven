import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/shared/components/layout/AppLayout'
import { ROUTES } from '@/shared/constants/routes'
import { BookConsultationPage } from '@/pages/book-consultation'
import { ContactPage } from '@/pages/contact'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { ServicesPage } from '@/pages/services'

export const router = createBrowserRouter(
  [
    {
      path: ROUTES.HOME,
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: ROUTES.BOOK_CONSULTATION,
          element: <BookConsultationPage />,
        },
        {
          path: ROUTES.SERVICES,
          element: <ServicesPage />,
        },
        {
          path: ROUTES.CONTACT,
          element: <ContactPage />,
        },
        {
          path: ROUTES.NOT_FOUND,
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)

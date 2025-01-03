import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from './pages/_layouts/auth'
import { SignIn } from './pages/auth/sign-in'
import { NotFound } from './pages/404'
import { Error } from './pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <AppLayout />,
    errorElement: <Error />,
    children: [
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

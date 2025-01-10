import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from './pages/_layouts/auth'
import { SignIn } from './pages/auth/sign-in'
import { NotFound } from './pages/404'
import { Error } from './pages/error'
import { SignUp } from './pages/auth/sign-up'
import { AppLayout } from './pages/_layouts/app'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Products } from './pages/app/products/products'
import { NewProduct } from './pages/app/new-product/new-product'
import { UpdateProduct } from './pages/app/update-product/update-product'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/new',
        element: <NewProduct />
      },
      {
        path: '/products/:id',
        element: <UpdateProduct />
      }
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
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

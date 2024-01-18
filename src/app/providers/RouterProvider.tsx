// import AuthLayout from '@/shared/ui/layouts/AuthLayout'
import RegisterMethodPage from '@/pages/auth/register/RegisterMethodPage'
import { createBrowserRouter } from 'react-router-dom'
import { authLayout, defaultLayout } from './LayoutProvider'
import HomePage from '@/pages/home/HomePage'
import LoginFormPage from '@/pages/auth/login/Page'
import RegisterPage from '@/pages/auth/register/RegisterPage'
import { NewPostPage } from '@/pages/new-post'

export const route = createBrowserRouter([
  {
    element: defaultLayout,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  },
  {
    element: authLayout,
    children: [
      {
        path: '/auth/register',
        element: <RegisterMethodPage />
      },
      {
        path: '/auth/email_signup',
        element: <RegisterPage />
      },
      {
        path: '/auth/login',
        element: <LoginFormPage />
      }
    ]
  },
  {
    element: authLayout,
    children: [
      {
        path: '/new',
        element: <NewPostPage />
      }
    ]
  }
])

import AuthLayout from '@/shared/ui/layouts/AuthLayout'
import LoginFormPage from '@/pages/auth/login/LoginFormPage'
import RegisterFormPage from '@/pages/auth/register/RegisterFormPage'
import RegisterMethodPage from '@/pages/auth/register/RegisterMethodPage'
import { createBrowserRouter } from 'react-router-dom'
import { baseLayoyt } from './BaseLayout'
import HomePage from '@/pages/auth/home/HomePage'

export const route = createBrowserRouter([
  {
    element: baseLayoyt,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/register',
        element: <RegisterMethodPage />
      },
      {
        path: '/auth/email_signup',
        element: <RegisterFormPage />
      },
      {
        path: '/auth/login',
        element: <LoginFormPage />
      }
    ]
  }
])

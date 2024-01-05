import AuthLayout from '@/components/layouts/AuthLayout'
import LoginFormPage from '@/views/auth/login/LoginFormPage'
import RegisterFormPage from '@/views/auth/register/RegisterFormPage'
import RegisterMethodPage from '@/views/auth/register/RegisterMethodPage'
import { createBrowserRouter } from 'react-router-dom'

export const route = createBrowserRouter([
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

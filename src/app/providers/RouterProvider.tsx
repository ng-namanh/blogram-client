import { createBrowserRouter } from 'react-router-dom'
import { authLayout, defaultLayout, newPostLayout } from './LayoutProvider'
import HomePage from '@/pages/home/HomePage'
import { CreatePostPage } from '@/pages/create-post'
import { LoginFormPage, RegisterMethodPage, RegisterPage } from '@/pages/auth'

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
    element: newPostLayout,
    children: [
      {
        path: '/new',
        element: <CreatePostPage />
      }
    ]
  }
])

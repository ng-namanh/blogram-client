import { createBrowserRouter } from 'react-router-dom';
import { authLayout, homeLayout, newPostLayout } from './LayoutProvider';
import MainPage from '@/pages/main/Page';
import { CreatePostPage } from '@/pages/create-post';
import { LoginFormPage, RegisterMethodPage, RegisterPage } from '@/pages/auth';

export const route = createBrowserRouter([
  {
    element: homeLayout,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
  {
    element: authLayout,
    children: [
      {
        path: '/auth/register',
        element: <RegisterMethodPage />,
      },
      {
        path: '/auth/email_signup',
        element: <RegisterPage />,
      },
      {
        path: '/auth/login',
        element: <LoginFormPage />,
      },
    ],
  },
  {
    element: newPostLayout,
    children: [
      {
        path: '/new',
        element: <CreatePostPage />,
      },
    ],
  },
]);

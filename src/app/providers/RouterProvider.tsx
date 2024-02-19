import { createBrowserRouter } from 'react-router-dom';
import {
  authLayout,
  defaultLayout,
  homeLayout,
  newPostLayout,
} from './LayoutProvider';
import MainPage from '@/pages/main/Page';
import { CreatePostPage } from '@/pages/create-post';
import { LoginFormPage, RegisterMethodPage, RegisterPage } from '@/pages/auth';
import { PostPage } from '@/pages/post/Page';

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
    element: defaultLayout,
    children: [
      {
        path: '/post/:postId',
        element: <PostPage />,
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

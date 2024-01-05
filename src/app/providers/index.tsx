import { RouterProvider } from 'react-router-dom'
import { route } from './RouterProvider'

export function Provider() {
  return <RouterProvider router={route} />
}

import { RouterProvider } from 'react-router-dom'
import { route } from './RouterProvider'
import MaxWidthWrapper from '@/components/layouts/MaxWidthWrapper'

export function Provider() {
  return (
    <MaxWidthWrapper>
      <RouterProvider router={route} />
    </MaxWidthWrapper>
  )
}

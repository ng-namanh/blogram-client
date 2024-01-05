import { RouterProvider } from 'react-router-dom'
import { route } from './RouterProvider'
import MaxWidthWrapper from '@/shared/ui/layouts/MaxWidthWrapper'

export function Provider() {
  return (
    <MaxWidthWrapper>
      <RouterProvider router={route} />
    </MaxWidthWrapper>
  )
}

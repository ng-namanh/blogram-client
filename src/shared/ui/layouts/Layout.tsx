import { cn } from '@/shared/lib/utils'
import { type ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {
  headerSlot?: ReactNode
  className?: string
  itemStart?: boolean
}

function Layout(props: Props) {
  return (
    <div
      className={cn(
        `min-h-screen flex items-start justify-center flex-col ${props.className}`
      )}
    >
      {props.headerSlot}
      <div
        className={`max-w-screen-sm lg:max-w-screen-lg mx-auto my-0 flex-1 flex justify-center ${
          props.itemStart ? 'items-start' : 'items-center'
        }`}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default Layout

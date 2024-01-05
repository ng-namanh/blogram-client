import { type ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {
  headerSlot: ReactNode
}

function Layout(props: Props) {
  return (
    <div className='min-h-screen max-w-screen-sm mx-auto my-auto flex items-start justify-center flex-col'>
      {props.headerSlot}
      <Outlet />
    </div>
  )
}

export default Layout

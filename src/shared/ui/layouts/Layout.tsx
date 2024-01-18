import { type ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {
  headerSlot?: ReactNode
}

function Layout(props: Props) {
  return (
    <div className='min-h-screen flex items-start justify-center flex-col'>
      {props.headerSlot}
      <div className='max-w-screen-sm lg:max-w-screen-lg mx-auto my-0 flex-1 flex justify-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout

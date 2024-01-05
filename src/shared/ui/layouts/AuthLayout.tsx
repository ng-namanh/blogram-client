import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className='min-h-screen max-w-screen-sm  mx-auto my-auto flex items-start justify-center flex-col md:p-12'>
      <Outlet />
    </div>
  )
}
export default AuthLayout

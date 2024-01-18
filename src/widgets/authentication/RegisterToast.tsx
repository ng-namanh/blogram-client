import { Link } from 'react-router-dom'

export function RegisterToast(): JSX.Element {
  return (
    <div className='flex justify-center items-center w-full text-center py-2 mt-4 bg-green-500 rounded-sm text-secondary'>
      <p>
        Register successfully!
        <Link to='/auth/login' className='text-[#3b49df] ml-1'>
          Click here to log in.
        </Link>
      </p>
    </div>
  )
}

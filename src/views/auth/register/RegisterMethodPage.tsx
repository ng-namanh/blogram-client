import { Button } from '@/components/ui/button'
import logo from '@/assets/logo.png'
import { Github, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
function RegisterMethodPage() {
  return (
    <div className='mx-auto my-0 flex items-center justify-center flex-col'>
      <div className='flex justify-center items-center flex-col'>
        <img src={logo} alt='logo' className=' w-[60px]' />
        <h1 className='text-center font-bold text-2xl md:text-3xl mt-4'>
          Join the DEV Community
        </h1>
        <p className='text-center mt-2'>
          DEV Community is a community of 1,218,824 amazing developers
        </p>
      </div>
      <div className='w-full flex flex-col gap-4 mt-8'>
        <Button variant='outline' className='w-full'>
          <Github />
          <span className='flex-1 text-lg'>Sign up with Github</span>
        </Button>
        <Link to='/auth/email_signup'>
          <Button variant='outline' className='w-full'>
            <Mail />
            <span className='flex-1 text-lg'>Sign up with Email</span>
          </Button>
        </Link>
      </div>
      <div className='mt-6 border-t w-full text-center pt-8'>
        <p>
          Already have an account?
          <Link to='/auth/login' className='text-[#3b49df] ml-1'>
            Log in.
          </Link>
        </p>
      </div>
    </div>
  )
}
export default RegisterMethodPage

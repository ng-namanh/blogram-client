import { Button } from '@/shared/ui/button'
import { AuthHeader } from '@/widgets/authentication'
import { Github, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
function RegisterMethodPage() {
  return (
    <div className='mx-auto my-0 flex items-center justify-center flex-col'>
      <AuthHeader />
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

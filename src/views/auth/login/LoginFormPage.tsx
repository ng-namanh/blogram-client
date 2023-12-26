import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginForm, loginFormSchema } from '@/types/auth'
function LoginFormPage() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit(values: LoginForm) {
    console.log(values)
    form.reset()
  }
  return (
    <div className='mx-auto'>
      <div className='flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center flex-col'>
          <img src={logo} alt='logo' className='w-[60px]' />
          <h1 className='text-center font-bold text-2xl md:text-3xl mt-4'>
            Join the DEV Community
          </h1>
          <p className='text-center mt-2'>
            DEV Community is a community of 1,218,824 amazing developers
          </p>
        </div>
        <div className='w-full flex flex-col gap-4 mt-8'>
          <Button variant='outline' className='w-full py-6'>
            <Github />
            <span className='flex-1 text-lg'>Sign up with Github</span>
          </Button>
        </div>
      </div>
      <div className='text-center relative my-4'>
        <hr className='h-[1px] absolute left-0 right-0 top-1/2' />
        <span className='relative bg-white px-2'>OR</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 w-full'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>Email</FormLabel>
                <FormControl>
                  <Input placeholder='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full'>
            Login
          </Button>
        </form>
      </Form>
      <div className='mt-6 border-t w-full text-center pt-8'>
        <p>
          New to DEV Community?
          <Link to='/auth/register' className='text-[#3b49df] ml-1'>
            Create account.
          </Link>
        </p>
      </div>
    </div>
  )
}
export default LoginFormPage

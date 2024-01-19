import { Github } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, Button } from '@/shared/ui'
import {
  loginFormSchema,
  LoginFormType
} from '@/feature/authentication/login/model/loginSchema'
import { RequestLoginBody } from '@/entities/auth/api/types'
import { AuthHeader, FormFieldWrapper } from '@/widgets/authentication'
import { useLoginMutation } from '@/entities/auth/api/authApi'
import { setCredentials } from '@/entities/auth/model/slice'
import { useAppDispatch } from '@/shared/model/hook'
import { useToast } from '@/shared/ui/use-toast'
import { Toaster } from '@/shared/ui/toaster'

export function LoginForm() {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { toast } = useToast()

  async function onSubmit(values: RequestLoginBody) {
    try {
      const userData = await login(values).unwrap()
      dispatch(setCredentials({ ...userData, values }))
      form.reset()
      navigate('/')
    } catch (error: unknown) {
      toast({
        title: 'Wrong username or password'
      })
    }
  }

  return (
    <div className='mx-auto flex flex-col justify-center '>
      <div className='flex justify-center items-center flex-col'>
        <AuthHeader />
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
          <FormFieldWrapper
            name='email'
            label='Email'
            control={form.control}
            placeholder='email'
            type='email'
          />
          <FormFieldWrapper
            name='password'
            label='Password'
            control={form.control}
            placeholder='password'
            type='password'
          />
          <Button type='submit' className='w-full'>
            Login
          </Button>
        </form>
      </Form>
      <Toaster />
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

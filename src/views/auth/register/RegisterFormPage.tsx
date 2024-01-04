import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SignupForm, signupFormSchema } from '@/types/auth'
import { registerUser } from '@/services/api'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function RegisterFormPage() {
  const [isRegistered, setIsRegistered] = useState(false)

  const form = useForm<SignupForm>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  function onSubmit(values: SignupForm) {
    registerUser(values).then((response) => {
      if (response.success === true) {
        setIsRegistered(true)
      }
    })
    form.reset()
  }

  function RegisterToast(): JSX.Element {
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

  return (
    <div className='flex items-start justify-center flex-col w-full'>
      <h1 className='font-bold mb-8 text-2xl'>Create your account</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 w-full'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>Name</FormLabel>
                <FormControl>
                  <Input placeholder='name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>Username</FormLabel>
                <FormControl>
                  <Input placeholder='username' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='confirm password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Sign up</Button>
        </form>
      </Form>
      {isRegistered && <RegisterToast />}
    </div>
  )
}

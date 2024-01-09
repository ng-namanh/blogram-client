import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, Button } from '@/shared/ui'
import { createUser } from '@/shared/api'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import FormFieldWrapper from '@/widgets/authentication/FormFieldWrapper'
import { signupFormSchema } from '@/entities/auth/model/schema'
import { SignupForm } from '@/entities/auth/model/types'

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
    createUser(values).then((response) => {
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
          <FormFieldWrapper
            name='name'
            label='Name'
            control={form.control}
            placeholder='name'
            type='text'
          />
          <FormFieldWrapper
            name='username'
            label='Username'
            control={form.control}
            placeholder='username'
            type='text'
          />
          <FormFieldWrapper
            name='email'
            label='Email'
            control={form.control}
            placeholder='Email'
            type='text'
          />
          <FormFieldWrapper
            name='password'
            label='Password'
            control={form.control}
            placeholder='password'
            type='password'
          />
          <FormFieldWrapper
            name='confirmPassword'
            label='Confirm Password'
            control={form.control}
            placeholder='confirm password'
            type='password'
          />

          <Button type='submit'>Sign up</Button>
        </form>
      </Form>
      {isRegistered && <RegisterToast />}
    </div>
  )
}

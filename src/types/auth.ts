import * as z from 'zod'

export const signupFormSchema = z
  .object({
    name: z.string().min(2, {
      message: 'Name must be at least 2 characters.'
    }),
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.'
    }),
    email: z
      .string({
        required_error: 'Please select an email to display.'
      })
      .email(),
    password: z.string().min(6, {
      message: 'Password must be at least 6 characters.'
    }),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  })

export const loginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.'
    })
    .email(),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.'
  })
})

export type LoginForm = z.infer<typeof loginFormSchema>
export type SignupForm = z.infer<typeof signupFormSchema>

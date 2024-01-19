import { z } from 'zod'

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

export type LoginFormType = z.infer<typeof loginFormSchema>

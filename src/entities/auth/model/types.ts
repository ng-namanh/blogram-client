import { z } from 'zod'
import { loginFormSchema, signupFormSchema } from './schema'

export type LoginForm = z.infer<typeof loginFormSchema>
export type SignupForm = z.infer<typeof signupFormSchema>

export type ReturnMessage = {
  success: boolean
  message: string
}

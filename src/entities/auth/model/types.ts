import { z } from 'zod'
import { loginFormSchema, signupFormSchema } from './schema'

export type LoginForm = z.infer<typeof loginFormSchema>
export type SignupForm = z.infer<typeof signupFormSchema>

export type ReturnMessage = {
  success: boolean
  message: string
}

// use in entities/user later
export type User = {
  id: number
  email: string
}

export type AuthCredentials = {
  user: User
  accessToken: string
}

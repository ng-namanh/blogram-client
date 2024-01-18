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

import { User } from '../model/types'

export type AuthCredentialsDto = {
  accessToken: string
  user: User
}

export type RequestLoginBody = {
  email: string
  password: string
}

import { User } from '../model/types'

export type SessionDto = {
  accessToken: string
  user: User
}

export type RequestLoginBody = {
  email: string
  password: string
}

import { AuthCredentialsDto } from '../api/types'
import { AuthCredentials } from '../model/types'

export function mapSession(dto: AuthCredentialsDto): AuthCredentials {
  return {
    accessToken: dto.accessToken,
    user: dto.user
  }
}

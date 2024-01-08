import { SessionDto } from '../api/types'
import { Session } from '../model/types'

export function mapSession(dto: SessionDto): Session {
  return {
    accessToken: dto.accessToken,
    userId: dto.user.id
  }
}

import { baseApi } from '@/shared/api/baseApi'
import { Session } from '../model/types'
import { RequestLoginBody, SessionDto } from './types'
import { mapSession } from '../lib/mapSession'
import { SESSION_TAG } from '@/shared/api/tags'

export const jwtApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Session, RequestLoginBody>({
      query: (body) => ({
        url: '/login',
        method: 'post',
        body
      }),
      invalidatesTags: [SESSION_TAG],
      transformResponse: (response: SessionDto) => mapSession(response)
    })
  })
})

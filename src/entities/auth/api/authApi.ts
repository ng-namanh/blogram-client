import { baseApi } from '@/shared/api/baseApi'
import { Session } from '../model/types'
import { RequestLoginBody, SessionDto } from './types'
import { mapSession } from '../lib/mapSession'
// import { SESSION_TAG } from '@/shared/api/tags'

export const authApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Session, RequestLoginBody>({
      query: (body) => ({
        url: 'auth/login',
        method: 'post',
        body
      }),
      // invalidatesTags: [SESSION_TAG],
      transformResponse: (response: SessionDto) => mapSession(response)
    })
  })
})

export const { useLoginMutation } = authApiSlice

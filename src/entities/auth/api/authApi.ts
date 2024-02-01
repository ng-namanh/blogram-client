import { baseApi } from '@/shared/api/baseApi'
import { AuthCredentials } from '../model/types'
import { RequestLoginBody, AuthCredentialsDto } from './types'
import { mapSession } from '../lib/mapSession'
import { SESSION_TAG } from '@/shared/api/tags'

export const authApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthCredentials, RequestLoginBody>({
      query: (body) => ({
        url: 'auth/login',
        method: 'post',
        body
      }),
      invalidatesTags: [SESSION_TAG],
      // Manipulate the response to match the AuthCredentials type
      transformResponse: (response: AuthCredentialsDto) => mapSession(response)
    })
  })
})

export const { useLoginMutation } = authApiSlice

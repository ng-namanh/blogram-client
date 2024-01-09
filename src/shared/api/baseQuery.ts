import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '../lib/config'
import { RootState } from '@/app/appStore'

export const baseQuery = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
  credentials: 'same-origin',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  }
})

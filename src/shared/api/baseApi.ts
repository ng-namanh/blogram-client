// create a baseApi with redux-toolkit query
import { createApi } from '@reduxjs/toolkit/query/react'
import { SESSION_TAG } from './tags'
import { baseQueryWithReauth } from './baseQueryWithReauth'

export const baseApi = createApi({
  tagTypes: [SESSION_TAG],
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
})

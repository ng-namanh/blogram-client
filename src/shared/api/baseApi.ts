// create a baseApi with redux-toolkit query
import { createApi } from '@reduxjs/toolkit/query'
import { baseQuery } from './baseQuery'
import { SESSION_TAG } from './tags'

export const baseApi = createApi({
  tagTypes: [SESSION_TAG],
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({})
})

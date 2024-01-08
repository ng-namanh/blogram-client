import {
  BaseQueryApi,
  FetchBaseQueryMeta,
  type FetchArgs,
  type FetchBaseQueryError
} from '@reduxjs/toolkit/query'
import { baseQuery } from './baseQuery'
import { QueryReturnValue } from 'node_modules/@reduxjs/toolkit/dist/query/baseQueryTypes'
import { RootState } from '@/app/appStore'
import { logout, setCredentials } from '@/entities/auth/model/slice'

const AUTH_ERROR_CODES = new Set([401])

export async function baseQueryWithReauth(
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> {
  let result = await baseQuery(args, api, extraOptions)

  if (
    typeof result.error?.status === 'number' &&
    AUTH_ERROR_CODES.has(result?.error?.status)
  ) {
    // send refresh token request
    console.log('sending refresh token')
    const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)
    console.log(refreshResult)
    if (refreshResult?.data) {
      const userId = (api.getState() as RootState).auth.userId
      api.dispatch(setCredentials({ ...refreshResult.data, userId }))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logout())
    }
  }

  return result
}

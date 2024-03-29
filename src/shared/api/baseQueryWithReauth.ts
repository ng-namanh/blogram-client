import {
  BaseQueryApi,
  FetchBaseQueryMeta,
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { baseQuery } from './baseQuery';
import { QueryReturnValue } from 'node_modules/@reduxjs/toolkit/dist/query/baseQueryTypes';
import { RootState } from '@/app/appStore';
import { logout, setCredentials } from '@/entities/auth/model/slice';

const AUTH_ERROR_CODES = new Set([401]);

export async function baseQueryWithReauth(
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> {
  let result = await baseQuery(args, api, extraOptions);

  if (
    typeof result.error?.status === 'number' &&
    AUTH_ERROR_CODES.has(result?.error?.status)
  ) {
    console.log('sending refresh token');

    const user = (api.getState() as RootState).auth.user;
    const token = (api.getState() as RootState).auth.token;

    if (user) {
      const refreshArgs: FetchArgs = {
        url: '/auth/refresh',
        method: 'POST',
        body: token,
      };

      const refreshResult = await baseQuery(refreshArgs, api, extraOptions);
      console.log(refreshResult);

      if (refreshResult?.data) {
        api.dispatch(setCredentials({ ...refreshResult.data, user }));
        result = await baseQuery(args, api, extraOptions);
      }
    } else {
      console.log('no user found, logging out');
      api.dispatch(logout());
    }
  }

  return result;
}

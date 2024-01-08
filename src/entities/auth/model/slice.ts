import { RootState } from '@/app/appStore'
import { createSlice } from '@reduxjs/toolkit'
import { jwtApi } from '@/entities/auth/api/jwtApi'
type JwtSessionSliceState =
  | {
      accessToken: string | null
      userId: number
      isAuthorized: true
    }
  | {
      isAuthorized: false
      accessToken?: string | null
      userId?: number
    }

const initialState: JwtSessionSliceState = {
  isAuthorized: false
}

export const jwtSessionSlice = createSlice({
  name: 'jwtSession',
  initialState,
  reducers: {
    clearToken: (state) => {
      state.accessToken = undefined
      state.userId = undefined
      state.isAuthorized = false
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      jwtApi.endpoints.login.matchFulfilled,
      (state: JwtSessionSliceState, { payload }) => {
        state.isAuthorized = true

        if (state.isAuthorized) {
          state.userId = payload.userId
          state.accessToken = payload.accessToken
        }
      }
    )
  }
})

export const selectIsAuthorized = (state: RootState) => {
  return state.jwtSession.isAuthorized
}

export const selectUserId = (state: RootState) => state.jwtSession.userId

export const { clearToken } = jwtSessionSlice.actions

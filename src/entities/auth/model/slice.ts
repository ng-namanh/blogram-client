import { RootState } from '@/app/appStore'
import { createSlice } from '@reduxjs/toolkit'
import { authApiSlice } from '@/entities/auth/api/authApi'
type AuthSliceState =
  | {
      accessToken: string | null
      userId: number
      isAuthorized: true
    }
  | {
      isAuthorized: false
      accessToken?: string | null
      userId?: number | null
    }

const initialState: AuthSliceState = {
  isAuthorized: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null
      state.userId = null
      state.isAuthorized = false
    },
    setCredentials: (state, action) => {
      const { accessToken, userId } = action.payload
      if (accessToken && userId) {
        state.accessToken = accessToken
        state.userId = userId
        // state.isAuthorized = true
      }
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state: AuthSliceState, { payload }) => {
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
  return state.auth.isAuthorized
}

export const selectUserId = (state: RootState) => state.auth.userId

export const { logout, setCredentials } = authSlice.actions
